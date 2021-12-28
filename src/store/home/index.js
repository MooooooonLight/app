import { reqCategoryList } from "@/api";

// home模块小仓库
const state = {
  // 根据服务器返回值初始化
  categoryList: [],
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
};
const actions = {
  // 通过api接口的函数调用，想服务器发送请求，获取服务器的数据
  async categoryList({ commit }) {
    const result = await reqCategoryList();
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
    }
    console.log(result.data);
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
