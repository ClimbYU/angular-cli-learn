import {Routes,RouterModule} from '@angular/router';
import { UiComponent } from './ui.component';

const routes: Routes = [
  {
    path: '',
    component: UiComponent,
    children: [
    //   { path: 'ckeditor', component: Ckeditor }
    ]
  }
];

export const routing = RouterModule.forChild(routes);