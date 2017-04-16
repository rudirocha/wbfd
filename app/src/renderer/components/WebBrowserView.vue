<template>
  <div style="background-color:#ccc">
    <!-- Top nav bar init -->
    <tabs>
      <tab v-for="tab in activeTabs" :title="tab.title" :link="tab.link"></tab>
    </tabs>
    <!-- Top nav bar end-->
  </div>
</template>

<script>
import Tabs from './WebBrowserView/Tabs'
import Tab from './WebBrowserView/Tab'
import AppStore from '../vuex/store'

export default {
  components: {
    Tabs,
    Tab
  },
  created () {
  },
  data () {
    return {
      browserTabs: AppStore.state.browser.pages
    }
  },
  methods: {
  },
  computed: {
    activeTabs () {
      return this.browserTabs
    }
  }
}
</script>

<style lang="css">
</style>
