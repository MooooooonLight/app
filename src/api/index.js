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
