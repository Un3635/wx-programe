// pages/priceContrast/priceContrast.js
// let Charts = require('./../../utils/wxcharts.js');
import Charts from './../../utils/wxcharts.js'
// import F2 from '../../static/f2-canvas/lib/f2.js';


// let chart = null;

// function initChart(canvas, width, height) { // 使用 F2 绘制图表
//   const data = [
//     { year: '1951 年', sales: 38 },
//     { year: '1952 年', sales: 52 },
//     { year: '1956 年', sales: 61 },
//     { year: '1957 年', sales: 145 },
//     { year: '1958 年', sales: 48 },
//     { year: '1959 年', sales: 38 },
//     { year: '1960 年', sales: 38 },
//     { year: '1962 年', sales: 38 },
//   ];
//   chart = new F2.Chart({
//     el: canvas,
//     width,
//     height
//   });

//   chart.source(data, {
//     sales: {
//       tickCount: 5
//     }
//   });
//   chart.tooltip({
//     showItemMarker: false,
//     onShow(ev) {
//       const { items } = ev;
//       items[0].name = null;
//       items[0].name = items[0].title;
//       items[0].value = '¥ ' + items[0].value;
//     }
//   });
//   chart.interval().position('year*sales');
//   chart.render();
//   // console.log(chart);
//   return chart;
// }

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // opts: {
    //   onInit: initChart
    // }
    windowHeight: 0,
    windowWidth: 320,
    chart: null,
    dataLength: 12,
    scrollLeft: 0,
  },
  foodContrast() {
    var _ = this;
    this.chart = new Charts({
      canvasId: 'canvas',
      type: 'line',
     
      extra: {
        lineStyle: 'curve', //线条的形状（弧形）
        column: {
          width: 10
        }
      },
      title: {
        // name: '70%',
        // color: '#7cb5ec',
        // fontSize: 25
      },
      categories: ['剁椒鱼头', '清蒸鲈鱼', '开胃鱼头', '酸辣土豆丝', '干锅土鸡', '西红柿蛋汤', '口水鸡', '香菇菜心', '酒酿丸子', '椰奶', '剁椒鱼头1', '清蒸鲈鱼2'],
      series: [{
        name: '饿了么',
        data: [40, null, 44, 12, 30, 18, 24, 22, 20, 8],
        format: function (val) {
          return val;
        }
      }, {
        name: '美团',
        fontSize: '30px',
        data: [38, 40, 42, 10, 30, 20, 24, 22, 20, 8],
        format: function (val) {
          return val;
        }
      }],
      yAxis: {
        format: function (val) {
          return val + '元';
        }
        // fontColor: "#8a6e57"
      },
      xAxis: {
        axisTick: { length: 50 }
      },
     
      width: _.data.windowWidth,
      height: _.data.windowHeight/2,
      totalWidth: Number(_.data.dataLength) * (_.data.windowWidth / 5.5) > _.data.windowWidth ? _.data.dataLength * (_.data.windowWidth / 5.5): _.data.windowWidth,
      animation: true,
      enableScroll: true,
    });
   
  },
  scroll(e) {
    // console.log(e);
    var scrollLeft = e.detail.scrollLeft;
    this.setData({ scrollLeft: scrollLeft })
    // this.chart.scrollStart(e);
  },
  toDetai() {
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: getApp().globalData.title || '暂无店名' });
    this.setData({ windowWidth: wx.getSystemInfoSync().windowWidth, windowHeight: wx.getSystemInfoSync().windowHeight});
    this.foodContrast();
    console.log(this.chart, this.data.windowWidth, this.data.windowHeight);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})