import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
// $IMPORTSTATEMENT

/**
 * Generated class for the EntrustSearch page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-entrust-search',
  templateUrl: 'entrust-search.html',
})
export class EntrustSearch {
  pet: string = "wdph_cont";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrustSearch');
  }

}
