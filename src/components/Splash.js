import { splashGetImgSrc, latestGetStories } from '../vuex/types'
import Loading from './Loading'

export default {
  name: 'Splash',
  computed: {
    imgSrc () {
      return this.$store.state.Splash.imgSrc
    }
  },
  components: {
    Loading
  },
  render (h) {
    let img = (
      <transition name="fade">
        <img src={this.imgSrc} style="width: 100%"/>
      </transition>
    )
    return this.imgSrc ? img : <loading></loading>
  },
  created () {
    this.$store.dispatch(splashGetImgSrc)
    this.$store.dispatch(latestGetStories)
  },
  watch: {
    imgSrc (val, oldVal) {
      if (val) {
        setTimeout(() => {
          this.$router.push('/index')
        }, 2000)
      }
    }
  }
}
