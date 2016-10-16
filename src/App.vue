<template>
  <div style="width: 100%; height: 100%;">
    <mt-tab-container v-model="active" swipeable>
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

    <mt-tabbar v-model="active">
      <mt-tab-item id="latest">
        <img slot="icon">
        最新消息
      </mt-tab-item>
      <mt-tab-item id="before">
        <img slot="icon">
        过往消息
      </mt-tab-item>
      <mt-tab-item id="themes">
        <img slot="icon">
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
