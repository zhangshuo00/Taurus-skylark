import { login, logout, getInfo } from "@/api/user"
import { getToken, setToken, removeToken } from "@/utils/auth"
import { resetRouter } from "@/router"

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  SET_USERNAME: (state, username) => {
    state.username = username
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
