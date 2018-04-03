import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
// $IMPORTSTATEMENT

/**
 * Generated class for the ClientManager page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-client-manager',
  templateUrl: 'client-manager.html',
})
export class ClientManager {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientManager');
  }
  ionViewWillEnter() {
    var ScreenWidth = $(window).width();
    //分屏计算做判断
    if(ScreenWidth>= 375){
      $(".khjl_messages").css({"padding-left":"22px","padding-right":"22px"});
    }else{
      $(".padding_left").css("padding-left", "5px");
      $(".khjl_messages").css({"padding-left":"15px","padding-right":"15px"});
    }}
}
