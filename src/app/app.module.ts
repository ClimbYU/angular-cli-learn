import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import {PagesModule} from './pages/pages.module';
import { TranslateService } from '@ngx-translate/core';
// 引入路由
import {routing} from  './app.routing';
import { NgaModule } from './theme/nga.module';

import { GlobalState } from './global.state';

const APP_PROVIDERS = [
  GlobalState
];


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
    HttpModule
    // NgbModule.forRoot(),
    // RouterModule
  ],
  providers: [
    APP_PROVIDERS
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
