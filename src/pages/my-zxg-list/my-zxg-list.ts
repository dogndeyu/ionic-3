import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyZxgListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-zxg-list',
  templateUrl: 'my-zxg-list.html',
})
export class MyZxgListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  zfRDN = (Math.random()).toFixed(2);
  lvRDN = (Math.random()).toFixed(2);

  // priceRDN:any;
  // priceRDN:any;
  // priceRDN:any;
  priceRDN = (Math.random() * 10000).toFixed(2);
  // zfRDN = (Math.random()).toFixed(2);
  // lvRDN = (Math.random()).toFixed(2);
  platePriceRDN = (Math.random() * 10000).toFixed(2);
  plateLvRDN = (Math.random()).toFixed(2);
  plates: Array<any> = [
    { name: '证券', price: this.platePriceRDN, lv: this.plateLvRDN + '%', },
    { name: '多元金融', price: this.platePriceRDN, lv: this.plateLvRDN + '%', },
    { name: '计算机应用', price: this.platePriceRDN, lv: this.plateLvRDN + '%', },
    { name: '保险', price: this.platePriceRDN, lv: this.plateLvRDN + '%', },
    { name: '稀有金属', price: this.platePriceRDN, lv: this.plateLvRDN + '%', },
    { name: '铁路运输', price: this.platePriceRDN, lv: this.plateLvRDN + '%', },

  ]


  zfbPriceRDN = (Math.random() * 10).toFixed(2);
  zfbLvRDN = (Math.random()).toFixed(2);
  zfbZfPriceRDN = (Math.random()).toFixed(2);
  zx = (Math.random() * 10).toFixed(2);
  zf = (Math.random() * 10).toFixed(2);
  zd = (Math.random() * 10).toFixed(2);
  zs = (Math.random() * 10).toFixed(2);
  hs = (Math.random() * 10).toFixed(2);
  cjl = (Math.random() * 10).toFixed(2);
  cje = (Math.random() * 10).toFixed(2);
  lc = (Math.random() * 10).toFixed(2);
  xs = (Math.random() * 10).toFixed(2);
  kp = (Math.random() * 10).toFixed(2);
  zsPrice = (Math.random() * 10).toFixed(2);
  zg = (Math.random() * 10).toFixed(2);

  zfbs: Array<any> = [
    { name: '创兴资源', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600193, zx: this.zx, zf: this.zf, zd: this.zd, zs: this.zs, hs: this.hs, cjl: this.cjl, cje: this.cje, lc: this.lc, xs: this.xs, kp: this.kp, zsPrice: this.zsPrice, zg: this.zg },
    { name: '创兴资源', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600193, zx: this.zx, zf: this.zf, zd: this.zd, zs: this.zs, hs: this.hs, cjl: this.cjl, cje: this.cje, lc: this.lc, xs: this.xs, kp: this.kp, zsPrice: this.zsPrice, zg: this.zg },
    { name: '创兴资源', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600193, zx: this.zx, zf: this.zf, zd: this.zd, zs: this.zs, hs: this.hs, cjl: this.cjl, cje: this.cje, lc: this.lc, xs: this.xs, kp: this.kp, zsPrice: this.zsPrice, zg: this.zg },
    { name: '创兴资源', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600193, zx: this.zx, zf: this.zf, zd: this.zd, zs: this.zs, hs: this.hs, cjl: this.cjl, cje: this.cje, lc: this.lc, xs: this.xs, kp: this.kp, zsPrice: this.zsPrice, zg: this.zg },
    { name: '创兴资源', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600193, zx: this.zx, zf: this.zf, zd: this.zd, zs: this.zs, hs: this.hs, cjl: this.cjl, cje: this.cje, lc: this.lc, xs: this.xs, kp: this.kp, zsPrice: this.zsPrice, zg: this.zg },
    { name: '创兴资源', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600193, zx: this.zx, zf: this.zf, zd: this.zd, zs: this.zs, hs: this.hs, cjl: this.cjl, cje: this.cje, lc: this.lc, xs: this.xs, kp: this.kp, zsPrice: this.zsPrice, zg: this.zg },
    { name: '创兴资源', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600193, zx: this.zx, zf: this.zf, zd: this.zd, zs: this.zs, hs: this.hs, cjl: this.cjl, cje: this.cje, lc: this.lc, xs: this.xs, kp: this.kp, zsPrice: this.zsPrice, zg: this.zg },
    { name: '创兴资源', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600193, zx: this.zx, zf: this.zf, zd: this.zd, zs: this.zs, hs: this.hs, cjl: this.cjl, cje: this.cje, lc: this.lc, xs: this.xs, kp: this.kp, zsPrice: this.zsPrice, zg: this.zg },
    { name: '创兴资源', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600193, zx: this.zx, zf: this.zf, zd: this.zd, zs: this.zs, hs: this.hs, cjl: this.cjl, cje: this.cje, lc: this.lc, xs: this.xs, kp: this.kp, zsPrice: this.zsPrice, zg: this.zg },
    { name: '创兴资源', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600193, zx: this.zx, zf: this.zf, zd: this.zd, zs: this.zs, hs: this.hs, cjl: this.cjl, cje: this.cje, lc: this.lc, xs: this.xs, kp: this.kp, zsPrice: this.zsPrice, zg: this.zg },
    { name: '创兴资源', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600193, zx: this.zx, zf: this.zf, zd: this.zd, zs: this.zs, hs: this.hs, cjl: this.cjl, cje: this.cje, lc: this.lc, xs: this.xs, kp: this.kp, zsPrice: this.zsPrice, zg: this.zg },
    { name: '创兴资源', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600193, zx: this.zx, zf: this.zf, zd: this.zd, zs: this.zs, hs: this.hs, cjl: this.cjl, cje: this.cje, lc: this.lc, xs: this.xs, kp: this.kp, zsPrice: this.zsPrice, zg: this.zg },
    { name: '创兴资源', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600193, zx: this.zx, zf: this.zf, zd: this.zd, zs: this.zs, hs: this.hs, cjl: this.cjl, cje: this.cje, lc: this.lc, xs: this.xs, kp: this.kp, zsPrice: this.zsPrice, zg: this.zg },
    { name: '创兴资源', price: this.zfbPriceRDN, lv: this.zfbLvRDN + '%', zfPrice: this.zfbZfPriceRDN, number: 600193, zx: this.zx, zf: this.zf, zd: this.zd, zs: this.zs, hs: this.hs, cjl: this.cjl, cje: this.cje, lc: this.lc, xs: this.xs, kp: this.kp, zsPrice: this.zsPrice, zg: this.zg },

  ]
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyZxgListPage');
  }
  ionViewWillEnter() {



    var homeHeader = document.getElementById("homeHeader");
    var homeContent = document.getElementById("homeContent");
    var wozxFooter_rightCont_width = $("#wozxFooter_rightCont div:first").children("span").length * $("#wozxFooter_rightCont").find("span").width();
    // console.log(wozxFooter_rightCont_width)
    $("#wozxFooter_rightCont").width(wozxFooter_rightCont_width);
    $("#wdzxContent_right_cont").width(wozxFooter_rightCont_width);

    $('.wozxFooter_right').scroll(function () {
      $('#wdzxContent_right_cont').css({
        left: $('#wozxFooter_rightCont div').offset().left - 107
      })

    })
    var zxTabContent_row = document.getElementById("zxTabContent_row")
    var wdzxContent = document.getElementById("wdzxContent")
    homeHeader.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    // zxTabContent_row.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    wdzxContent.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);





  }



  ngAfterViewChecked() {
    var wozxFooter_rightCont_width = $("#wozxFooter_rightCont div:first").children("span").length * $("#wozxFooter_rightCont").find("span").width();
    // console.log(wozxFooter_rightCont_width)
    $("#wozxFooter_rightCont").width(wozxFooter_rightCont_width);
    $("#wdzxContent_right_cont").width(wozxFooter_rightCont_width);

    $('.wozxFooter_right').scroll(function () {
      $('#wdzxContent_right_cont').css({
        left: $('#wozxFooter_rightCont div').offset().left - 107
      })

    })
  }

}
