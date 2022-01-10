import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
// 封装游客身份模块uuid>>>>>>生成一个随机字符串 不能改变
import { getUUID } from "@/utils/uuid_token";
const state = {
  goodsInfo: {},
  // 游客临时身份
  uuid_token:getUUID(),
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
  // 将产品添加到购物车中
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    // 加入服务器返回的解构
    // 加入购物车以后（发请求），前台将参数带给服务器
    // 服务器写入数据成功，并没有返回其他数据，只是返回code=200，代表这次操作成功 因此不需要三连环存储仓库
    const result = await reqAddOrUpdateShopCart(skuId, skuNum);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
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
