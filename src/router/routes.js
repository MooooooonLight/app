// 引入路由组件
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";

// 配置路由
export default [
  {
    name: "home",
    path: "/home",
    component: Home,
    meta: { show: true },
  },
  {
    name: "search",
    path: "/search/:keyword?",
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
  {
    name: "detail",
    path: "/detail/:skuId",
    component: Detail,
    meta: { show: true },
  },
  {
    name: "addcartsuccess",
    path: "/addcartsuccess",
    component: AddCartSuccess,
    meta: { show: true },
  },
  {
    name: "shopcart",
    path: "/shopcart",
    component: ShopCart,
    meta: { show: true },
  },
  // 重定向，在项目跑起来的时候，访问/立马定向到首页
  {
    path: "/",
    redirect: "/home",
  },
];
