import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BaseserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BaseserviceProvider {
 
  constructor(public http: Http) {
    console.log('Hello BaseserviceProvider Provider');
  }
  get() {
    let URL = "http://120.27.130.194/hq1?action=100005&code=600278&market=10"
    return new Promise((resolve, reject) => {
      this.http.get(URL)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);/*  */
        }, err => {
          reject(err);
        })
    })
  }

}
