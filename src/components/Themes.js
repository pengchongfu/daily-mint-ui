import { themesGetList, themesGetContent } from '../vuex/types'
import Loading from './Loading'

export default {
  name: 'Themes',
  components: {
    Loading
  },
  data () {
    return {
      selectedIndex: -1
    }
  },
  computed: {
    themesList () {
      return this.$store.state.Themes.themesList
    },
    themesContentList () {
      return this.$store.state.Themes.themesContentList
    }
  },
  methods: {
    select (index) {
      this.$store.dispatch(themesGetContent, index)
      if (this.selectedIndex === index) {
        this.selectedIndex = -1
      } else {
        this.selectedIndex = index
      }
    },
    goToDetail (id) {
      this.$router.push(`/detail?id=${id}`)
    }
  },
  render (h) {
    let list = []
    for (let i = 0; i < this.themesList.length; i++) {
      list.push(
        <mt-cell nativeOn-click={this.select.bind(null, i)}>
          <img slot="icon" src={'/proxy?url=' + this.themesList[i].thumbnail} width="75" height="75"/>
          <span>{this.themesList[i].name}</span>
        </mt-cell>
      )
      if (this.selectedIndex === i) {
        if (this.themesContentList[i]) {
          for (let j = 0; j < this.themesContentList[this.selectedIndex].length; j++) {
            list.push(
              <div>
                <mt-cell title={this.themesContentList[this.selectedIndex][j].title} nativeOn-click={this.goToDetail.bind(null, this.themesContentList[this.selectedIndex][j].id)}>
                </mt-cell>
              </div>
            )
          }
        } else {
          list.push(
            <loading></loading>
          )
        }
      }
    }
    if (list.length) {
      return (
        <div>
          {
            list
          }
        </div>
      )
    } else {
      return <loading></loading>
    }
  },
  mounted () {
    this.$store.dispatch(themesGetList)
  }
}
