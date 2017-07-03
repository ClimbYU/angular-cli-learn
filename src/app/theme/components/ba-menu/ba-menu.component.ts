import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { GlobalState } from '../../../global.state';
import { BaMenuService } from '../../services';



@Component({
  selector: 'app-ba-menu',
  templateUrl: './ba-menu.component.html',
  styleUrls: ['./ba-menu.component.scss']
})
export class BaMenuComponent implements OnInit {

  @Input() sidebarCollapsed:boolean = false;
  @Input() menuHeight: number;


  public menuItems: any[];
  protected _menuItemsSub: Subscription;
  
  constructor(private _service: BaMenuService, private _state: GlobalState) { 
    
  }

  public updateMenu(newMenuItems) {
      this.menuItems = newMenuItems;
      this.selectMenuAndNotify();
    }
  
  public selectMenuAndNotify(): void {
    if (this.menuItems) {
      this.menuItems = this._service.selectMenuItem(this.menuItems);
      this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
    }
  }  
  
  ngOnInit():void{
    this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this));
}


}
