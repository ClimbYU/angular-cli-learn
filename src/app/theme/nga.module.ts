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
    BaMsgCenterComponent
} from './components';

const NGA_COMPONENTS =[
    BarSidebarComponent,
    BaPageTopComponent,
    BaMsgCenterComponent
]

@NgModule({
    declarations:[
        ...NGA_COMPONENTS,
    ],
    imports:[
        CommonModule,
        RouterModule,
    ],
    exports:[
       // 需要暴露出去外面才可以使用自定义标签
         ...NGA_COMPONENTS
    ]
})

export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      // providers: [
      //   BaThemeConfigProvider,
      //   BaThemeConfig,
      //   ...NGA_VALIDATORS,
      //   ...NGA_SERVICES
      // ],
    };
  }
}
