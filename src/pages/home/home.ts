import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lang:any;
  constructor(public navCtrl: NavController, public translate: TranslateService) {
    this.lang = 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  switchLanguage() {
    this.translate.use(this.lang);
  }

}
