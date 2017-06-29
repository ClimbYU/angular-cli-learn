import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  {ChartsComponent} from './charts.component';
import {routing} from './charts.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    ChartsComponent
  ]
})
export class ChartsModule { }
