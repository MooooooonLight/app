// 对axios进行二次封装
import axios from "axios"
// 引入进度条
import nprogress from "nprogress"
// 引入进度条样式
import "nprogress/nprogress.css"
// 在当前模块中音符store
import store from "@/store"

// 1.利用axios对象的方法creat 去创建一个axios实例
// 2.requests就是axios 不过可以稍微配置一下
const requests = axios.create({
  // 配置对象
  // 基础路径，发送请求默认加上
  baseURL: "/api",
  // 请求超时的时间 5s
  timeout: 5000,
})

// 请求拦截器：在发送请求之前，可以检测到请求并处理一些业务
requests.interceptors.request.use((config) => {
  // config：配置对象，里面有个很重要的属性 headers
  // 进度条开始
  nprogress.start()
  // 带上游客uuid_token
  if (store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token
  }
  // 需要携带token给服务器
  if (store.state.user.token) {
    config.headers.token = store.state.user.token
  }
  return config
})

// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    // 成功的回调函数，服务器响应数据回来之后，响应拦截器可以检测到，并处理一些业务
    // 进度条结束
    nprogress.done()
    return res.data
  },
  () => {
    // 响应失败的回调函数
    return Promise.reject(new Error("false"))
  }
)

// 对外暴露
export default requests
