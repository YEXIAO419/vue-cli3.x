import instance from './interceptors.js'

var api = {
  /* ---------- 注册登陆部分 ---------- */
  login (data) {
    return instance({
      url: 'api/home/user/login',
      method: 'POST',
      data: data
    })
  },

  loginOut () {
    console.log('退出')
  }

}

export default api