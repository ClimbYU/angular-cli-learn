import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditorsComponent } from './editors/editors.component';
import { ComponentsComponent } from './components/components.component';
import { ChartsComponent } from './charts/charts.component';
import { UiComponent } from './ui/ui.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { MapsComponent } from './maps/maps.component';

import { routing } from './pages.routing';
import { PagesComponent } from './pages.component';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    AppTranslationModule
  ],
  declarations: 
  [
    // ModuleComponent,
    // DashboardComponent, 
    // EditorsComponent, 
    // ComponentsComponent, 
    // ChartsComponent, 
    // UiComponent, 
    // FormsComponent, 
    // TablesComponent, 
    // MapsComponent
    PagesComponent,
    ],
})
export class PagesModule { }
