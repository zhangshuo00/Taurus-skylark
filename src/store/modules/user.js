const state = {
  username: ''
}

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
