import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
// $IMPORTSTATEMENT

/**
 * Generated class for the GgxqDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-ggxq-details',
  templateUrl: 'ggxq-details.html',
})
export class GgxqDetails {
  priceRDN: any;
  // items: { titles: string; }[];
  // items: string
  items: [{ titles: string; times: any }];
  date = new Date();

  pet: string = "fenshi";
  pet2: string = "ggzxCont";
  gpLv: any;
  gpZf: any;
  gpPrice: any;
  gpName: any;
  time: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const time = new Date();
    const year: number = time.getFullYear();
    const month: number = time.getMonth() + 1;
    const day: number = time.getDate();
    const hour: number = time.getHours();
    const minute: number = time.getMinutes();
    const second: number = time.getSeconds();
    let nowTime = year + '-' + month + '-' + day + '-' + hour + '-' + minute + '-' + second;
    this.gpName = navParams.get("names")
    this.gpPrice = navParams.get("prices")
    this.gpZf = navParams.get("zfs")
    this.gpLv = navParams.get("lvs")
    console.log(this.gpName)
    console.log(this.gpPrice)
    console.log(this.gpZf)
    console.log(this.gpLv)
    this.items = [
      { titles: '券商上半年：中信、国君、广发、海通领跑', times: nowTime },
      { titles: '科大讯飞跳水大跌 机构席位抛售超2亿元', times: nowTime },
      { titles: '26家券商7月报：21家净利下滑 资管业务继续承压', times: nowTime },
      { titles: '券商上半年：中信、国君、广发、海通领跑', times: nowTime },
      { titles: '科大讯飞跳水大跌 机构席位抛售超2亿元', times: nowTime },
      { titles: '26家券商7月报：21家净利下滑 资管业务继续承压', times: nowTime },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GgxqDetails');
  }

}
