import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { NgUploaderModule } from 'ngx-uploader';
// import { AppTranslationModule } from '../app.translation.module';


import {
  BaThemeConfig
} from './theme.config';

import {
  BaThemeConfigProvider
} from './theme.configProvider';

import {
    BarSidebarComponent,
    BaPageTopComponent,
    BaMsgCenterComponent,
    BaMenuComponent,
    BaMenuItemComponent
} from './components';

import {
   BaProfilePicturePipe 
  } from './pipes';

import {
  BaMenuService
}from './services'

const NGA_COMPONENTS =[
    BarSidebarComponent,
    BaPageTopComponent,
    BaMsgCenterComponent,
    BaMenuComponent,
    BaMenuItemComponent
]

const NGA_PIPES = [
  BaProfilePicturePipe
];

const NGA_SERVICES = [
  BaMenuService
];

@NgModule({
    declarations:[
        ...NGA_COMPONENTS,
        ...NGA_PIPES,
    ],
    imports:[
        CommonModule,
        RouterModule,
    ],
    exports:[
       // 需要暴露出去外面才可以使用自定义标签
         ...NGA_COMPONENTS,
         ...NGA_PIPES
    ]
})

export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      providers: [
        // BaThemeConfigProvider,
        // BaThemeConfig,
        // ...NGA_VALIDATORS,
        ...NGA_SERVICES
      ],
    };
  }
}
