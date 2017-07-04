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
  @Output() expandMenu = new EventEmitter<any>();


  public menuItems: any[];
  protected _menuItemsSub: Subscription;
  public showHoverElem: boolean;
  public hoverElemHeight: number;
  public hoverElemTop: number;
  
  constructor(private _service: BaMenuService, private _state: GlobalState) { 
    
  }

  public hoverItem($event): void {
    this.showHoverElem = true;
    this.hoverElemHeight = $event.currentTarget.clientHeight;
    // TODO: get rid of magic 66 constant
    this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
  }

   public toggleSubMenu($event): boolean {
    let submenu = jQuery($event.currentTarget).next();

    if (this.sidebarCollapsed) {
      this.expandMenu.emit(null);
      if (!$event.item.expanded) {
        $event.item.expanded = true;
      }
    } else {
      $event.item.expanded = !$event.item.expanded;
      submenu.slideToggle();
    }

    return false;
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
