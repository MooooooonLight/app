// 配置路由的地方
import Vue from "vue"
import VueRouter from "vue-router"
import routes from "@/router/routes"
// 使用插件
Vue.use(VueRouter)
// 引入store
import store from "@/store"
// 保存原始push&replace方法
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
// 重写push&replace方法
// 第一个参数告诉原push方法向哪里跳转
// 第二个第三个参数为成功和失败的回调
// call和apply的区别
// 相同点，都可以调用函数一次并可以篡改函数的上下文一次
// 不同点，call传参数用逗号隔开 apply传参数用数组
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
// 配置路由
let router = new VueRouter({
  // 配置路由
  routes,
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 }
  },
})
// 全局守卫，前置守卫（在路由跳转之前进行判断）
router.beforeEach(async (to, from, next) => {
  // to:可以获取到要跳到哪个路由的信息
  // from:可以获取从哪个路由来的信息
  // next:放行函数  next() next(path)放行到哪里 next(false)
  // 用户登录了才会有token
  const token = store.state.user.token
  const name = store.state.user.userInfo.name
  // 已经登录
  if (token) {
    // 还想去login
    if (to.path == "/login" || to.path == "/register") {
      next("/")
    } else {
      // 登录了 并且用户名已有
      if (name) {
        next()
      } else {
        // 没有用户信息，派发action让仓库存储用户信息再跳转
        try {
          await store.dispatch("getUserInfo")
          // 如果成功获取用户信息
          next()
        } catch (error) {
          // 身份过期 token
          // 清除token
          store.dispatch("userLogout")
          next("/login")
        }
      }
    }
  } else {
    // 未登录
    next()
  }
})

export default router
