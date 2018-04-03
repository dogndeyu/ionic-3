import { Component } from '@angular/core';
import { NavController, LoadingController, Platform, App, MenuController } from 'ionic-angular';
import { GgxqDetails } from "../ggxq-details/ggxq-details";
import { GpSearch } from "../gp-search/gp-search";
import { RisePlateLists } from "../rise-plate-lists/rise-plate-lists";
import { ProprietInformation } from "../propriet-information/propriet-information";
// import $ from "jquery";
import { MySlide } from "../../components/my-slide/my-slide";
import { MyZxgListPage } from '../my-zxg-list/my-zxg-list';
import { AppService } from '../../app/app.service';
// import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AppConfig } from '../../app/app.config';
import { HomeServiceProvider } from '../../providers/home-service/home-service';

// import { GgxqDetails } from "../ggxq-details/ggxq-details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // directives:[MySlide]
  providers: [HomeServiceProvider]
})

export class HomePage {
  pet: string = "zfb_cont";
  homeIndex: string = "zxTabContent";
  items: any;
  result: string;
  userInfo
  // pet: string = "puppies";
  isAndroid: boolean = false;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    platform: Platform,
    private app: App,
    menu: MenuController,
    public service: AppService,
    private homeServiceProvider: HomeServiceProvider) {
    this.isAndroid = platform.is('android');
    menu.enable(true);
    // getUser(){
    //   this.homeServiceProvider.getUser().then(
    //     res => {
    //       // this.userInfo = res.data;
    //       console.log(res)
    //     }
    //   )
    // }
    this.items = [
      { name: '上证', price: this.priceRDN, zf: this.zfRDN, lv: this.lvRDN + '%', },
      { name: '深证', price: this.priceRDN, zf: this.zfRDN, lv: this.lvRDN + '%', },
      { name: '中小', price: this.priceRDN, zf: this.zfRDN, lv: this.lvRDN + '%', },
    ];

    // this.http.get('http://120.27.130.194/hq1?action=100005&code=600278&market=10').subscribe(
    //   res => {
    //     //this.result = res.lon;
    //     console.log(res.root[0])
    //     return this.result
    //   }, error => {


    //   });



  }
  ionViewDidLoad() {
    // this.service.toast("呵呵")
    // this.service.Alert('呵呵')
    // this.service.get().then(data => { console.log(data) })/*  */
    console.log('ionViewDidLoad AssetPage');
    console.log('ionViewDidLoad AssetPage');
  }


  myNavigation(items) {

    this.app.getRootNav().push(GgxqDetails, {
      names: items.name,
      prices: items.price,
      zfs: items.zf,
      lvs: items.lv,
    });
  }

  //点击跳到搜索页面
  goGpSearch() {
    this.navCtrl.push(GpSearch, {
    });
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


  goRisePlateLists(plates) {
    this.navCtrl.push(RisePlateLists, {
      names: plates.name,
    });


    // this.app.getRootNav().push(RisePlateLists, {
    //   names: plates.name,
    // });
  }
  goZsInformation() {
    this.app.getRootNav().push(ProprietInformation, {

    });
  }
  goMyZxgList() {
    this.app.getRootNav().push(MyZxgListPage, {

    });
  }
  ionViewWillEnter() {

    $('#homeContent>div:nth-child(2) ').removeClass("scroll-content")
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
    // homeHeader.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    // zxTabContent_row.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    // wdzxContent.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    const loading = this.loadingCtrl.create({
      content: ''

    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 500);



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
  ngOnInit() {
    $('#homeContent .scroll-content').removeAttr("style")
  }
  presentLoadingDefault() {
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 500);
  }

}











