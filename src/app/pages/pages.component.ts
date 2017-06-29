import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  // templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  template:`
    <app-bar-sidebar></app-bar-sidebar>
     <app-ba-page-top></app-ba-page-top>
  `
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
