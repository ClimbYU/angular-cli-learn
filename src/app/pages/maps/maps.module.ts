import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MapsComponent} from './maps.component';
import {routing} from './maps.routing'

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    MapsComponent
  ]
})
export class MapsModule { }
