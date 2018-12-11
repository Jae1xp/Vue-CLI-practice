import Vue from 'vue'
import App from './App.vue'
import Basketball from './Basketball.vue'

Vue.component('players', Basketball);

new Vue({
  el: '#app',
  render: h => h(App)
})
