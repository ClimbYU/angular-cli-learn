import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsComponent} from './forms.component';
import {routing} from './forms.routing'

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    FormsComponent
  ]
})
export class FormsModule { }
