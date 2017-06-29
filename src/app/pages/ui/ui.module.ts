import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UiComponent} from './ui.component';
import {routing} from './ui.routing'

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    UiComponent
  ]
})
export class UiModule { }
