//index.js
//获取应用实例
import API from '../../server/index.js'
const app = getApp()

Page({
  data: {
    list: [],
    loading: false,
    page: 1,
    pagesize: 20,
    first: false,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  vodDetail(e) {
    // 进入详情
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`
    })
  },
  lower() {
    this.setData({
      first: true
    })
    if(this.data.first) {
      this.getData();
    }
  },
  getData() {
    this.setData({
      loading: true
    })
    API.getList({ page: this.data.page, pagesize: this.data.pagesize}, (res) => {
      console.log(res.data);
      let {page} = this.data;
      page++;
      this.setData({
        list: this.data.list.concat(res.data.list),
        loading: false,
        first: false,
        page
      })
    })
  },
 onLoad() {
  this.getData();
 }
  
})
