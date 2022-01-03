import Vue from "vue";
import App from "./App.vue";
// 全局组件 三级联动注册
import TypeNav from "@/components/TypeNav";
// 全局组件 轮播图注册
import Carousel from "@/components/Carousel";
// 全局组件 分页器
import Pagination from "@/components/Pagination";
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
// 引入路由
import router from "@/router";
// 引入仓库
import store from "./store";
// 引入mock数据
import "@/mock/mockServe";
// 引入swiper样式
import "swiper/css/swiper.css";

// 阻止显示生产模式的消息
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 配置全局总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  // 注册路由
  router,
  // 注册仓库 组件实例的身上会多出一个$store的属性
  store,
}).$mount("#app");
