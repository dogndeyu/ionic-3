import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
// $IMPORTSTATEMENT

/**
 * Generated class for the PtzhBuy page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE

@Component({
  selector: 'page-ptzh-buy',
  templateUrl: 'ptzh-buy.html',
})
export class PtzhBuy {
  pet: string = "wd_cont";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PtzhBuy');
  }

}
