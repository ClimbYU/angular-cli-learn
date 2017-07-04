import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ba-card',
  templateUrl: './ba-card.component.html',
  styleUrls: ['./ba-card.component.scss']
})
export class BaCardComponent implements OnInit {

  @Input() title:String;
  @Input() baCardClass:String;
  @Input() cardType:String;

  constructor() { }

  ngOnInit() {
  }

}
