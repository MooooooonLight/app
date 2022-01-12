import {
  reqGetCode,
  reqUserRegister,
  reqUserLogin,
  reqUserInfo,
  reqLogout,
} from "@/api"
import { setToken } from "@/utils/token"
// 登录与注册
const state = {
  code: "",
  token: localStorage.getItem("TOKEN"),
  userInfo: {},
}
const mutations = {
  GETCODE(state, code) {
    state.code = code
  },
  USERLOGIN(state, token) {
    state.token = token
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  CLEAR(state) {
    state.token = ""
    state.userInfo = {}
    localStorage.removeItem("TOKEN")
  },
}
const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    const result = await reqGetCode(phone)
    if (result.code == 200) {
      commit("GETCODE", result.data)
      return "ok"
    } else {
      return Promise.reject(new Error("failed"))
    }
  },
  // 用户注册
  async userRegister({ commit }, user) {
    const result = await reqUserRegister(user)
    if (result.code == 200) {
      return "ok"
    } else {
      return Promise.reject(new Error("failed"))
    }
  },
  // 用户登录
  async userLogin({ commit }, user) {
    const result = await reqUserLogin(user)
    // 服务器下发token，用户的唯一标识（uuid）
    // 将来经常通过带token找服务器要用户信息进行展示
    if (result.code == 200) {
      commit("USERLOGIN", result.data.token)
      // 持久化储存
      setToken(result.data.token)
      return "ok"
    } else {
      return Promise.reject(new Error("failed"))
    }
  },
  // 获取用户信息
  async getUserInfo({ commit }) {
    const result = await reqUserInfo()
    if (result.code == 200) {
      commit("GETUSERINFO", result.data)
      return "ok"
    } else {
      return Promise.reject(new Error("failed"))
    }
  },
  // 退出登录 通知服务器清除token
  async userLogout({ commit }) {
    const result = await reqLogout()
    if (result.code == 200) {
      commit("CLEAR")
      return "ok"
    } else {
      return Promise.reject(new Error("failed"))
    }
  },
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
}
