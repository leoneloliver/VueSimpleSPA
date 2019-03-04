import Vue from './vue.js'
Vue.use(VueRouter)

// import components
import {
  Navbar
} from './components/navbar.js'
import {
  About
} from './components/about.js'
import {
  Home
} from './components/home.js'


// import templates
import {
  MainTemplate
} from './templates/main-template.js'
import {
  HomeTemplate
} from './templates/home-template.js'
import {
  AboutTemplate
} from './templates/about-template.js'

// routers
const router = new VueRouter({
  routes: [{
    path: '/about',
    component: About,
    name: "About Us Page"
  },
  {
    path: '/',
    component: Home,
    name: "Home"
  }
  ]
})

// init my app
new Vue({
  el: '#app', // This should be the same as your <div id=""> from earlier.
  components: {
    'navbar': Navbar
  },
  router,
  template: MainTemplate
})


