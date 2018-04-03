import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the LoginInComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'login-in',
  templateUrl: 'login-in.html'
})
export class LoginInComponent {
  pet: string = "ksdl";
  loginStates: number;
  loginForm: FormGroup;
  username: any;
  password: any;
  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, private formBuilder: FormBuilder) {
    this.loginStates = 1;
    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  logForm() {

    // this.navCtrl.push(Trade, {
    //   logins: this.loginStates,
    // });
  }
  login(value) {
    if (value.username == "手机号码" && value.password == 123456) {

      console.log("登录成功");
    } else {
      console.log("登录失败");
    }

  }
}
