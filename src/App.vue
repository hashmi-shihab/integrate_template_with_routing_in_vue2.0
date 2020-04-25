<template>
  <div id="app">
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #663366">
  <router-link class="navbar-brand" to="/">Home</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link active" to="/menu">Menu <span class="sr-only">(current)</span></router-link>
      <router-link class="nav-item nav-link active" to="/gallery">Gallery <span class="sr-only">(current)</span></router-link>
      <router-link class="nav-item nav-link active" to="/contact">Contact <span class="sr-only">(current)</span></router-link>
    </div>
  </div>
</nav>

<router-view></router-view>


<center><div class="footer" style="margin-top: 2px">
  <center>
    <h5 style="font-family:Bradley Hand ITC; "> Proprietor: Md. Hashmi Shihab ; <a href="mailto:hashmi.shihab@northsouth.edu"> Email Us</a></h5>
  </center>
  
</div>
</center>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Contacts from './pages/Contacts.vue'
import Gallarey from './pages/Gallarey.vue'
import Menu from './pages/Menu.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contacts },
  { path: '/gallery', component: Gallarey },
  { path: '/menu', component: Menu }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  router
}
</script>
