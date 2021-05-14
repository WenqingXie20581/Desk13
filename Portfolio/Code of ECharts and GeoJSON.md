```typescript
    var GeoCoordMap = {
        'United Kingdom':[-2.5879,51.4545],
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
          name: 'United Kingdom',
          value: "Bristol is your starting point",
          num: 0
      }],
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
            var fromCoord = [-2.5879,51.4545];
            var toCoord = GeoCoordMap[dataItem[0].name];
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
        ['United Kingdom', Datas]
    ];
    
    arr.forEach(function(item, i) {
        series.push(
    
            {
                type: 'lines',
                zlevel: 0,
                effect: {
                    
                    show: true,
                    period: 4, 
                    trailLength: 0.1, 
                    symbol: 'circle', 
                    symbolSize: 3, 
                    color: "#fff"
                },
                lineStyle: {
                    normal: {
                        width: .7,
                        opacity: 1, 
                        curveness: 0.2, 
                        color: function(params) { 
                            return '	#359fd1'
                        },
                    },
                    color: 'red'
                },
                data: convertData(item[1])
            }, 
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: { 
                    period: 4, 
                    brushType: 'fill', 
                    scale: 4.2 
                },
              
                symbol: 'circle',
                symbolSize: function(val) {
                    return 5; 
                },
                itemStyle: {
                    normal: {
                        show: false,
                        color: function(params) { 
                            return '	#ffffff'
                        },
                        borderWidth: 0,
                        shadowColor: '#359fd1',
                        shadowBlur: 4
                    }
                },
                data: item[1].map(function(dataItem) {
                    return {
                        dataItem: dataItem,
                        name: dataItem[0].name,
                        value: 			                    GeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                    };
                }),
            },
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
                data: [{
                    name: item[0],
                    value: GeoCoordMap[item[0]],
                }],
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
                    return  e.name + ':' + e.value[2];
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
            roam: true,
            itemStyle: {
                normal: {
                    color: "#68d9fb", 
                    borderColor: '#68d9fb', 
                    borderWidth: 1
                },
                emphasis: {
                    color: 'rgba(104, 217, 251, 127)' 
                }
            },
        },
        series: series
    
    };  
```

