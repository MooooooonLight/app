// 配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Search from "@/pages/Search";

// 保存原始push&replace方法
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
// 重写push&replace方法
// 第一个参数告诉原push方法向哪里跳转
// 第二个第三个参数为成功和失败的回调
// call和apply的区别
// 相同点，都可以调用函数一次并可以篡改函数的上下文一次
// 不同点，call传参数用逗号隔开 apply传参数用数组
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
// 配置路由
export default new VueRouter({
  // 配置路由
  routes: [
    {
      name: "home",
      path: "/home",
      component: Home,
      meta: { show: true },
    },
    {
      name: "search",
      path: "/search:keyword?",
      component: Search,
      meta: { show: true },
    },
    {
      name: "login",
      path: "/login",
      component: Login,
      meta: { show: false },
    },
    {
      name: "register",
      path: "/register",
      component: Register,
      meta: { show: false },
    },
    // 重定向，在项目跑起来的时候，访问/立马定向到首页
    {
      path: "/",
      redirect: "/home",
    },
  ],
});
