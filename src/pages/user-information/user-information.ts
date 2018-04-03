import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
// $IMPORTSTATEMENT

/**
 * Generated class for the UserInformation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-user-information',
  templateUrl: 'user-information.html',
})
export class UserInformation {
  sexSelect: string = "";
  guLingSelect: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  picture: string = "assets/img/1.png";
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserInformation');
  }
  items: Array<any> = [
    { year: 1990 },
    { year: 1991 },
    { year: 1992 },
    { year: 1993 },
    { year: 1994 },
  ]
  ionViewWillEnter() {
    borderHeight();
  }

}
function borderHeight() {
  $(".headPicture").height($(".headPicture").width());
  var $Height = $(".headPicture").height() / 2
  $(".headPicture").css("top", -$Height + 'px')
}