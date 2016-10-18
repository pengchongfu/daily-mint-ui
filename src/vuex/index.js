import Vue from 'vue'
import Vuex from 'vuex'

import Splash from './modules/Splash'
import Latest from './modules/Latest'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Splash,
    Latest
  }
})

export default store
