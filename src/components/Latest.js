import { latestGetStories } from '../vuex/types'

export default {
  name: 'Latest',
  computed: {
    stories () {
      return this.$store.state.Latest.stories
    }
  },
  methods: {
    goToDetail (id) {
      this.$router.push(`/detail?id=${id}`)
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
    return (
      <div>
        {
          list
        }
      </div>
    )
  },
  mounted () {
    this.$store.dispatch(latestGetStories)
  }
}
