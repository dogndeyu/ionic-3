import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
// $IMPORTSTATEMENT

/**
 * Generated class for the PtzhSell page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-ptzh-sell',
  templateUrl: 'ptzh-sell.html',
})
export class PtzhSell {
  pet: string = "wd_cont";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PtzhSell');
  }

}
