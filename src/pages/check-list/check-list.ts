import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
// $IMPORTSTATEMENT

/**
 * Generated class for the CheckList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-check-list',
  templateUrl: 'check-list.html',
})
export class CheckList {
  items: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      { name: '秦港股份', number: "4600", Up: "2.8", price: "780326" },
      { name: '秦港股份', number: "4600", Up: "2.8", price: "780326" },
      { name: '秦港股份', number: "4600", Up: "2.8", price: "780326" },
      { name: '秦港股份', number: "4600", Up: "2.8", price: "780326" },
      { name: '秦港股份', number: "4600", Up: "2.8", price: "780326" },
      { name: '秦港股份', number: "4600", Up: "2.8", price: "780326" },
      { name: '秦港股份', number: "4600", Up: "2.8", price: "780326" },
      

    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckList');
  }

}
