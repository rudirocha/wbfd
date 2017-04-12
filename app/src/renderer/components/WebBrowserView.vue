<template>
  <div>
    <!-- Top nav bar init -->
    <tabs>
      <tab title="Github" :selected="true">
        <h1>Here the content</h1>
      </tab>
      <tab title="Google">
      </tab>
    </tabs>
    <!-- Top nav bar end-->
  </div>
</template>

<script>
import Tabs from './WebBrowserView/Tabs'
import Tab from './WebBrowserView/Tab'

export default {
  components: {
    Tabs,
    Tab
  },
  created () {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
</style>
