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
  methods: {
    proxy (s) {
      return s.replace(/src="([A-Za-z0-9:/.;?=&_-]+)"/g, (match, p1) => {
        return `src="/proxy?url=${p1}"`
      })
    }
  },
  render (h) {
    if (this.news) {
      this.css.href = `/proxy?url=${this.news.css[0]}`
      return (
        <div style="position: relative;">
          {
            this.news.image ? <div style={ `width: 100%; height: 200px; position: absolute; background: url(/proxy?url=${this.news.image}) no-repeat center center; background-size: cover;` }></div> : null
          }
          <div domProps-innerHTML={this.proxy(this.news.body)}>{this.news.id}</div>
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
