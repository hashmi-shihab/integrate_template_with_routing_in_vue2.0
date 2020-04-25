import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
/*import Contacts from './Contacts.vue'
import Home from './Home.vue'*/

Vue.use(VueRouter)

/*const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contacts }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})*/

new Vue({
  el: '#app',
  /*router,*/
  render: h => h(App)
})
