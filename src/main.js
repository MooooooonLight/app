import Vue from "vue";
import App from "./App.vue";
// 注册三级联动为全局组件
import TypeNav from "@/pages/Home/TypeNav";
Vue.component(TypeNav.name, TypeNav);
// 引入路由
import router from "@/router";
Vue.config.productionTip = false;
// 测试
import { reqCategoryList } from "./api";
reqCategoryList();

new Vue({
  render: (h) => h(App),
  // 注册路由
  router,
}).$mount("#app");
