import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AppConfig } from '../../app/app.config';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {
  private rootUrl: string;
  constructor(public http: Http) {
    // this.rootUrl = AppConfig.appUrl();
    // console.log('Hello HttpServiceProvider Provider');



  }
  public get(url: string, paramObj: any) {
    return this.http.get(url + this.toQueryString(paramObj))
      .toPromise()
      .then(res => this.handleSuccess(res.json()))
      .catch(error => this.handleError(error));
  }



  private handleSuccess(result) {
    if (result && !result.success) {//由于和后台约定好,所有请求均返回一个包含success,msg,data三个属性的对象,所以这里可以这样处理
      console.log(result.msg);//这里使用ToastController
    }
  }



  private handleError(error: Response | any) {
    let msg = '请求失败';
    if (error.status == 0) {
      msg = '请求地址错误';
    }
    if (error.status == 400) {
      msg = '请求无效';
      console.log('请检查参数类型是否匹配');
    }
    if (error.status == 404) {
      msg = '请求资源不存在';
      console.error(msg + '，请检查路径是否正确');
    }
    console.log(error);
    console.log(msg);//这里使用ToastController
    return { success: false, msg: msg };
  }

  private toQueryString(obj) {
    if (obj == null) {
      return "";
    }
    let ret = [];
    for (let key in obj) {
      key = encodeURIComponent(key);
      let values = obj[key];
      if (values && values.constructor == Array) {//数组
        let queryValues = [];
        for (let i = 0, len = values.length, value; i < len; i++) {
          value = values[i];
          queryValues.push(this.toQueryPair(key, value));
        }
        ret = ret.concat(queryValues);
      } else { //字符串
        ret.push(this.toQueryPair(key, values));
      }
    }
    return '&' + ret.join('&');
  }



  private toQueryPair(key, value) {
    if (typeof value == 'undefined') {
      return key;
    }
    return key + '=' + encodeURIComponent(value === null ? '' : String(value));
  }





  //get请求
  // get(url: string): Observable<any> {
  //   return this.http.get(url, {
  //     headers: new Headers({
  //       "Accept": "application/json",
  //       "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  //     })
  //   })
  //     .map(res => res.json());
  // }

  //post请求
  // post(url: string, body: any): Observable<any> {
  //   return this.http.post(url, body, {
  //     headers: new Headers({
  //       "Accept": "application/json",
  //       "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  //     })
  //   })
  //     .map(res => res.json());
  // }



}
