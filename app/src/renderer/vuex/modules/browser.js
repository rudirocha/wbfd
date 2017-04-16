import * as types from '../mutation-types'

const state = {
  pages: [
    {
      title: 'Google.com',
      link: 'http://google.com'
    },
    {
      title: 'Github.com',
      link: 'http://github.com'
    }
  ]
}

const mutations = {
  [types.ADD_BROWSER_PAGE] (state, page) {
    state.pages.push(page)
  }
}

export default {
  state,
  mutations
}
