import Vue from 'vue'
import Vuex from 'vuex'

import Splash from './modules/Splash'
import Latest from './modules/Latest'
import Before from './modules/Before'
import Themes from './modules/Themes'
import Detail from './modules/Detail'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Splash,
    Latest,
    Before,
    Themes,
    Detail
  }
})

export default store
