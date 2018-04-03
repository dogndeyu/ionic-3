import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
// $IMPORTSTATEMENT

/**
 * Generated class for the GpSearch page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-gp-search',
  templateUrl: 'gp-search.html',
})

export class GpSearch {
  items: any;
  flag: boolean;
  SearchContent: string = "historyCont";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      { name: '包钢股份', number: 123456, open: 1, src: '' },
      { name: '华能国际', number: 101011, open: 2, src: '' },
      { name: '皖通高速', number: 101011, open: 1, src: '' },
      { name: '华夏银行', number: 101011, open: 2, src: '' },
      { name: '民生银行', number: 101011, open: 1, src: '' },
      { name: '日照港', number: 101011, open: 2, src: '' },
      { name: '上港集团', number: 101011, open: 1, src: '' },
    ];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].open == 1) {
        this.items[i].src = "assets/img/plus.svg"
        this.items[i].flag = true;
      } else {
        this.items[i].src = "assets/img/minus.svg"
        this.items[i].flag = false;
      }

    }

    // console.log(this.items[0])
  }

  changeFuHao(item, i) {
    if (this.items[i].flag) {
      this.items[i].src = "assets/img/minus.svg"
      this.items[i].flag = false
    } else {
      this.items[i].src = "assets/img/plus.svg"
      this.items[i].flag = true
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GpSearch');
  }
  getItems() {
   
  }
  focusInput() {
    this.SearchContent = "resultCont";
  }
  blurInput() {
    this.SearchContent = "historyCont";
  }
  segmentChanged($event) {


  }
}
