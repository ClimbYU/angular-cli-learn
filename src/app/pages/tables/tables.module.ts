import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TablesComponent} from './tables.component';
import {routing} from './tables.routing'

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    TablesComponent
  ]
})
export class TablesModule { }
