import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HfYywdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hf-yywd',
  templateUrl: 'hf-yywd.html',
})
export class HfYywdPage {
  City: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.City = navParams.get("city");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HfYywdPage');
  }

  items: Array<any> = [
    {
      title: '合肥徽州大道营业部',
      address: '合肥市包河区徽州大道与烟墩路交口滨湖时代广场一期G1幢101市',
      tel: '95578'
    },
    {
      title: '合肥徽州大道营业部',
      address: '合肥市包河区徽州大道与烟墩路交口滨湖时代广场一期G1幢101市',
      tel: '95578'
    },
    {
      title: '合肥徽州大道营业部',
      address: '合肥市包河区徽州大道与烟墩路交口滨湖时代广场一期G1幢101市',
      tel: '95578'
    },
    {
      title: '合肥徽州大道营业部',
      address: '合肥市包河区徽州大道与烟墩路交口滨湖时代广场一期G1幢101市',
      tel: '95578'
    },
    {
      title: '合肥徽州大道营业部',
      address: '合肥市包河区徽州大道与烟墩路交口滨湖时代广场一期G1幢101市',
      tel: '95578'
    },
    {
      title: '合肥徽州大道营业部',
      address: '合肥市包河区徽州大道与烟墩路交口滨湖时代广场一期G1幢101市',
      tel: '95578'
    },
    {
      title: '合肥徽州大道营业部',
      address: '合肥市包河区徽州大道与烟墩路交口滨湖时代广场一期G1幢101市',
      tel: '95578'
    },
    {
      title: '合肥徽州大道营业部',
      address: '合肥市包河区徽州大道与烟墩路交口滨湖时代广场一期G1幢101市',
      tel: '95578'
    },
    {
      title: '合肥徽州大道营业部',
      address: '合肥市包河区徽州大道与烟墩路交口滨湖时代广场一期G1幢101市',
      tel: '95578'
    },

  ]
  ngAfterViewChecked() {

  }
}
