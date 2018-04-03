import { Component } from '@angular/core';
import { NavController, NavParams, App } from "ionic-angular";
import { UserFormFill } from "../user-form-fill/user-form-fill";
// $IMPORTSTATEMENT

/**
 * Generated class for the UserForm page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-user-form',
  templateUrl: 'user-form.html',
})
export class UserForm {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserForm');
  }
  goUserFormFill() {
    this.app.getRootNav().push(UserFormFill, {
    });
  }

}
