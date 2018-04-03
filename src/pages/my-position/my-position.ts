import { Component } from '@angular/core';
import { NavController, NavParams, App } from "ionic-angular";
import { EntrustSearch } from "../entrust-search/entrust-search";

import { ListInformation } from "../list-information/list-information";
// $IMPORTSTATEMENT

/**
 * Generated class for the MyPosition page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-my-position',
  templateUrl: 'my-position.html',
})
export class MyPosition {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPosition');
  }
  goEntrustSearch() {
    this.app.getRootNav().push(EntrustSearch, {
    });
  }
  showMenuList() {

  }
  // goAllAsset() {
  //   this.app.getRootNav().push(AllAsset, {
  //   });
  // }
  foListInformation() {
    this.app.getRootNav().push(ListInformation, {
    });
  }

  items: Array<any> = [
    { name: '创兴资源', zxj: 12.88, zfb: 5.00, ky: 3000, cccb: 12.74, mgyk: 0.14, kq: 3000, sz: 38640, ykbfb: 0.1, num: "000278" },
    { name: '创兴资源', zxj: 12.88, zfb: 5.00, ky: 3000, cccb: 12.74, mgyk: 0.14, kq: 3000, sz: 38640, ykbfb: 0.1, num: "000278" },
    { name: '创兴资源', zxj: 12.88, zfb: 5.00, ky: 3000, cccb: 12.74, mgyk: 0.14, kq: 3000, sz: 38640, ykbfb: 0.1, num: "000278" },
    { name: '创兴资源', zxj: 12.88, zfb: 5.00, ky: 3000, cccb: 12.74, mgyk: 0.14, kq: 3000, sz: 38640, ykbfb: 0.1, num: "000278" },

  ]
}
