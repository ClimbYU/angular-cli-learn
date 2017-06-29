import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routing} from './editors.routing';
import {EditorsComponent} from './editors.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    EditorsComponent
  ]
})
export class EditorsModule { }
