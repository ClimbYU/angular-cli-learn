import { Component,ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-sidebar',
  templateUrl: './bar-sidebar.component.html',
  styleUrls: ['./bar-sidebar.component.scss']
})
export class BarSidebarComponent implements OnInit {
  public menuHeight:number;
  public sidebarCollapsed:boolean = false;

  constructor(private _elementRef:ElementRef) { }

  public ngAfterViewInit():void {
    setTimeout(() => this.updateSidebarHeight());
  }

  public updateSidebarHeight():void {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  ngOnInit() {
  }

}
