require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('my-header', require('./components/MyHeader.vue'));
Vue.component('my-footer', require('./components/MyFooter.vue'));


let Home = require('./components/Home.vue');
let About = require('./components/About.vue');

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About }
]

const router = new VueRouter({
	// mode: 'history',
  	routes // short for `routes: routes`
})


const app = new Vue({
    el: '#app',
    router
});
