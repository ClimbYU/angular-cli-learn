import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template:`
    <main>
        <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  title = 'app';
}
