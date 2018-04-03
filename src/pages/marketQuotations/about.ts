import { Component } from '@angular/core';
import { NavController, App, LoadingController } from 'ionic-angular';
import { RisePlateLists } from "../rise-plate-lists/rise-plate-lists";
import { GgxqDetails } from "../ggxq-details/ggxq-details";
import { ProprietInformation } from "../propriet-information/propriet-information";
import $ from "jquery";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  // app: any;
  pet: string = "zfb_cont";
  items: any;
  constructor(public navCtrl: NavController, private app: App, public loadingCtrl: LoadingController) {

    // if (this.items % 2 == 0) {
    //   console.log(123)
    // }
    // this.items = [
    //   { name: '上证指数', price: this.priceRDN, zf: this.zfRDN, lv: this.lvRDN + '%', },
    //   { name: '深证指数', price: this.priceRDN, zf: this.zfRDN, lv: this.lvRDN + '%', },
    //   { name: '中小板数', price: this.priceRDN, zf: this.zfRDN, lv: this.lvRDN + '%', },
    // ];
    // let hghhj = this.items;
    // console.log(this.items)
    // if (hghhj % 2 == 0) {
    // this.items.[index]
    // *ngIf="{{$index%2 ===0 ?'background:red':'green'}}"
    // }
  }
  // [ngStyle]="{'background-color':$index%2 === 0 ? 'green' : 'red' }"
  priceRDN = (Math.random() * 10000).toFixed(2);
  zfRDN = (Math.random()).toFixed(2);
  lvRDN = (Math.random()).toFixed(2);
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


  fxjPriceRDN = (Math.random() * 10).toFixed(2);//括号里意思是产生0~10之间的小数，括号外表示保留2位小数
  // zfbLvRDN = (Math.random()).toFixed(2);
  // zfbZfPriceRDN = (Math.random()).toFixed(2);

  xgfxjs: Array<any> = [
    { name: '创兴资源', number: 600193, price: this.fxjPriceRDN, shgmax: '2万股' },
    { name: '中国银河', number: 600235, price: this.fxjPriceRDN, shgmax: '2万股' }
  ]
//申购记录数组
public ztyjs = '已结束';
public ztyzq = '已中签';
  sgjls:Array<any> = [
    {shgname: '中国银河',gpcode: 600193, count: 2000, sgzt: '待配号'},
    {shgname: '创兴资源',gpcode: 600193, count: 2000, sgzt: '已配号'},
    {shgname: '中国银河',gpcode: 600193, count: 2000, sgzt: this.ztyjs},
    {shgname: '创兴资源',gpcode: 600193, count: 2000, sgzt: this.ztyzq},
    {shgname: '中国银河',gpcode: 600193, count: 2000, sgzt: '待配号'},
    {shgname: '中国银河',gpcode: 600193, count: 2000, sgzt: this.ztyjs},
    {shgname: '创兴资源',gpcode: 600193, count: 2000, sgzt: this.ztyzq},
    {shgname: '中国银河',gpcode: 600193, count: 2000, sgzt: '待配号'},
    {shgname: '中国银河',gpcode: 600193, count: 2000, sgzt: '待配号'}
  ]
  //已发行新股选项卡数组
  public shtimeno = '暂无';
  yfxxgs:Array<any> = [
    {yfxname: '中国银河',yfxcode: '600193', yfxprice: 9.59, zhql: 0.0369, shsbx: 999, shtime: this.shtimeno},
    {yfxname: '创兴资源',yfxcode: '600193', yfxprice: 8.59, zhql: 0.0169, shsbx: 999, shtime: this.shtimeno},
    {yfxname: '中国银河',yfxcode: '600193', yfxprice: 7.59, zhql: 0.0269, shsbx: 999, shtime: this.shtimeno},
    {yfxname: '创兴资源',yfxcode: '000193', yfxprice: 6.59, zhql: 0.0469, shsbx: 999, shtime: this.shtimeno},
    {yfxname: '中国银河',yfxcode: '600193', yfxprice: 5.59, zhql: 0.0569, shsbx: 999, shtime: '10-24'},
    {yfxname: '创兴资源',yfxcode: '000193', yfxprice: 4.59, zhql: 0.0669, shsbx: 999, shtime: '10-24'},
    {yfxname: '中国银河',yfxcode: '600193', yfxprice: 3.59, zhql: 0.0769, shsbx: 999, shtime: '10-24'},
    {yfxname: '创兴资源',yfxcode: '000193', yfxprice: 2.59, zhql: 0.0869, shsbx: 999, shtime: '10-24'},
    {yfxname: '中国银河',yfxcode: '600193', yfxprice: 1.59, zhql: 0.0969, shsbx: 999, shtime: '10-24'},
    {yfxname: '创兴资源',yfxcode: '600193', yfxprice: 2.59, zhql: 0.0869, shsbx: 999, shtime: '10-24'},
    {yfxname: '中国银河',yfxcode: '600193', yfxprice: 1.59, zhql: 0.0969, shsbx: 999, shtime: '10-24'}
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
    // this.app.getRootNav().push(ProprietInformation, {

    // });
    // this.selectOptions = {
    //   title: 'Pizza Toppings',
    //   subTitle: 'Select your toppings',
    //   mode: 'md'
    // };

  }
  ngOnInit(): void {

  }
  ionViewWillEnter() {

    const loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 500);
    // $('.wdzxContent_right').scroll(function () {
    //   $('#wozxFooter_rightCont div').css({
    //     left: $('#wdzxContent_right_cont').offset().left - 107
    //   })
    // })
    // var xgContentDiv=document.getElementById("xgContentDiv")
    // xgContentDiv.addEventListener('touchmove', function (e) {
    //   $("#xgscrollheight").css("overflow", "scroll")
    // })
    
  }
  public code;
  ngAfterViewChecked() {
    var xg_scrollheight;
    xg_scrollheight = $(window).height() - $("ion-navbar").height() - 100 - 5 - $("ion-segment").height() - 26 - $(".show-tabbar").height()-60;
    setTimeout(function () {
      $("#xgscrollheight").css("height", xg_scrollheight + 'px');
      $("#xgscrollheight2").css("height", xg_scrollheight + 'px');
      $("#xgscrollheight3").css("height", xg_scrollheight + 'px');
    }, 50);
    //---------------股票-------------------
    // this.code = this.yfxxgs[11].split(',')[1];
    // if (this.gpp.substr(1,1) == 6){
    //   $(".xg_hIco").css("background","green")
    // }else{
    //   $(".xg_hIco").css("background","yellow")
    // }

      // var xgContentDiv=document.getElementById("xgContentDiv")
      //     xgContentDiv.addEventListener('touchmove', function (e) {
      //       $("#xgscrollheight").css("overflow", "scroll")
      //     })
      

  }
  
}