import Vue from 'vue'
import * as types from '../types'

export default {
  state: {
    themesList: []
  },
  mutations: {
    [types.themesGetList] (state, payload) {
      state.themesList = payload.themesList
    }
  },
  actions: {
    [types.themesGetList] ({state, commit}) {
      if (state.themesList.length) {
        return
      }
      Vue.http.get('/proxy?url=http://news-at.zhihu.com/api/4/themes')
      .then(res => res.json())
      .then((res) => {
        commit(types.themesGetList, {
          themesList: res.others
        })
      })
    }
  }
}
