<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li v-for="tab in tabs" :class="{'is-active' : tab.isActive}">
          <a @click="selectTab(tab)">{{ tab.title }}</a>
        </li>
      </ul>
    </div>
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
