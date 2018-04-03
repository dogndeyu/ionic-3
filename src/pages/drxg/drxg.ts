import { Component } from '@angular/core';
import { NavController, NavParams, App } from "ionic-angular";
import { CheckList } from "../check-list/check-list";
// $IMPORTSTATEMENT

/**
 * Generated class for the Drxg page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-drxg',
  templateUrl: 'drxg.html',
})
export class Drxg {
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
    this.items = [
      { name: '秦港股份', number: "780326", Up: "4600", price: "2.8" },
      { name: '秦港股份', number: "780326", Up: "4600", price: "2.8" },
      { name: '秦港股份', number: "780326", Up: "4600", price: "2.8" },
      { name: '秦港股份', number: "780326", Up: "4600", price: "2.8" },
      { name: '秦港股份', number: "780326", Up: "4600", price: "2.8" },
      { name: '秦港股份', number: "780326", Up: "4600", price: "2.8" },

    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Drxg');
  }
  goZqmxPage() {
    this.app.getRootNav().push(CheckList, {

    });
  }
}
