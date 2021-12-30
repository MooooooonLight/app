import Vue from "vue";
import App from "./App.vue";
// 注册三级联动为全局组件
import TypeNav from "@/components/TypeNav";
Vue.component(TypeNav.name, TypeNav);
// 引入路由
import router from "@/router";
// 引入仓库
import store from "./store";
// 引入mock数据
import "@/mock/mockServe";
// 引入swiper样式
import  "swiper/css/swiper.css";

// 阻止显示生产模式的消息
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 注册路由
  router,
  // 注册仓库 组件实例的身上会多出一个$store的属性
  store,
}).$mount("#app");
