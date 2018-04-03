import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
// $IMPORTSTATEMENT

/**
 * Generated class for the RisePlateLists page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-rise-plate-lists',
  templateUrl: 'rise-plate-lists.html',
})

export class RisePlateLists {

  risePlateName: any;
  items: any;
  zfbPriceRDN = (Math.random() * 10).toFixed(2);
  zfbLvRDN = (Math.random()).toFixed(2);
  zfbZfPriceRDN = (Math.random()).toFixed(2);
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.risePlateName = navParams.get("names")

    this.items = [
      { name: '创兴资源', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600193 },
      { name: '中国银河', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600235 },
      { name: '东方证券', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 150022 },
      { name: '创兴资源', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600123 },
      { name: '中国银河', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 125021 },
      { name: '东方证券', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 125021 },
    ];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RisePlateLists');
  }

}
