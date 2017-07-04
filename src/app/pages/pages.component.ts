import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

@Component({
  selector: 'app-pages',
  // templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  template:`
    <app-bar-sidebar></app-bar-sidebar>
    <app-ba-page-top></app-ba-page-top>
     <div class="al-main">
      <div class="al-content">
        <app-ba-content-top></app-ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class PagesComponent implements OnInit {

  constructor(private _menuService: BaMenuService,) {
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }

}
