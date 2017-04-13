<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li v-for="tab in tabs" :class="{'is-active' : tab.selected}">
          <a href="#123">{{ tab.title }}</a>
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
  }
}
</script>

<style lang="css">
</style>
