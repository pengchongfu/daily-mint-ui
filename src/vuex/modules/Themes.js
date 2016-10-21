import Vue from 'vue'
import * as types from '../types'

export default {
  state: {
    themesList: [],
    themesContentList: {}
  },
  mutations: {
    [types.themesGetList] (state, payload) {
      state.themesList = payload.themesList
    },
    [types.themesGetContent] (state, payload) {
      Vue.set(state.themesContentList, payload.index, payload.content)
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
    },
    [types.themesGetContent] ({state, commit}, index) {
      if (state.themesContentList[index]) {
        return
      }
      Vue.http.get(`/proxy?url=http://news-at.zhihu.com/api/4/theme/${state.themesList[index].id}`)
      .then(res => res.json())
      .then((res) => {
        commit(types.themesGetContent, {
          index,
          content: res.stories
        })
      })
    }
  }
}
