<template>
  <div>
    <nav class="nav">
      <div class="nav-left">
        <div v-for="tab in tabs" class="nav-item">
          <a @click="selectTab(tab)" :class="{'is-active' : tab.isActive}">{{ tab.title }}</a>
        </div>
      </div>
    </nav>
    <div class="tabs-stage">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  computed: {
    getTabs () {
      return this.tabs
    }
  },
  methods: {
    selectTab (selectedTab) {
      this.getTabs.forEach(tab => {
        tab.isActive = (selectedTab.title === tab.title)
      })
    }
  }
}
</script>

<style lang="css">
</style>
