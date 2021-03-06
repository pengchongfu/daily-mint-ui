import { latestGetStories } from '../vuex/types'
import Loading from './Loading'

export default {
  name: 'Latest',
  components: {
    Loading
  },
  computed: {
    stories () {
      return this.$store.state.Latest.stories
    }
  },
  methods: {
    goToDetail (id) {
      this.$router.push(`/detail?id=${id}`)
    },
    fresh (id) {
      this.$store.dispatch(latestGetStories, () => {
        this.$refs.loadmore.onTopLoaded(id)
      })
    }
  },
  render (h) {
    let list = []
    for (let i = 0; i < this.stories.length; i++) {
      list.push(
        <mt-cell nativeOn-click={this.goToDetail.bind(null, this.stories[i].id)}>
          <img slot="icon" src={'/proxy?url=' + this.stories[i].images[0]} width="75" height="75"/>
          <span>{this.stories[i].title}</span>
        </mt-cell>
      )
    }
    if (list.length) {
      return (
        <mt-loadmore top-method={this.fresh} ref="loadmore">
          <div slot="top" class="mint-loadmore-top">
            <loading></loading>
          </div>
          {
            list
          }
        </mt-loadmore>
      )
    } else {
      return <loading></loading>
    }
  },
  mounted () {
    this.$store.dispatch(latestGetStories)
  }
}
