import axios from 'axios'
import {
  Message
} from 'element-ui'

const http = axios.create({
  baseURL: "/cailiaodata",
  timeout: '3000',
})
// 请求拦截器
http.interceptors.request.use(config => {
  if (config.method == 'post') { //设置请求头
    config.headers['Content-Type'] = 'application/json;utf-8'
  }
  // 把token缓存到本地 关掉页面删除
  const token = window.sessionStorage.getItem('token')
  if (token) {
    // 把token 放到请求头
    config.headers.token = token
  }
  return config
}, err => {
  Promise.reject(err)
})
// 响应拦截器
http.interceptors.response.use(res => {
  // window.console.log(res)
  if (res.data && res.data.code === 500) {
    Message.error(res.data.msg)
    return res.data
  } else {
    return res.data
  }
}, error => {
  return Promise.reject(error)
})


const $http = {
  post(url, da, sh) {
    http({
      method: "post",
      url: url,
      data: da
    }).then(res => {
      sh(res)
    }).catch(error => {
      window.console.log(error)
    })
  },
  get(url, da, sh) {
    http({
      method: 'get',
      url: url,
      params: da
    }).then(res => {
      sh(res)
    }).catch(err => {
      window.console.log(err)
    })
  }
}

export default $http