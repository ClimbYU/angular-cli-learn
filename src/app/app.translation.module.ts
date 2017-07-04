import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateService } from '@ngx-translate/core';

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/US/', '.json');
}

const translationOptions = {
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [Http]
  }
};

@NgModule({
  imports: [TranslateModule.forRoot(translationOptions)],
  exports: [TranslateModule],
  providers: [TranslateService]
})
export class AppTranslationModule {
  constructor(private translate: TranslateService) {
    //添加语言支持
    translate.addLangs(["en"]);
     //设置默认语言，一般在无法匹配的时候使用
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
