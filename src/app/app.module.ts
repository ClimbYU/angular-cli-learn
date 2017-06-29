import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import {PagesModule} from './pages/pages.module';
// 引入路由
import {routing} from  './app.routing';
import { NgaModule } from './theme/nga.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    PagesModule,
    NgaModule.forRoot(),
    // NgbModule.forRoot(),
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
