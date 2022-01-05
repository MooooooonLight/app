import { reqGoodsInfo } from "@/api";
const state = {
  goodsInfo: {},
};
const mutations = {
  GETGOODSINFO(state, goodsInfo) {
    state.goodsInfo = goodsInfo;
  },
};
const actions = {
  // 获取产品详细信息的action
  async getGoodsInfo({ commit }, skuId) {
    const result = await reqGoodsInfo(skuId);
    if (result.code == 200) {
      commit("GETGOODSINFO", result.data);
    }
  },
};
// 简化数据
const getters = {
  categoryView(state) {
    // 路径导航简化的数据 至少是一个空对象
    return state.goodsInfo.categoryView || {};
  },
  // 简化产品信息的数据
  skuInfo(state) {
    return state.goodsInfo.skuInfo || {};
  },
  // 产品售卖属性的简化
  spuSaleAttrList() {
    return state.goodsInfo.spuSaleAttrList || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
