import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
// $IMPORTSTATEMENT

/**
 * Generated class for the UserFormFill page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-user-form-fill',
  templateUrl: 'user-form-fill.html',
})
export class UserFormFill {
  gender: string = "f";
  sharesAge: string = "young";
  month: string = "01";
  year: string = "1989";
  day: string = "01";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserFormFill');
  }

}
