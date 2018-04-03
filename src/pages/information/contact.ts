import { Component } from '@angular/core';
import { NavController, App, LoadingController } from 'ionic-angular';
import { InformationDetail } from "../information-detail/information-detail";
import { AppConfig } from '../../app/app.config';
import $ from "jquery";
declare var Swiper: any;
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  pet: string = "scyw_cont";
  constructor(public navCtrl: NavController, private app: App, public loadingCtrl: LoadingController) {

  }
  img_datas: Array<any> = [{
    src: "assets/img/100000.jpg",
    title: "窄幅整理，喜迎十九大",
    subtitle: "",
    date: "2017-10-17 17:06:12"
  }, {
    src: "assets/img/100001.jpg",
    title: "沪指震荡反弹 分化依然严重",
    subtitle: "窄幅整理，喜迎十九大窄幅整理，喜迎十九大",
    date: "2017-10-17 17:06:12"
  }, {
    src: "assets/img/100002.jpg",
    title: "稳步上行,精选个股",
    subtitle: "窄幅整理，喜迎十九大窄幅整理，喜迎十九大",
    date: "2017-10-17 17:06:12"
  }, {
    src: "assets/img/100003.jpg",
    title: "震荡趋弱,分化中防范结构",
    subtitle: "窄幅整理，喜迎十九大窄幅整理，喜迎十九大",
    date: "2017-10-17 17:06:12"
  }, {
    src: "assets/img/100004.jpg",
    title: "震荡趋弱,分化中防范结构",
    subtitle: "窄幅整理，喜迎十九大窄幅整理，喜迎十九大",
    date: "2017-10-17 17:06:12"
  }
    , {
    src: "assets/img/100005.jpg",
    title: "震荡趋弱,分化中防范结构",
    subtitle: "窄幅整理，喜迎十九大窄幅整理，喜迎十九大",
    date: "2017-10-17 17:06:12"
  }
    , {
    src: "assets/img/100006.jpg",
    title: "震荡趋弱,分化中防范结构",
    subtitle: "窄幅整理，喜迎十九大窄幅整理，喜迎十九大",
    date: "2017-10-17 17:06:12"
  }]

  items: Array<any> = [
    { title: '国泰君安', subtitle: '三大指数涨逾1%沪指涨1.02% 券商板块王者归来', date: '2017.1.1', source: "武汉博览财经金融服务有限责任公司" },
    { title: '国泰君安', subtitle: '深证指数三大指数涨逾1%沪指涨1.02% 券商板块王者归来', date: '2017.1.1', source: "武汉博览财经金融服务有限责任公司" },
    { title: '国泰君安', subtitle: '三大指数涨逾1%沪指涨1.02% 券商板块王者归来', date: '2017.1.1', source: "武汉博览财经金融服务有限责任公司" },
  ];
  myNavigation(items) {

    this.app.getRootNav().push(InformationDetail, {
      titles: items.title,
      subtitles: items.subtitle,
      dates: items.date,
      sources: items.source,
    });
  }
  ionViewWillEnter() {
    const loading = this.loadingCtrl.create({
      content: ''

    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 500);
  }
  ngOnInit(): void {
    $(function () {
      function setCurrentSlide(ele, index) {
        $(".swiper1 .swiper-slide").removeClass("selected");
        ele.addClass("selected");
        //swiper1.initialSlide=index;
      }

      var swiper1 = new Swiper('.swiper1', {
        //					设置slider容器能够同时显示的slides数量(carousel模式)。
        //					可以设置为number或者 'auto'则自动根据slides的宽度来设定数量。
        //					loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        slidesPerView: 4,
        paginationClickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        spaceBetween: 5, //slide之间的距离（单位px）。
        freeMode: false, //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。
        loop: false, //是否可循环
        onTab: function (swiper) {
          var n = swiper1.clickedIndex;
        }
      });
      swiper1.slides.each(function (index, val) {
        var ele = $(this);
        ele.on("click", function () {
          setCurrentSlide(ele, index);
          swiper2.slideTo(index, 500, false);
          //mySwiper.initialSlide=index;
        });
      });

      var swiper2 = new Swiper('.swiper2', {
        // touchRatio: 0.05,
        followFinger: false,
        // longSwipesRatio: 0.2,
        // touchRatio: 1,
        // threshold: 30,
        direction: 'horizontal', //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
        loop: false,
        // autoHeight: true, //自动高度。设置为true时，wrapper和slideOne会随着当前slide的高度而发生变化。
        onSlideChangeStart: function (swiper) { //回调函数，swiper从一个slide过渡到另一个slide结束时执行。
          var n = swiper.activeIndex;
          setCurrentSlide($(".swiper1 .swiper-slide").eq(n), n);
          swiper1.slideTo(n, 500, false);
        }
      });

    });
    // $(function () {
    //   var boxArr = $('.box');
    //   var columnHeightArr = [];
    //   columnHeightArr.length = 2;

    //   boxArr.each(function (index, item) {
    //     if (index < 2) {
    //       columnHeightArr[index] = $(item).position().top + $(item).outerHeight(true);
    //     } else {
    //       var minHeight = Math.min.apply(null, columnHeightArr),
    //         minHeightIndex = $.inArray(minHeight, columnHeightArr);

    //       $(item).css({
    //         position: 'absolute',
    //         top: minHeight,
    //         left: boxArr.eq(minHeightIndex).position().left
    //       });

    //       columnHeightArr[minHeightIndex] += $(item).outerHeight(true);
    //     }
    //   });
    // })

  }

}
