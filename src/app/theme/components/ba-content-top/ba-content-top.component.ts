import { Component, OnInit } from '@angular/core';
import {GlobalState} from '../../../global.state';

@Component({
  selector: 'app-ba-content-top',
  templateUrl: './ba-content-top.component.html',
  styleUrls: ['./ba-content-top.component.scss']
})
export class BaContentTopComponent implements OnInit {

   public activePageTitle:string = '';

  constructor(private _state:GlobalState) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        this.activePageTitle = activeLink.title;
      }
    });
  }
  ngOnInit() {
  }

}
