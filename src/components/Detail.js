import { detailGetNews } from '../vuex/types'
import Loading from './Loading'

export default {
  name: 'Detail',
  components: {
    Loading
  },
  data () {
    return {
      css: document.createElement('link')
    }
  },
  computed: {
    news () {
      return this.$store.state.Detail.newsList[this.$route.query.id]
    }
  },
  render (h) {
    if (this.news) {
      this.css.href = this.news.css[0]
      return (
        <div style="position: relative;">
          <div style={ `width: 100%; height: 200px; position: absolute; background: url(${this.news.image}) no-repeat center center; background-size: cover;` }></div>
          <div domProps-innerHTML={this.news.body}>{this.news.id}</div>
        </div>
      )
    } else {
      return <loading></loading>
    }
  },
  created () {
    this.$store.dispatch(detailGetNews, this.$route.query.id)
    this.css.rel = 'stylesheet'
    document.getElementsByTagName('head')[0].appendChild(this.css)
  },
  beforeDestroy () {
    if (this.css.parentNode) {
      this.css.parentNode.removeChild(this.css)
    }
  }
}
