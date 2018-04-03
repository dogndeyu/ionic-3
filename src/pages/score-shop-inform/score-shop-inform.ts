import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScoreShopInformPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score-shop-inform',
  templateUrl: 'score-shop-inform.html',
})
export class ScoreShopInformPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreShopInformPage');
  }
  priceRDN = Math.floor(10 - (Math.random() * 20));
  items: Array<any> = [
    { Reason: '签到领取', Date: '2017-10-22 10:26:29', Count: this.priceRDN },
    { Reason: '活动获取', Date: '2017-10-22 10:26:29', Count: this.priceRDN },
    { Reason: '兑换京东券', Date: '2017-10-22 10:26:29', Count: this.priceRDN },
    { Reason: '兑换______', Date: '2017-10-22 10:26:29', Count: this.priceRDN },
    { Reason: '签到领取', Date: '2017-10-22 10:26:29', Count: this.priceRDN },
    { Reason: '签到领取', Date: '2017-10-22 10:26:29', Count: this.priceRDN },
    { Reason: '签到领取', Date: '2017-10-22 10:26:29', Count: this.priceRDN },
    { Reason: '签到领取', Date: '2017-10-22 10:26:29', Count: this.priceRDN },
    { Reason: '签到领取', Date: '2017-10-22 10:26:29', Count: this.priceRDN },
    { Reason: '签到领取', Date: '2017-10-22 10:26:29', Count: this.priceRDN }

  ]
}
