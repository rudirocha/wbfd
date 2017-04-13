<template>
  <div>
    <webview :src="link"></webview> 
      <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    title: {required: true},
    selected: {default: false},
    link: {required: true}
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
