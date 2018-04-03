import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { HttpServiceProvider } from '../http-service/http-service';
import { gywxUrl } from '../Constants';
import { AppConfig } from '../../app/app.config';
// AppConfig.Bt_encrypt()
/*
  Generated class for the HomeServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()

export class HomeServiceProvider {

  constructor(public httpServiceProvider: HttpServiceProvider, ) {
    console.log('Hello HomeServiceProvider Provider');
  }

  getUser() {
    var obj = { 'name': '小军', age: 23 };
    // pc(obj)
    return this.httpServiceProvider.get('http://60.173.222.38:8211/web?action=',null)
  }
}

// function pc(obj) {
//   var str_fi = "";
//   var bwcs_1 = "";
//   //组串格式：{id:"",value:"",type:"",length:""},{id:"",value:"",type:"",length:""}
//   for (var i = 1; i < obj.length; i++) {
//     if (i == 1) {
//       str_fi += "{id:'" + obj[1][0] + "',value:'" + obj[1][1] + "',type:'" + obj[1][2] + "',length:'" + obj[1][3] + "'}";
//     } else if (obj[i][0] == "0") {
//       bwcs_1 = obj[i][1];
//     } else {
//       str_fi += ",{id:'" + obj[i][0] + "',value:'" + obj[i][1] + "',type:'" + obj[i][2] + "',length:'" + obj[i][3] + "'}";
//     }
//   }
//   var gnh = obj[0][0];                           //获取功能号
//   var ds_name = obj[0][1]                        //存储过程名称

//   var str_ = "1.0|" + ds_name + "," + gnh + "|{root:[" + str_fi + "]}|" + bwcs_1 + "||";
//   return str_;
// }