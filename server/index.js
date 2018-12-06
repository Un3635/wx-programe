import config from 'config.js'

const getData = (url, param, cb, cb1) => {
  wx.request({
    url: url,
    method: 'GET',
    dataType: 'json',
    header: {
      'content-type': 'application/json' // 默认值
    },
    data: param || '',
    success: function(res) {
      if (res.data.code === '00000')
        cb && cb(res.data);
      else cb1 && cb1();
    }
  })
}

const getList = (param, cb, cb1) => {
  getData(config.getList,param, cb, cb1);
}

const detail = (id, cb, cb1) => {
  getData(`${config.detail}?id=${id}`, '', cb, cb1);
}
export default {
  getList,
  detail
}