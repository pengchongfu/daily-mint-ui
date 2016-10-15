export default {
  name: 'Splash',
  data () {
    return {
      loading: true
    }
  },
  render (h) {
    let img = <mt-button>img</mt-button>
    return this.loading ? <mt-spinner type="double-bounce" color="#26a2ff" size={100}></mt-spinner> : img
  },
  created () {
    this.$http.get('/proxy?url=http://news-at.zhihu.com/api/4/start-image/1080*1776')
    .then(res => res.json())
    .then((res) => {
      console.log(res)
    })
  }
}
