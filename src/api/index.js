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
