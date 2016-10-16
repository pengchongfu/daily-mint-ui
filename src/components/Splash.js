import { splashGetImgSrc } from '../vuex/types'

export default {
  name: 'Splash',
  computed: {
    imgSrc () {
      return this.$store.state.Splash.imgSrc
    }
  },
  render (h) {
    let img = (
      <transition name="fade">
        <img src={this.imgSrc} style="width: 100%"/>
      </transition>
    )
    return this.imgSrc ? img : <mt-spinner type="double-bounce" color="#26a2ff" size={100}></mt-spinner>
  },
  created () {
    this.$store.dispatch(splashGetImgSrc)
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
