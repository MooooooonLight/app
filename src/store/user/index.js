import { reqGetCode } from "@/api";
// 登录与注册
const state = {
  code: "",
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
};
const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    const result = await reqGetCode(phone);
    if (result.code == 200) {
      commit("GETCODE", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
  // 用户注册
  async userRegister({ commit }, user) {
    const result = await reqUserRegister(user);
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
