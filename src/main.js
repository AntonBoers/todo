import Vue from 'vue'
import App from './App.vue'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faTrash, faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

//Subscribe to store updates so localStorage can be updated with new state when a mutation is called
store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})

new Vue({
  store,
  render: (h) => h(App),
  beforeCreate() {
    if (localStorage.getItem('store')) {
      store.commit('initializeStore', localStorage.getItem('store'))
    }
  }
}).$mount('#app')
