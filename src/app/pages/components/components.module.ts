import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ComponentsComponent} from './components.component';
import {routing} from './components.routing'

@NgModule({
  imports: [
    CommonModule,
    // 引入路由配置才可以正常加载
    routing
  ],
  declarations: [
    ComponentsComponent
  ]
})
export class ComponentsModule { }
