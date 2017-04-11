<template>
  <div>
    <div class="columns">
      <div class="column">
        <div class="tabs">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>
      </div>  
    </div>
    <div class="columns">
      <div class="column is-1">
        <aside class="menu">
  <p class="menu-label">
    Available links
  </p>
  <ul class="menu-list">
    <li><a :click="setWebViewUrl()"> <i class="fa fa-github"></i>GitHub</a></li>
    <li><a>Customers</a></li>
  </ul>
</aside>
      </div>

        <div class="column is-marginless is-paddingless" style="background-color: black; ">
        <webview id="wb" src="http://github.com" autosize v-bind:style="{ height: webviewHeight+'px', width: webviewWidth+'px'}"></webview>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setWebViewUrl () {
    }
  },
  data () {
    return {
      webviewHeight: screen.availHeight,
      webviewWidth: screen.availWidth,
      pages: [
        {
          url: 'http://google.com',
          title: 'Google'
        },
        {
          url: 'http://github.com',
          title: 'GitHub'
        }
      ]
    }
  }
}
</script>
