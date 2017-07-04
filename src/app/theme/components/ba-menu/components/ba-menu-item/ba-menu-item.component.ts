import { Component,Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ba-menu-item',
  templateUrl: './ba-menu-item.component.html',
  styleUrls: ['./ba-menu-item.component.scss']
})
export class BaMenuItemComponent implements OnInit {

  @Input() menuItem:any;
  @Input() child:boolean = false;

  @Output() itemHover = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();

  constructor() { }

  public onHoverItem($event):void {
    this.itemHover.emit($event);
  }

  public onToggleSubMenu($event, item):boolean {
    $event.item = item;
    this.toggleSubMenu.emit($event);
    return false;
  }

  ngOnInit() {
  }

}
