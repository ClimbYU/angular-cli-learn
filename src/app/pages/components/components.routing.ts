import {Routes , RouterModule} from '@angular/router';
import  {ComponentsComponent} from './components.component';

import {ModuleWithProviders} from '@angular/core';

export const routes :Routes = [
    {
        path:'',
        component:ComponentsComponent,
        children:[

        ]
    }
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);