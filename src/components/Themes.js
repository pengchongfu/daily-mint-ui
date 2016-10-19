import { themesGetList } from '../vuex/types'

export default {
  name: 'Themes',
  computed: {
    themesList () {
      return this.$store.state.Themes.themesList
    }
  },
  render (h) {
    let list = []
    for (let i = 0; i < this.themesList.length; i++) {
      list.push(
        <mt-cell>
          <img slot="icon" src={'/proxy?url=' + this.themesList[i].thumbnail} width="75" height="75"/>
          <span>{this.themesList[i].name}</span>
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
    this.$store.dispatch(themesGetList)
  }
}
