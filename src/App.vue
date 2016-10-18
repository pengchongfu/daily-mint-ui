<template>
  <div style="width: 100%; height: 100%;">
    <mt-tab-container v-model="active" swipeable style="height: 100%; overflow: scroll; padding-bottom: 55px; box-sizing: border-box;">
      <mt-tab-container-item id="latest">
        <latest></latest>
      </mt-tab-container-item>
      <mt-tab-container-item id="before">
        <before></before>
      </mt-tab-container-item>
      <mt-tab-container-item id="themes">
        <themes></themes>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="active" :fixed="true">
      <mt-tab-item id="latest">
        <img slot="icon" src="./assets/today.svg">
        最新消息
      </mt-tab-item>
      <mt-tab-item id="before">
        <img slot="icon" src="./assets/before.svg">
        过往消息
      </mt-tab-item>
      <mt-tab-item id="themes">
        <img slot="icon" src="./assets/themes.svg">
        主题日报
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import './styles/app.css'
import Latest from './components/Latest'
import Before from './components/Before'
import Themes from './components/Themes'

export default {
  name: 'App',
  components: {
    Latest,
    Before,
    Themes
  },
  data () {
    return {
      active: 'latest'
    }
  }
}
</script>
