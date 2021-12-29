import { reqCategoryList, reqGetBannerList } from "@/api";

// home模块小仓库
const state = {
  // 根据服务器返回值初始化，储存三级菜单数据
  categoryList: [],
  // 储存首页轮播图数据
  bannerList: [],
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  BANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
};
const actions = {
  // 通过api接口的函数调用，想服务器发送请求，获取服务器的数据 获取三级菜单数据
  async categoryList({ commit }) {
    const result = await reqCategoryList();
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
    }
    console.log(result.data);
  },
  // 获取首页轮播图数据
  async getBannerList({ commit }) {
    const result = await reqGetBannerList();
    if (result.code == 200) {
      commit("BANNERLIST", result.data);
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
