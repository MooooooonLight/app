// 统一管理API
import requests from "./ajax";
import mockRequests from "./mockAjax";
// 三级联动接口
// /api/product/getBaseCategoryList   get  无参数
export const reqCategoryList = () =>
  requests.get("/product/getBaseCategoryList");
// 获取banner（home首页轮播图数据）
export const reqGetBannerList = () => mockRequests.get("/banner");
// 获取floor组件的数据
export const reqFloorList = () => mockRequests.get("/floor");
// 获取搜索模块数据 地址 /api/list 请求方式 post 这个接口给服务器传递一个默认参数（至少是一个空对象）
/**
  * {
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
  */
export const reqGetSearchInfo = (params) =>
  requests({ url: "/list", method: "post", data: params });

// 获取产品信息详情
export const reqGoodsInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });

// 将产品添加到购物车中（获取更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });

// 获取购物车列表数据接口
export const reqCartList = () =>
  requests({ url: "/cart/cartList", methods: "get" });

// 删除购物车产品的接口
export const reqDeleteCartById = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });

// 修改商品的选中状态
export const reqUpdateCheckedById = (skuId, isChecked) =>
  requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });

// 获取验证码
export const reqGetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });

// 注册接口
export const reqUserRegister = (data) =>
  requests({ url: "/user/passport/register", data, method: "post" });
