import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// custom directives
// Vue.directive takes a couple of arguments. In our example it will be rainbow. 2nd argument is an object
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
  // fires when the directive is bound. this is a lifecycle hook. it takes 3 arguments
  // el refers to the element itself, binding is the name you would give the v-bind="" <-- 
    el.style.color = "#" + Math.random().toString().slice(2, 8) // random hash color that gives us a 6 digit #
  }
});


new Vue({
  el: '#app',
  render: h => h(App)
})
