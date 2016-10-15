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
      Vue.http.get('/proxy?url=http://news-at.zhihu.com/api/4/start-image/1080*1776')
      .then(res => res.json())
      .then((res) => {
        commit(types.splashGetImgSrc, {
          imgSrc: '/proxy?url=' + res.img
        })
      })
    }
  }
}
