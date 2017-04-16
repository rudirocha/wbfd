<template>
  <div v-show="isActive">
    <webview :src="link" :style="{width: `${this.wbWidth}px`, height: `${this.wbHeight}px`}"></webview>
      <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: this.selected,
      wbWidth: screen.availWidth,
      wbHeight: screen.availHeight
    }
  },
  props: {
    title: {required: true},
    selected: {default: false},
    link: {required: true}
  },
  mounted () {
    this.isActive = this.selected
  }
}
</script>

<style lang="css">
</style>
