import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api";

// home模块小仓库
const state = {
  // 根据服务器返回值初始化，储存三级菜单数据
  categoryList: [],
  // 储存首页轮播图数据
  bannerList: [],
  // 储存floor数据
  floorList: [],
};
// 唯一能修改state数据的地方
const mutations = {
  GETCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
// 用户派发的action在这里处理，可以加上一些逻辑
const actions = {
  // 通过api接口的函数调用，想服务器发送请求，获取服务器的数据 获取三级菜单数据
  async categoryList({ commit }) {
    const result = await reqCategoryList();
    if (result.code == 200) {
      commit("GETCATEGORYLIST", result.data);
    }
  },
  // 获取首页轮播图数据
  async getBannerList({ commit }) {
    const result = await reqGetBannerList();
    if (result.code == 200) {
      commit("GETBANNERLIST", result.data);
    }
  },
  // 获取floor数据
  async getFloorList({ commit }) {
    const result = await reqFloorList();
    if (result.code == 200) {
      commit("GETFLOORLIST", result.data);
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
