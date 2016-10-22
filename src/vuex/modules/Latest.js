import Vue from 'vue'
import * as types from '../types'

export default {
  state: {
    timestamp: 0,
    stories: []
  },
  mutations: {
    [types.latestGetStories] (state, payload) {
      state.stories = payload.stories
      state.timestamp = payload.timestamp
    }
  },
  actions: {
    [types.latestGetStories] ({state, commit}, callback) {
      let timestamp = Date.now()
      if (timestamp - state.timestamp < 1000 * 1) {
        if (callback) {
          callback()
        }
        return
      }
      Vue.http.get('/proxy?url=http://news-at.zhihu.com/api/4/news/latest')
      .then(res => res.json())
      .then((res) => {
        commit(types.latestGetStories, {
          stories: res.stories,
          timestamp: timestamp
        })
        if (callback) {
          callback()
        }
      })
    }
  }
}
