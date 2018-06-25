import Vue from 'vue'
import App from './components/App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

import {FontAwesomeIcon} from "./icons"

Vue.component('font-awesome-icon', FontAwesomeIcon)


// Sync Vue router and the Vuex store
sync(store, router)

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
