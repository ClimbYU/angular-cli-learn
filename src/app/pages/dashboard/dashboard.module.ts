import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing }       from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgaModule } from '../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,//需要引入这样才能使用theme文件夹下的模块
  ],
  declarations: [
    DashboardComponent,
    PieChartComponent,
  ]
})
export class DashboardModule { }
