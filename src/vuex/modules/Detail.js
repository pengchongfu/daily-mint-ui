import Vue from 'vue'
import * as types from '../types'

export default {
  state: {
    newsList: {}
  },
  mutations: {
    [types.detailGetNews] (state, payload) {
      Vue.set(state.newsList, payload.id, payload.news)
    }
  },
  actions: {
    [types.detailGetNews] ({state, commit}, id) {
      if (state.newsList[id]) {
        return
      }
      Vue.http.get(`/proxy?url=http://news-at.zhihu.com/api/4/news/${id}`)
      .then(res => res.json())
      .then((res) => {
        commit(types.detailGetNews, {
          id: id,
          news: res
        })
      })
    }
  }
}
