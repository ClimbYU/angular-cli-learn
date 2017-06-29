import { Component, OnInit } from '@angular/core';

import {BaMsgCenterService} from './baMsgCenter.service';

@Component({
  selector: 'app-ba-msg-center',
  providers:[BaMsgCenterService],
  templateUrl: './ba-msg-center.component.html',
  styleUrls: ['./ba-msg-center.component.scss']
})
export class BaMsgCenterComponent implements OnInit {

  public notifications:Array<Object>;
   public messages:Array<Object>;


  constructor(private _baMsgCenterService:BaMsgCenterService) { 
        this.notifications = this._baMsgCenterService.getNotifications();
    this.messages = this._baMsgCenterService.getMessages();

  }

  ngOnInit() {
  }

}
