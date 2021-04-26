import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router,ActivatedRoute } from '@angular/router';
import '../../assets/world.js'

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css']
})
export class WorldmapComponent implements OnInit {

  nations : string[];
  option : any;

  constructor(private recipeService: RecipeService, public router:Router) {

  }

  onChartClick($event) {
    const nation = $event.name;
    if (this.nations.indexOf(nation) != -1) {
      const url = '/cookbook/' + nation;
      this.router.navigate([url])
    } 
  }

  getNations(): void {
     this.recipeService.getNations()
       .subscribe(nations => this.nations = nations)
  }


  ngOnInit(): void {
    this.getNations();
    var GeoCoordMap = {
      'China': [116.20,39.55],
      'India': [12.29,41.54], 
      'Japan': [141.20,39.55],
      'Russia': [37.35,55.45],
      'Germany': [13.25,52.30],
      'Thai' : [100.35,13.45], 
      'Mexico' : [-99.10,19.20],
      'Spain': [-3.45,40.25],
      // 'USA': [-83.357567, 35.951935],
      // 'Brazil': [-56.903606, -5.480594],
      // 'Australian': [135.209296, -20.86882]
  };
  var Datas: any = [
      [{
          name: 'China',
          value: "Chinese Recipes",
          num: 1
      }],
      [{
         name: 'India',
         value: "Indian Recipes",
         num: 2
      }],
      [{
         name: 'Japan',
         value: "Japanese Recipes",
         num: 3
      }],
      [{
         name: 'Russia',
         value: "Russian Recipes",
         num: 4
      }],
     [{
        name: 'Germany',
        value: "German Recipes",
        num: 5
    }],
     [{
       name: 'Thai',
       value: "Thai Recipes",
       num: 6
     }],
    [{
      name: 'Mexico',
      value: "Mexican Recipes",
      num: 7
    }],
    [{
      name: 'Spain',
      value: "Spanish Recipes",
      num: 8
    }],

  ];
  var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          // 			console.log('dataItem',dataItem) //第二个数据
          var fromCoord = [100.501765, 30.756331];
          var toCoord = GeoCoordMap[dataItem[0].name];
          // 			console.log('toCoord',toCoord);//第一个地址
          if (fromCoord && toCoord) {
              res.push([{
                  coord: fromCoord,
                  value: dataItem[0].value,
              }, {
                  coord: toCoord,
                  dataItem: dataItem
              }]);
          }
      }
      return res;
  };
  
  var series = [];
  
  var arr = [
      ['China', Datas]
  ];
  
  arr.forEach(function(item, i) {
      series.push(
  
          // {
          //     type: 'lines',
          //     zlevel: 0,
          //     effect: {
          //         // 括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
          //         show: true,
          //         period: 4, //箭头指向速度，值越小速度越快
          //         trailLength: 0.1, //特效尾迹长度[0,1]值越大，尾迹越长重
          //         symbol: 'circle', //箭头图标
          //         symbolSize: 3, //图标大小
          //         color: "#fff"
          //     },
          //     lineStyle: {
          //         normal: {
          //             width: .7, //尾迹线条宽度
          //             opacity: 1, //尾迹线条透明度
          //             curveness: 0.2, //尾迹线条曲直度
          //             color: function(params) { //圆环显示文字
          //                 return '	#359fd1'
          //             },
          //         },
          //         color: 'red'
          //     },
          //     data: convertData(item[1])
          // }, 
          {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              rippleEffect: { //涟漪特效
                  period: 4, //动画时间，值越小速度越快
                  brushType: 'fill', //波纹绘制方式 stroke, fill
                  scale: 4.2 //波纹圆环最大限制，值越大波纹越大
              },
              // 括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              // symbol: 'none',
              symbol: 'circle',
              symbolSize: function(val) {
                  return 5; //圆环大小
              },
              itemStyle: {
                  normal: {
                      show: false,
                      // color: '#f00'
                      color: function(params) { //圆环显示文字
                          return '	#ffffff'
                      },
                      borderWidth: 0,
                      shadowColor: '#359fd1', //发光?效果
                      shadowBlur: 4
                  }
              },
              data: item[1].map(function(dataItem) {
                  // 	console.log('dataItem',dataItem[0]);
                  return {
                      dataItem: dataItem,
                      name: dataItem[0].name,
                      value: GeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                  };
              }),
          },
          //被攻击点
          {
              type: 'scatter',
              coordinateSystem: 'geo',
              zlevel: 1,
              rippleEffect: {
                  period: 4,
                  brushType: 'stroke',
                  scale: 4
              },
              symbol: 'circle',
              color: 'rgba(128, 220, 251, .6)',
              symbolSize: 20,
              // data: [{
              //     name: item[0],
              //     value: GeoCoordMap[item[0]].concat(["192.168.0.1"]),
              // }],
          }
      );
  });
  
  this.option = {
      type: 'map',
      mapType: 'world',
      tooltip: {
          formatter: function(e) {
              if (typeof(e.value)[2] == "undefined" || e.name == "") {
                  return e.name;
              } else {
                  return 'IP<br>' + e.name + ':' + e.value[2];
              }
          }
      },
      geo: {
          map: 'world',
          zoom: 1.2,
          label: {
              emphasis: {
                  show: true,
                  color:'white'
              }
          },
          roam: true, //是否允许缩放
          itemStyle: {
              normal: {
                  color: "#68d9fb", //地图背景色
                  borderColor: '#68d9fb', //省市边界线00fcff 516a89
                  borderWidth: 1
              },
              emphasis: {
                  color: 'rgba(104, 217, 251, 127)' //悬浮背景
              }
          },
      },
      series: series
  
  };

}
}
