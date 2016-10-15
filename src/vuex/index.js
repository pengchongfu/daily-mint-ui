import Vue from 'vue'
import Vuex from 'vuex'

import Splash from './modules/Splash'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Splash
  }
})

export default store
