import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, NavController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Zhfx } from '../pages/zhfx/zhfx';
import { ScoreShopPage } from '../pages/score-shop/score-shop';
import { YywdPage } from '../pages/yywd/yywd';
import { UserInformation } from '../pages/user-information/user-information';
import { AssetPage } from '../pages/asset-page/asset-page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = TabsPage;
  pages: Array<{ title: string, component: any, wykh: boolean, zichan: boolean, tg: boolean, jfsc: boolean }>;
  stars: Array<{}>;
  wykh: boolean;
  zichan: boolean;
  tg: boolean;
  jfsc: boolean;
  @ViewChild(Nav) nav: Nav;
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public appCtrl: App
    // public navCtrl: NavController
  ) {
    this.pages = [
      { title: '我要开户', component: ScoreShopPage, wykh: true, zichan: false, tg: false, jfsc: false },
      { title: '资产360', component: AssetPage, wykh: false, zichan: true, tg: false, jfsc: false },
      { title: '投顾平台', component: YywdPage, wykh: false, zichan: false, tg: true, jfsc: false },
      { title: '积分商城', component: ScoreShopPage, wykh: false, zichan: false, tg: false, jfsc: true },
    ];
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.appCtrl.getRootNav().push(page.component);
    // this.navCtrl.push(page.component);
  }
  goUserInfo() {
    this.menu.close();
    this.appCtrl.getRootNav().push(UserInformation);
  }
}
