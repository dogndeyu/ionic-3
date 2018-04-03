import { Component } from '@angular/core';
import { NavController, NavParams, App, LoadingController, ModalController, ViewController } from "ionic-angular";
import { Login } from "../login/login";
import { Zjzz } from "../zjzz/zjzz";
import { Zhfx } from "../zhfx/zhfx";
import { MyPage } from "../my-page/my-page";
import { MyRemind } from "../my-remind/my-remind";
import { Xgrl } from "../xgrl/xgrl";
import { Drxg } from "../drxg/drxg";
import { Ptzhdx } from "../ptzhdx/ptzhdx";
import { Ptsgcx } from "../ptsgcx/ptsgcx";
import { TabList } from "../tab-list/tab-list";
import { PtzhBuy } from "../ptzh-buy/ptzh-buy";
import { UserInformation } from "../user-information/user-information";
import { UserForm } from "../user-form/user-form";
import { MyPosition } from "../my-position/my-position";
import { AssetPage } from "../asset-page/asset-page";
import { ClientManager } from "../client-manager/client-manager";
import { AppDownloadPage } from '../app-download/app-download';
import { ActivityAreaPage } from '../activity-area/activity-area';
import { ScoreShopPage } from '../score-shop/score-shop';
import { MicroSchoolPage } from '../micro-school/micro-school';
import { LoginInComponent } from '../../components/login-in/login-in';
import { YywdPage } from '../yywd/yywd';
// $IMPORTSTATEMENT

/**
 * Generated class for the Trade page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-trade',
  templateUrl: 'trade.html',
})
export class Trade {
  loginState: number;
  itsShow: boolean;
  itsDetail: boolean;
  items;
  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, public loadingCtrl: LoadingController, public modalCtrl: ModalController,public viewCtrl: ViewController) {
    this.loginState = navParams.get("logins");
    if (this.loginState == 1) {
      this.itsShow = false;
      this.itsDetail = true
    } else {
      this.itsShow = true;
      this.itsDetail = false;
    }
    this.initializeItems();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Trade');
  }
  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
    ];
  }
  ionViewWillEnter() {
    const loading = this.loadingCtrl.create({
      content: ''

    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 500);

  }
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      console.log(this.items);
      this.items = this.items.filter((item) => {
        // console.log(item)
        // console.log(item.toLowerCase());
        // console.error('val是' + val.toLowerCase())
        // console.log(item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        // return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);

      })
    }
  }
  goLogin() {
    this.app.getRootNav().push(Login, {

    });
  }
  goZc360Page() {
    this.navCtrl.push(AssetPage, {

    });
  }
  goZjzzPage() {
    // alert(132)
    this.app.getRootNav().push(Zjzz, {

    });
  }
  goMyPage() {
    // alert(132)
    this.app.getRootNav().push(MyPage, {

    });
  }
  goMyXgrl() {
    this.app.getRootNav().push(Xgrl, {

    });
  }
  goMyRemind() {
    this.navCtrl.push(MyRemind, {

    });
  }
  goZhfxPage() {
    this.navCtrl.push(Zhfx, {

    });
  }
  goDrxgPage() {
    this.navCtrl.push(Drxg, {

    });
  }
  goPtzhdxPage() {
    this.navCtrl.push(Ptzhdx, {

    });
  }
  goPtsgcxPage() {
    this.navCtrl.push(Ptsgcx, {
    });
  }
  goTabListPage() {
    this.navCtrl.push(TabList, {
    });
  }
  goPtzhBuyPage() {
    this.navCtrl.push(PtzhBuy, {
    });
  }

  goKhjlPage() {
    this.navCtrl.push(ClientManager, {
    });
  }


  goUserInformation() {
    this.navCtrl.push(UserInformation, {
    });
  }
  goUserForm() {
    this.navCtrl.push(UserForm, {
    });
  }
  goMyposition() {
    this.navCtrl.push(MyPosition, {
    });
  }
  goAppDownloadPage() {
    this.navCtrl.push(AppDownloadPage, {
    });
  }
  goActivityAreaPage() {
    this.navCtrl.push(ActivityAreaPage, {
    });
  }
  goScoreShop() {
    this.navCtrl.push(ScoreShopPage, {
    });
  }
  goYywdPage() {
    this.navCtrl.push(YywdPage, {
    });
  }
  goMicroSchoolPage() {
    this.navCtrl.push(MicroSchoolPage, {
    });
  }
  showModal() {
    let profileModal = this.modalCtrl.create(Login, {
      enableBackdropDismiss: true
    });
    profileModal.present();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
