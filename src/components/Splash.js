export default {
  name: 'Splash',
  data () {
    return {
      loading: true,
      imgSrc: ''
    }
  },
  render (h) {
    let img = <img src={this.imgSrc} style="width: 100%"/>
    return this.loading ? <mt-spinner type="double-bounce" color="#26a2ff" size={100}></mt-spinner> : img
  },
  created () {
    this.$http.get('/proxy?url=http://news-at.zhihu.com/api/4/start-image/1080*1776')
    .then(res => res.json())
    .then((res) => {
      this.imgSrc = '/proxy?url=' + res.img
      this.loading = false
      // this.$router.push('/latest')
    })
  }
}
