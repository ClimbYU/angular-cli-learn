import {Routes,RouterModule} from '@angular/router';
import { MapsComponent } from './maps.component';

const routes: Routes = [
  {
    path: '',
    component: MapsComponent,
    children: [
    //   { path: 'ckeditor', component: Ckeditor }
    ]
  }
];

export const routing = RouterModule.forChild(routes);