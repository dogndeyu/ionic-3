import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { AboutPage } from '../pages/marketQuotations/about';
import { ContactPage } from '../pages/information/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Trade } from "../pages/trade/trade";
import { GgxqDetails } from "../pages/ggxq-details/ggxq-details";
import { RisePlateLists } from "../pages/rise-plate-lists/rise-plate-lists";
import { GpSearch } from "../pages/gp-search/gp-search";
import { InformationDetail } from "../pages/information-detail/information-detail";
import { Login } from "../pages/login/login";
import { ActivityAreaPage } from '../pages/activity-area/activity-area';
import { Zjzz } from "../pages/zjzz/zjzz";
import { Zhfx } from "../pages/zhfx/zhfx";
import { MyPage } from "../pages/my-page/my-page";
import { MyRemind } from "../pages/my-remind/my-remind";
import { Xgrl } from "../pages/xgrl/xgrl";
import { Drxg } from "../pages/drxg/drxg";
import { Ptzhdx } from "../pages/ptzhdx/ptzhdx";
import { Ptsgcx } from "../pages/ptsgcx/ptsgcx";
import { TabList } from "../pages/tab-list/tab-list";
import { PtzhBuy } from "../pages/ptzh-buy/ptzh-buy";
import { PtzhSell } from "../pages/ptzh-sell/ptzh-sell";
import { UserInformation } from "../pages/user-information/user-information";
import { UserForm } from "../pages/user-form/user-form";
import { UserFormFill } from "../pages/user-form-fill/user-form-fill";
import { EntrustSearch } from "../pages/entrust-search/entrust-search";
import { MyPosition } from "../pages/my-position/my-position";
import { AllAsset } from "../pages/all-asset/all-asset";
import { ProprietInformation } from "../pages/propriet-information/propriet-information";
import { CheckList } from "../pages/check-list/check-list";
import { ListInformation } from "../pages/list-information/list-information";
//组件
import { MySlideModule } from "../components/my-slide/my-slide.module";
import { LoginInComponent } from '../components/login-in/login-in';



import { AssetPage } from "../pages/asset-page/asset-page";
import { ClientManager } from "../pages/client-manager/client-manager";
import { AppDownloadPage } from '../pages/app-download/app-download';

import { BaseserviceProvider } from '../providers/baseservice/baseservice';
import { ScoreShopPage } from '../pages/score-shop/score-shop';
import { MicroSchoolPage } from '../pages/micro-school/micro-school';
import { ComponentsModule } from '../components/components.module';
import { YywdPage } from '../pages/yywd/yywd';
import { HfYywdPage } from '../pages/hf-yywd/hf-yywd';
import { AhYywdPage } from '../pages/ah-yywd/ah-yywd';
import { ScoreShopInformPage } from '../pages/score-shop-inform/score-shop-inform';
import { MyZxgListPage } from '../pages/my-zxg-list/my-zxg-list';
import { AppService } from './app.service';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { ActivityAreaPageModule } from '../pages/activity-area/activity-area.module';
// import { HomeServiceProvider } from '../providers/home-service/home-service';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Trade,
    GgxqDetails,
    RisePlateLists,
    GpSearch,
    InformationDetail,
    Login,
    Zjzz,
    Zhfx,
    MyPage,
    MyRemind,
    Xgrl,
    Drxg,
    Ptzhdx,
    Ptsgcx,
    TabList,
    PtzhBuy,
    PtzhSell,
    UserInformation,
    UserForm,
    UserFormFill,
    EntrustSearch,
    MyPosition,
    AllAsset,
    ProprietInformation,
    CheckList,
    ListInformation,
    AssetPage,
    ClientManager,
    AppDownloadPage,
   
    ScoreShopPage,
    MicroSchoolPage,
    YywdPage,
    HfYywdPage,
    AhYywdPage,
    ScoreShopInformPage,
    MyZxgListPage, 
    
    
    
    // HttpModule,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '', // 配置返回按钮的文字
      backButtonIcon: 'ios-undo-outline', // 配置返回按钮的图标
      mode: 'ios',//样式强制使用ios样式
      iconMode: 'ios',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    }
      ,
      // {
      //   links: [
      //     { component: HomePage, name: 'Home', segment: 'home' },
      //     { component: AboutPage, name: 'About', segment: 'about' },
      //     { component: ContactPage, name: 'Contact', segment: 'contact' },
      //     { component: Trade, name: 'Trade', segment: 'trade' },
      //     { component: TabsPage, name: 'Tabs', segment: 'tabs' },
      //     { component: TabsPage, name: 'Tabs', segment: 'tabs/:tabId' }
      //   ]
      // }
    ),
    MySlideModule,
    ComponentsModule,
    ActivityAreaPageModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Trade,
    GgxqDetails,
    RisePlateLists,
    GpSearch,
    InformationDetail,
    Login,
        ActivityAreaPage,
    Zjzz,
    Zhfx,
    MyPage,
    MyRemind,
    Xgrl,
    Drxg,
    Ptzhdx,
    Ptsgcx,
    TabList,
    PtzhBuy,
    PtzhSell,
    UserInformation,
    UserForm,
    UserFormFill,
    EntrustSearch,
    MyPosition,
    AllAsset,
    ProprietInformation,
    CheckList,
    ListInformation,
    AssetPage,
    ClientManager,
    AppDownloadPage,

    ScoreShopPage,
    MicroSchoolPage,
    YywdPage,
    HfYywdPage,
    AhYywdPage,
    ScoreShopInformPage,
    MyZxgListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BaseserviceProvider,
    AppService,
    HttpServiceProvider,
    // HomeServiceProvider,

  ]
})

export class AppModule {

}
