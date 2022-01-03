import { reqGetSearchInfo } from "@/api";
// search模块小仓库
const state = {
  // 搜索数据
  searchList: {},
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  },
};
const actions = {
  // 获取search模块数据
  async getSearchList({ commit }, params = {}) {
    // 至少传一个空对象
    // params形参 是当用户派发action时候，第二个参数传递过来的，至少是一个空对象
    const result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit("GETSEARCHLIST", result.data);
    }
  },
};
// 计算属性，在项目当中主要作用是仓库中的数据，方便组件使用数据方便
const getters = {
  // 形参state为小仓库中的state
  // 假如网络慢或者没有网络，返回的数据可能不是想要的类型 所以要给空数组和空对象等属性
  goodsList(state) {
    return state.searchList.goodsList || [];
  },
  trademarkList(state) {
    return state.searchList.trademarkList || [];
  },
  attrsList(state) {
    return state.searchList.attrsList || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
