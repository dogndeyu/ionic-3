import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScoreShopInformPage } from '../score-shop-inform/score-shop-inform';

/**
 * Generated class for the ScoreShopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score-shop',
  templateUrl: 'score-shop.html',
})
export class ScoreShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreShopPage');
    var imgheight = document.querySelector(".scoreActiveIMG");
    $(".scoreActiveIMG").height($(".scoreActiveIMG").width());
  }
  items: Array<any> = [
    { title: '10M电信流量', imageUrl: "assets/img/100000.jpg", num: 59 },
    { title: '10M电信流量', imageUrl: "assets/img/100001.jpg", num: 59 },
    { title: '10M电信流量', imageUrl: "assets/img/100002.jpg", num: 59 },
    { title: '10M电信流量', imageUrl: "assets/img/100003.jpg", num: 59 },
    { title: '10M电信流量', imageUrl: "assets/img/100004.jpg", num: 59 },
    { title: '10M电信流量', imageUrl: "assets/img/100005.jpg", num: 59 },
  ]
  goScoreShopInform() {
    this.navCtrl.push(ScoreShopInformPage, {

    });
  }
}
