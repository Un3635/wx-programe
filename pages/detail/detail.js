// pages/detail/detail.js
import API from '../../server/index.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    vodUrl: getApp().globalData.vodUrl
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   vodUrl: getApp().globalData.vodUrl
    // })
    // console.log(this.data.vodUrl)
    API.detail(options.id || 1, res => {
      // this.data.detail = res.data;
      let introduce = res.data.introduce;
      let _introduce = introduce.slice(3, introduce.length-3);
      let stars =  JSON.parse(res.data.star);
      let _stars = [];
      stars.forEach(item => {
          if(item.roleName === 'mainActors') {
            _stars.push(item);
          }
      });
      Object.assign(res.data, {_introduce: _introduce, _stars: _stars})
      this.setData({detail: res.data});
      // console.log(this.data.detail, this.data.detail.introduce)
      // console.log(this.data.detail.introduce.slice(3, 10))
    })
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