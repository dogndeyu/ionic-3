import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import ElastiStack from 'ElastiStack';
/**
 * Generated class for the AppDownloadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

// declare var answerSheet;
@IonicPage()
@Component({
  selector: 'page-app-download',
  templateUrl: 'app-download.html',
})
export class AppDownloadPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // answerSheet: any
  ionViewDidLoad() {
    console.log('ionViewDidLoad AppDownloadPage');
  }
  ionViewWillEnter() {
    appDownload();
  }
}
function appDownload() {
  $("#answer").show();
  var obj = $('.card_cont');
  var startX, startY, endX, endY, moveLength;

  obj.find('.card').on('touchstart', function (e) {
    startX = e.touches[0].pageX;
    startY = e.touches[0].pageY;

  });
  $('.card2 .box_shadow').addClass('displaycss');
  $('.card3 .box_shadow').addClass('displaycss');
  obj.find('.card').on('touchmove', function (e) {

    var $card_contwidth = $(this).parents(".card_cont").width();
    endX = e.changedTouches[0].pageX;
    endY = e.changedTouches[0].pageY;
    var x = Math.abs(endX - startX);
    var y = Math.abs(endY - startY);
    moveLength = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    // console.log(moveLength)
    var _idx = $(this).parents(".card_cont").index(),
      _cards = obj,
      _cardcont = $(this).parents(".card_cont");

    if ($(this).parent().hasClass('card2') || $(this).parent().hasClass('card3')) {

    } else {
      if (moveLength > 30) {
        console.log(moveLength)
        setTimeout(function () {
          _cardcont.addClass('cardn');
          // $(".box_shadow").addClass('displaycss');

          setTimeout(function () {
            _cards.eq((_idx + 3) % 3).removeClass('cardn').addClass('card3');
            _cards.eq((_idx + 2) % 3).removeClass('card3').removeClass('cardn').addClass('card2');
            _cards.eq((_idx + 1) % 3).removeClass('card2').removeClass('cardn').addClass('card1');
            _cardcont.removeClass('card1');
            _cards.eq((_idx + 1) % 3).find('.box_shadow').removeClass('displaycss');
            _cards.eq((_idx + 2) % 3).find('.box_shadow').addClass('displaycss');
            _cards.eq((_idx + 3) % 3).find('.box_shadow').addClass('displaycss');
            // $(".box_shadow").css("display","none");
          }, 200);
        }, 100);
      }
    }

  });


  // obj.find('.card .arCode img').on('touchmove', function (event) {
  //   event.preventDefault();

  // });
}