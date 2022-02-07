import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
  },
  mutations: {
    addTask (state, payload) {
      state.items.push(payload);
    },
    removeTask(state, index) {
      state.items.splice(index, 1);
    },
    updateTask(state, payload) {
      state.items[payload.index][payload.type] = payload.content;
    },
  },
  actions: {
    addTask({ commit }, payload) {
      commit('addTask', payload);
    },
    removeTask({ commit }, index) {
      commit('removeTask', index);
    },
  },
  modules: {
  }
})
