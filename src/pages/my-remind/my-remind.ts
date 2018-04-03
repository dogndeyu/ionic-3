import { Component } from '@angular/core';
import { NavController, NavParams, App } from "ionic-angular";
import { PtzhSell } from "../ptzh-sell/ptzh-sell";
// $IMPORTSTATEMENT

/**
 * Generated class for the MyRemind page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-my-remind',
  templateUrl: 'my-remind.html',
})
export class MyRemind {
  // items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {


  }
  items: Array<any> = [
    { name: '新股发行提醒', zt: 1, open: true },
    { name: '自选股到价提醒', zt: 1, open: true },
    { name: '投资组合变动提醒', zt: 1, open: true },
    { name: '客户活动提醒', zt: 1, open: true },
    { name: '积分变动提醒', zt: 1, open: false },
  ];
  packs: Array<any> = [
    { name: '新股中签提醒', zt: 2, open: false },
    { name: '银行转账提醒', zt: 1, open: true },
    { name: '成交提醒', zt: 1, open: true },
    { name: '理财产品到期提醒', zt: 1, open: true },
  ];


  ionViewDidLoad() {
    console.log('ionViewDidLoad MyRemind');
  }
  goPtzhSell() {
    this.app.getRootNav().push(PtzhSell, {

    });
  }
  control(){
    
  }
}
