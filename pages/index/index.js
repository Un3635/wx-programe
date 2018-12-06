//index.js
//获取应用实例
import $touch from '../../utils/touch.js';
const app = getApp();

const $ = wx.createSelectorQuery();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    list: [{}, {}, {}, {},{},{},{},{},{},{}],
    hasUserInfo: false,
    hasLocation: false,
    locationStr: '',
    hasPriceContrast: '',
    dir: '',
    showLocation: '',
    indexwrapnone: '',
    merchantwrapnone: '',
    scrollTop: 0
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  setLocation() {
    // 重新获取 地理位置
    const _ = this;
    wx.openSetting({
      success: function (res) {
        _.getLocation();
      }
    })
  },
  getLocation() {
    // 获取地理位置
    const _ = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        _.setData({
          hasLocation: true,
          locationStr:  res.latitude
        });
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy

      },
      fail(res) {
        _.setData({
          hasLocation: false,
          locationStr: '未能获取地址'
        });
      }
    })
  },
  handsetLocation() {
    // 手动设置地理位置
    wx.navigateTo({ url: '/pages/address/address' });
  },
  priceContrast(e) {
    // 商家优惠活动的比价
    app.globalData.title = '真功夫';
    wx.navigateTo({
      url: '/pages/priceContrast/priceContrast',
    })
    // wx.createSelectorQuery().select('#eleme0').style.border = '1px solid orange';
  },
  touchStar(e) {
    // 左滑开始
    $touch.start(e);
  },
  touchEnd(e) {
    // 左滑结束
    $touch.end(e);
    // console.log($touch.dir);
    if($touch.dir === 'left') {
      this.setData({ hasPriceContrast: e.currentTarget.dataset.id });
    } else if ($touch.dir === 'right') {
      this.setData({ hasPriceContrast: -1 });
    }
  },
  upper(e) {
    // 下拉刷新
    // console.log(e);
    if (this.data.showLocation !== '')
      this.setData({ showLocation: '', indexwrapnone: '', merchantwrapnone: '' });
  },
  lower(e) {
    // 下拉加载
    // console.log(e)
  },
  scroll(e) {
    // 
    // console.log(e);
    if (e.detail.scrollTop > 10 && this.data.scrollTop < e.detail.scrollTop && this.data.showLocation === '') 
      this.setData({ showLocation: 'none', indexwrapnone: 'index-wrap-none', merchantwrapnone: 'merchant-wrap-none' });
    // else if (e.detail.scrollTop < 10 && this.data.scrollTop > e.detail.scrollTop && this.data.showLocation !== '')
    //   this.setData({ showLocation: '', indexwrapnone: '', merchantwrapnone: '' });
    this.setData({ scrollTop: e.detail.scrollTop});
  },
  toDetail(e) {
    // 进入详情
    app.globalData.title = '真功夫';
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
 
  onLoad: function () {
    this.getLocation();
    console.log($);
    // $.select('#showLocation').addEventListener('transitionend', function(){
    //   console.log('end');
    // })
    return;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
