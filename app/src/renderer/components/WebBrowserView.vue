<template>
  <div>
    <!-- Top nav bar init -->
    <tabs>
      <tab title="Github" link="http://github.com">
        <h1>Here the content</h1>
      </tab>
      <tab title="Google"  link="http://google.com">
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
  },
  methods: {
    cenas () {
      alert('cenas')
    }
  }
}
</script>

<style lang="css">
</style>
