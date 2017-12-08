import Vue from 'vue'
import Vuex from 'vuex'
import storage from '@/assets/storage'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    baseUrl: 'http://localhost:8000/',
    user: storage.getItem('user', true)
  },
  getters: {
    getBaseUrl: state => {
      return state.baseUrl
    },
    getUser: state => {
      return state.user
    }
  },
  mutations: {
    user (state, user) {
      state.user = user
      storage.setItem('user', user)
    }
  },
  actions: {
    saveUser ({ commit }, user) {
      commit('user', user)
    }
  }
})

export default store
