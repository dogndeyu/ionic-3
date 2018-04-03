import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { BaseserviceProvider } from '../../providers/baseservice/baseservice';
declare var echarts;//js echarts全局对象  
// $IMPORTSTATEMENT

/**
 * Generated class for the AssetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE

@Component({
  selector: 'page-asset-page',
  templateUrl: 'asset-page.html',
  providers: [BaseserviceProvider]
})
export class AssetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: BaseserviceProvider) {
  }
 
  ionViewDidLoad() {
    this.service.get().then(data => { console.log(data) })/*  */
    console.log('ionViewDidLoad AssetPage');
  }
  price: number;
  chart: any;
  items: Array<any> = [
    { name: '月初资产', price: 3000 },
    { name: '收益总额', price: 3000 },
    { name: '净流入额', price: 3000 },
  ]
  zcs: Array<any> = [
    { name: '投票', percent: 10, src: "assets/img/redGP.svg" },
    { name: 'OTC', percent: 20, src: "assets/img/OTC.svg" },
    { name: '基金', percent: 30, src: "assets/img/blueLC.svg" },
    { name: '其他', percent: 40, src: "assets/img/others.svg" },
  ]
  pms: Array<any> = [
    { name: '今日收益排名', percent: 10, src: "assets/img/qlGP.svg" },
    { name: '月收益排名', percent: 20, src: "assets/img/zlGP.svg" },
    { name: '累计收益排名', percent: 30, src: "assets/img/slGP.svg" },
  ]
  ionViewWillEnter() {
    $("#picturePlace").height($("#picturePlace").width())
    var myChart = echarts.init(document.getElementById('picturePlace'));
    let option = {
      title: {
        show: true,
        text: '总资产',
        subtext: "3000元",
        x: 'center',
        y: '60',//
        textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
          fontSize: "13",
          color: "#888"
        },
        subtextStyle: {//副标题文本样式{"color": "#aaa"}
          fontSize: "13",
          color: "#333"
        },
      },
      tooltip: {
        show: false,
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        showContent: true,
        position: [50, 50],
        // backgroundColor:"#fff",

      },

      toolbox: {
        show: false,
        feature: {
          mark: {
            show: true
          },
          dataView: {
            show: true,
            readOnly: false
          },
          magicType: {
            show: true,
            type: ['pie', 'funnel'],
            option: {
              funnel: {
                x: '25%',
                width: '50%',
                funnelAlign: 'center',
                max: 1548
              }
            }
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      calculable: true,
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['文章', '论坛', '漏洞', '微博']
      },
      series: [{
        name: null,
        type: 'pie',
        radius: ['50%', '70%'],

        itemStyle: {
          normal: {
            label: {
              show: false,
              position: 'inner'
            },
            labelLine: {
              show: true
            }
          },
          emphasis: {
            label: {
              show: true,
              position: 'inner',
              textStyle: {
                fontSize: '12',
                fontWeight: 'bold'
              }
            }
          }
        },
        data: [{
          value: 133,
          name: '股票'
        },
        {
          value: 222,
          name: 'OTC'
        },
        {
          value: 333,
          name: '基金'
        },
        {
          value: 333,
          name: '其他'
        },

        ],
      }],
      color: ['#ec4317', '#ff9743', '#4093e6', '#fdd94a',
      ]
    };
    myChart.setOption(option);
    showCanvas();
  }
}
function showCanvas() {
  $("#canvasCH").height($("#canvasCH").width());
  var canvasCH = echarts.init(document.getElementById('canvasCH'));
  let option2 = {
    title: {
      show: true,
      text: '战胜80%',
      x: 'center',
      y: 'center',//
      textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
        fontSize: "13",
        color: "#fff",
      },
      backgroundColor: '#45C0E9',
      borderWidth: 2,
      padding: 5,
      borderColor: "#fff",
      borderRadius: 10
    },

    radar: [
      {

        indicator: [
          { text: '综合排名：领先80%的用户', max: 100, color: "#999" },
          { text: '炉火纯青', max: 100 },
          { text: '融汇贯通', max: 100 },
          { text: '略有小成', max: 100 },
          { text: '初学乍练', max: 100 },
          { text: '登堂入室', max: 100 }
        ],
        radius: 65,
        splitNumber: 1,
        name: {
          textStyle: {
            color: '#4475A5'
          },
          // formatter: function (params) {
          //   var newParamsName = "";
          //   var paramsNameNumber = params.length;
          //   var provideNumber = 4;
          //   var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
          //   if (paramsNameNumber > provideNumber) {
          //     for (var p = 0; p < rowNumber; p++) {
          //       var tempStr = "";
          //       var start = p * provideNumber;
          //       var end = start + provideNumber;
          //       if (p == rowNumber - 1) {
          //         tempStr = params.substring(start, paramsNameNumber);
          //       } else {
          //         tempStr = params.substring(start, end) + "\n";
          //       }
          //       newParamsName += tempStr;
          //     }

          //   } else {
          //     newParamsName = params;
          //   }
          //   return newParamsName
          // }

        },
      }
    ],
    series: [
      {
        name: '称号等级',
        type: 'radar',
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [
          {
            value: [97, 42, 88, 94, 90, 86],
            name: '称号等级',
            areaStyle: {
              normal: {
                color: '#45C0E9'
              }
            },
            lineStyle: {
              normal: {

                color: '#87a4c5',
              }
            }
          },

        ]
      }
    ],
  }
  canvasCH.setOption(option2);
}