import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
// $IMPORTSTATEMENT

/**
 * Generated class for the ListInformation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-list-information',
  templateUrl: 'list-information.html',
})
export class ListInformation {
  lvRDN: string;
  zfRDN: any;
  priceRDN: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListInformation');
  }
  items: Array<any> = [
    { name: '上证指数', price: this.priceRDN, zf: this.zfRDN, lv: this.lvRDN + '%', },
    { name: '深证指数', price: this.priceRDN, zf: this.zfRDN, lv: this.lvRDN + '%', },
    { name: '中小板数', price: this.priceRDN, zf: this.zfRDN, lv: this.lvRDN + '%', },
  ];

}
