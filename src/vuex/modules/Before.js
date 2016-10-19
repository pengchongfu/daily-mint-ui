import Vue from 'vue'
import * as types from '../types'

export default {
  state: {
    storiesList: {}
  },
  mutations: {
    [types.beforeGetStories] (state, payload) {
      Vue.set(state.storiesList, payload.date, payload.stories)
    }
  },
  actions: {
    [types.beforeGetStories] ({state, commit}, date) {
      if (state.storiesList[date]) {
        return
      }
      Vue.http.get(`/proxy?url=http://news.at.zhihu.com/api/4/news/before/${date}`)
      .then(res => res.json())
      .then((res) => {
        commit(types.beforeGetStories, {
          date: date,
          stories: res.stories
        })
      })
    }
  }
}
