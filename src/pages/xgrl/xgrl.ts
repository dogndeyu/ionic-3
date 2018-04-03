import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
// $IMPORTSTATEMENT

/**
 * Generated class for the Xgrl page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-xgrl',
  templateUrl: 'xgrl.html',
})
export class Xgrl {
  items: any;
  contents: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      { name: '秦港股份', number: "780326", Up: "4600", price: "2.8" },
      { name: '秦港股份', number: "780326", Up: "4600", price: "2.8" },
      { name: '秦港股份', number: "780326", Up: "4600", price: "2.8" },
      { name: '秦港股份', number: "780326", Up: "4600", price: "2.8" },
      { name: '秦港股份', number: "780326", Up: "4600", price: "2.8" },
      { name: '秦港股份', number: "780326", Up: "4600", price: "2.8" },

    ];
    this.contents = [
      { date: "2017-6-8" },
      { date: "2017-6-8" },
      { date: "2017-6-8" },

    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Xgrl');
  }

}
