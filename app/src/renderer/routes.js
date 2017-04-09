export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/wb',
    name: 'webbrowser-page',
    component: require('components/WebBrowserView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
