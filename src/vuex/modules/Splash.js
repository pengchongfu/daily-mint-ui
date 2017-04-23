import Vue from 'vue'
import * as types from '../types'

export default {
  state: {
    imgSrc: ''
  },
  mutations: {
    [types.splashGetImgSrc] (state, payload) {
      state.imgSrc = payload.imgSrc
    }
  },
  actions: {
    [types.splashGetImgSrc] ({state, commit}) {
      Vue.http.get('/proxy?url=https://news-at.zhihu.com/api/7/prefetch-launch-images/1080*1920')
      .then(res => res.json())
      .then((res) => {
        commit(types.splashGetImgSrc, {
          imgSrc: '/proxy?url=' + res.creatives[0].url
        })
      })
    }
  }
}
