import Vue from 'vue'
import App from './App.vue'

export const bus = new Vue (); // This is the EVENT BUS which will be used in both the Header and Footer

new Vue({
  el: '#app',
  render: h => h(App)
})
