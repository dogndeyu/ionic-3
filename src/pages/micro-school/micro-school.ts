import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import $ from "jquery";
// import { DomEventsPlugin } from '@angular/platform-browser';
/**
 * Generated class for the MicroSchoolPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-micro-school',
  templateUrl: 'micro-school.html'
})
export class MicroSchoolPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MicroSchoolPage');
  }
  public flag_num = true;

  ionViewWillEnter() {
    //------------------------Tab按钮start-----------------//
    var ScreenWidth = $(window).width();
    //分屏计算做判断
    if (ScreenWidth >= 375) {
      $(".MS_czjj").css({ "font-size": "18px", "vertical-align": "middle" });
      $(".MS_Icon > img").css({ "width": "25px", "height": "25px" });
      $(".tab_menu > ul > li > svg").css({ "width": "58px", "height": "70px" });
      // $(".tab_menu > ul > li").css("width","58px");
      $(".on").css("bottom", "-39px");
      $(".tab_menu").css("bottom", "46px");
      if (this.flag_num) {
        $(".tab_menu ul li").eq(0).removeClass("on");
      }
      this.flag_num = false;
      //点击tab事件
      $(".tab_menu ul li").on('click', function () {
        $(".tab_menu ul li").eq(0).addClass("on")
        $(this).removeClass("on").siblings().addClass("on");
        var index = $(this).index();
        $(".tab_box > div").eq(index).show().siblings().hide();
      });
    } else {

      $(".MS_czjj").css("font-size", "14px");
      $(".MS_Icon").css("vertical-align", "super");
      $(".MS_Icon > img").css({ "width": "21px", "height": "21px" });
      $(".tab_menu > ul > li > svg").css({ "width": "50px", "height": "60px" });
      $(".on").css("bottom", "-34px");
      $(".tab_menu").css("bottom", "45px");

      if (this.flag_num) {
        $(".tab_menu ul li").eq(0).removeClass("on");
      }
      this.flag_num = false;
      //点击事件
      $(".tab_menu ul li").click(function () {
        $(".tab_menu ul li").eq(0).addClass("on");
        $(this).removeClass("on").siblings().addClass("on");
        var index = $(this).index();
        $(".tab_box > div").eq(index).show().siblings().hide();
      });
    }
    //动态添加获取svg图的id
    $(".text_name").each(function (index) {
      $(this).attr("id", "id_" + index);
      if ($(this).attr("id") == "id_0") {
        $("#Triangle").attr("fill", "#EC4317");
        $(this).attr({ id: "操作-进阶" });
      } else if ($(this).attr("id") == "id_1") {
        $(this).attr({ id: "公告-警示" });
      } else if ($(this).attr("id") == "id_2") {
        $(this).attr({ id: "新手-课堂" });
      } else if ($(this).attr("id") == "id_3") {
        $(this).attr({ id: "视频-专区" });
      } else if ($(this).attr("id") == "id_4") {
        $(this).attr({ id: "备用-一号" });
      } else if ($(this).attr("id") == "id_5") {
        $(this).attr({ id: "备用-二号" });
      }
    })

    //svg图内设置填充色
    $("circle").each(function (index) {
      $(this).attr("class", "class_" + index);
      if ($(this).attr("class") == "class_0") {
        $(this).attr({ fill: "#EC4317" });
      } if ($(this).attr("class") == "class_1") {
        $(this).attr({ fill: "#E82211" });
      } if ($(this).attr("class") == "class_2") {
        $(this).attr({ fill: "#45C0E9" });
      } if ($(this).attr("class") == "class_3") {
        $(this).attr({ fill: "#FFC50F" });
      } if ($(this).attr("class") == "class_4") {
        $(this).attr({ fill: "#B3EE3A" });
      } if ($(this).attr("class") == "class_5") {
        $(this).attr({ fill: "#8B8B00" });
      }
    })
  }
  ionViewWillLeave() {
    $(".tab_menu").css("display", "none");
  }
  MStabs: Array<any> = [
    { Qname: '操作', Lname: '进阶' },
    { Qname: '公告', Lname: '警示' },
    { Qname: '新手', Lname: '课堂' },
    { Qname: '视频', Lname: '专区' },
    { Qname: '备用', Lname: '一号' },
    { Qname: '备用', Lname: '二号' }
  ]
  //-----------------------Tab按钮end----------------------//
  // 2017-10-30 08:08
  NewList1s: Array<any> = [
    {
      contTitle: "国元上市十周年，邀你一起乐翻天！",
      date: "2017-10-30 08:08",
      MessImg: "assets/img/active1.jpg",
      contNews: "2017年10月30日是国元证券上市十周你拿的大日子！感谢你们的大日子！ 感谢你们的风雨通行，一路相伴！上市十周年生日趴体开始啦！上市十周年生日趴体开始啦！"
    },
    {
      contTitle: "国元上市十周年，邀你一起乐翻天！",
      date: "2017-10-30 08:08",
      MessImg: "assets/img/active1.jpg",
      contNews: "2017年10月30日是国元证券上市十周你拿的大日子！感谢你们的大日子！ 感谢你们的风雨通行，一路相伴！上市十周年生日趴体开始啦！上市十周年生日趴体开始啦！"
    },
    {
      contTitle: "国元上市十周年，邀你一起乐翻天！",
      date: "2017-10-30 08:08",
      MessImg: "assets/img/active1.jpg",
      contNews: "2017年10月30日是国元证券上市十周你拿的大日子！感谢你们的大日子！ 感谢你们的风雨通行，一路相伴！上市十周年生日趴体开始啦！上市十周年生日趴体开始啦！"
    }
  ]
  // MStabs: Array<any> = [
  //   {Img: "../../assets/img/操作进阶.svg"},
  //   {Img: "../../assets/img/操作进阶.svg"},
  //   {Img: "../../assets/img/操作进阶.svg"},
  //   {Img: "../../assets/img/操作进阶.svg"},
  //   {Img: "../../assets/img/操作进阶.svg"},
  //   {Img: "../../assets/img/操作进阶.svg"}
  // ]

}
