// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    list: [{
      name: '湘味蒸菜',
      children: [{ name: '剁椒鱼头' }, { name: '剁椒鱼头' }, { name: '剁椒鱼头' }, { name: '剁椒鱼头' }, { name: '剁椒鱼头' },
        { name: '清蒸鲈鱼' }, { name: '扣肉' }, { name: '剁椒鱼头' }, { name: '开胃鱼头' }, { name: '剁椒鱼头' }]
    }, {
        name: '农家小炒',
        children: [{ name: '酸辣土豆丝' }, { name: '酸辣土豆丝' }, { name: '酸辣土豆丝' }, { name: '酸辣土豆丝' }, { name: '酸辣土豆丝' }]
      }, {
        name: '特色干锅',
        children: [{ name: '干锅土鸡' }, { name: '干锅土鸡' }, { name: '干锅土鸡' }, { name: '干锅土鸡' }, { name: '干锅土鸡' }]
      }, {
        name: '美味汤羹',
        children: [{ name: '西红柿蛋汤' }, { name: '西红柿蛋汤' }, { name: '西红柿蛋汤' }, { name: '西红柿蛋汤' }, { name: '西红柿蛋汤' }]
      }, {
        name: '美味小食',
        children: [{ name: '口水鸡' }, { name: '口水鸡' }, { name: '口水鸡' }, { name: '口水鸡' }, { name: '口水鸡' }]
      }, {
        name: '田园时蔬',
        children: [{ name: '香菇菜心' }, { name: '香菇菜心' }, { name: '香菇菜心' }, { name: '香菇菜心' }, { name: '香菇菜心' }]
      }, {
        name: '精美点心',
        children: [{ name: '酒酿丸子' }, { name: '酒酿丸子' }, { name: '酒酿丸子' }, { name: '酒酿丸子' }, { name: '酒酿丸子' }]
      }, {
        name: '酒水饮料',
        children: [{ name: '椰奶' }, { name: '椰奶' }, { name: '椰奶' }, { name: '椰奶' }, { name: '椰奶' }]
      }],
      headerIdx: 0,
      categoryIdx: 0,
      foods: [],
    topHeightStr:'', // 点击查看活动详情
      // hastitleChange: 0
  },
  tabchange(e) {
    // title的切换
    this.setData({ headerIdx: Number(e.currentTarget.dataset.id)})
  },
  menuchange(e) {
    // menu 切换
    this.setData({ categoryIdx: Number(e.currentTarget.dataset.id),foods: this.data.list[Number(e.currentTarget.dataset.id)].children})
  },
  checkintroduce(){
    // 查看细节
    if(this.data.topHeightStr === '')
     {
      // this.setData({ topHeightStr: 'height: calc(100vh - 50rpx); transition: height 3s ease -in -out; -webkit - transition: height 3s ease -in -out;' });
      this.setData({ topHeightStr: 'detail-top-active'});
     }
    else this.setData({ topHeightStr: '' });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: getApp().globalData.title || '暂无店名' });
    this.setData({
      foods: this.data.list[this.data.categoryIdx].children
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