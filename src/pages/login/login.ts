import { Component } from '@angular/core';
import { NavController, NavParams, App, ViewController } from "ionic-angular";
import { Trade } from "../trade/trade";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// $IMPORTSTATEMENT

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class Login {
  pet: string = "ksdl";
  loginStates: number;
  loginForm: FormGroup;
  username: any;
  password: any;
  viald: boolean = false;
  messsageName: any = '发送短信';
  messageNumber: number = 60;
  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, private formBuilder: FormBuilder, public viewCtrl: ViewController) {
    // this.loginStates = 1;
    // this.loginForm = formBuilder.group({
    //   username: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
    //   password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    // })
    // this.username = this.loginForm.controls['username'];
    // this.password = this.loginForm.controls['password'];
  }
  picture: string = "assets/img/1.png";
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  logForm() {

    this.navCtrl.push(Trade, {
      logins: this.loginStates,
    });
  }

  ionViewWillEnter() {
    borderHeight()
    // $('.loginDiv >div:nth-child(2) ').removeClass("scroll-content")
    $(document).click(function (e) {
      var _con = $('.loginDiv ');   // 设置目标区域
      if (!_con.is(e.target) && _con.has(e.target).length === 0) { // Mark 1
        // this.viewCtrl.dismiss();
      }
    });

  }
  login(value) {
    if (value.username == "手机号码" && value.password == 123456) {

      console.log("登录成功");
    } else {
      console.log("登录失败");
    }

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  private timer;
  sendMessage() {
    this.viald = true;
    this.messsageName = 60;
    this.timer = setInterval(() => {
      if (this.messsageName <= 0) {
        this.messsageName = '发送短信';
        clearInterval(this.timer);
        this.messageNumber = 60;
        this.viald = false;
      } else {
        this.messageNumber--;
        this.messsageName = this.messageNumber;
        this.viald = true;
      }
    }, 1000)

  }
}

function borderHeight() {
  $(".headPicture").height($(".headPicture").width());
  var $Height = $(".headPicture").height() / 2
  $(".headPicture").css("top", 0);
  $('.BoxbackGround').height($(".headPicture").height() + 8 + 'px');
  $('.BoxbackGround div').height($('.BoxbackGround').height() * 0.5);
  $('.tabLoginBox2').height($('.tabLoginBox').height())
}
