import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HfYywdPage } from '../hf-yywd/hf-yywd';
declare var echarts;

@IonicPage()
@Component({
  selector: 'page-ah-yywd',
  templateUrl: 'ah-yywd.html',
})
export class AhYywdPage {
  chart: any;
  area: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goHfYywdPage(subs, i) {
    this.navCtrl.push(HfYywdPage, {
      city: subs[i].city
    });

  }
  items: Array<any> = [{
    "area": "安徽",
    "subs": [
      { "city": "合肥" },
      { "city": "淮北" },
      { "city": "毫州" },
      { "city": "宿州" },
      { "city": "阜阳" },
      { "city": "淮南" },
      { "city": "滁州" },
      { "city": "六安" },
      { "city": "马鞍山" },
      { "city": "芜湖" },
      { "city": "铜陵" },
      { "city": "宣城" },
      { "city": "池州" },
      { "city": "安庆" },
      { "city": "黄山" },
    ]
  }]
  ionViewDidLoad() {
    console.log('ionViewDidLoad HfYywdPage');


  }
  ionViewWillEnter() {
    showCityMap();

  }
}
function showCityMap() {


  $("#CityMap").height($(document).height() - 47 - 44 - $(".ionList").height() - $(".yywdAreaCont").height());

  var CityMap = echarts.init(document.getElementById('CityMap'));
  $.get('assets/js/anhui.json', function (anhuiJson) {
    echarts.registerMap('安徽', anhuiJson); 
    var mapOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}'
      },
      roam: 'scale',
      scaleLimit: {
        max: 3,
        min: 1.22
      },
      itemStyle: {
        emphasis: {
          areaStyle: {
            color: "#08c"
          }
        }
      },
      dataRange: {
        show: false,
        min: 1,
        max: 10,
      },
      series: [
        {
          name: '安徽',
          type: 'map',
          mapType: '安徽',
          selectedMode: null,
          itemStyle: {
            normal: {
              label: { show: true },
              borderWidth: 1,
              borderColor: '#f60',
              color: '#ece2df'
            },
            emphasis: {
              label: { show: true },
              areaStyle: {
                color: "#08c"
              }
            }
          },

          data: [
            {
              name: '合肥市', selected: true, value: 5555,
              itemStyle: {
                normal: {
                  areaColor: "#000"
                }
              }
            },
            { name: '芜湖市', selected: false, value: 1 },
            { name: '蚌埠市', selected: false, value: 1 },
            { name: '淮南市', selected: false, value: 1 },
            { name: '马鞍山市', selected: false, value: 1 },
            { name: '淮北市', selected: false, value: 1 },
            { name: '铜陵市', selected: false, value: 1 },
            { name: '安庆市', selected: false, value: 1 },
            { name: '黄山市', selected: false, value: 1 },
            { name: '阜阳市', selected: false, value: 1 },
            { name: '宿州市', selected: false, value: 1 },
            { name: '滁州市', selected: false, value: 1 },
            { name: '六安市', selected: false, value: 1 },
            { name: '宣城市', selected: false, value: 1 },
            { name: '池州市', selected: false, value: 1 },
            { name: '亳州市', selected: false, value: 1 },

          ]
        }
      ],


    };
    CityMap.setOption(mapOption);

  });

}