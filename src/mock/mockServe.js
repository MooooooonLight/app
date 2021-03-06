// 引入mock模块
import Mock from "mockjs";
// 吧json数据格式引入进来 json 没有对外暴露 但是可以引入
// webpack默认对外暴露 图片、json数据格式
import banner from "./banner.json";
import floor from "./floor.json";

// mock数据 第一个参数请求地址 第二个参数请求数据
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });
