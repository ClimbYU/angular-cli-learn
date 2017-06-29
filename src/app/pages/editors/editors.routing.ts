import {Routes,RouterModule} from '@angular/router';
import { EditorsComponent } from './editors.component';

const routes: Routes = [
  {
    path: '',
    component: EditorsComponent,
    children: [
    //   { path: 'ckeditor', component: Ckeditor }
    ]
  }
];

export const routing = RouterModule.forChild(routes);