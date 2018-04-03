import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
// $IMPORTSTATEMENT

/**
 * Generated class for the InformationDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-information-detail',
  templateUrl: 'information-detail.html',
})
export class InformationDetail {
  sourceDate: any;
  mySource: any;
  mySubtitle: any;
  myTitle: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myTitle = navParams.get("titles")
    this.mySubtitle = navParams.get("subtitles");
    this.mySource = navParams.get("sources");
    this.sourceDate = navParams.get("dates");
    console.log(this.myTitle)
    console.log(this.mySubtitle)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationDetail');
  }

}
