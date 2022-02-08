import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    initializeStore(state, store) {
      this.replaceState(Object.assign(state, JSON.parse(store)))
    },
    addTask(state, payload) {
      state.tasks.push(payload)
    },
    removeTask(state, id) {
      const taskIndex = state.tasks.findIndex((task) => task.id === id)
      state.tasks.splice(taskIndex, 1)
    },
    updateTask(state, payload) {
      const taskIndex = state.tasks.findIndex(({ id }) => id === payload.id)
      state.tasks[taskIndex][payload.type] = payload.content
    }
  },
  actions: {
    addTask({ commit }, payload) {
      commit('addTask', payload)
    },
    removeTask({ commit }, index) {
      commit('removeTask', index)
    },
    updateTask({ commit }, payload) {
      commit('updateTask', payload)
    }
  },
  getters: {
    allUndoneTasks(state) {
      return state.tasks.filter((task) => !task.done)
    },
    allDoneTasks(state) {
      return state.tasks.filter((task) => task.done)
    }
  }
})
