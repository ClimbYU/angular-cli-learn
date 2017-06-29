import {Routes , RouterModule} from '@angular/router';
import  {ChartsComponent} from './charts.component';

import {ModuleWithProviders} from '@angular/core';

export const routes :Routes = [
    {
        path:'',
        component:ChartsComponent,
        children:[

        ]
    }
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);