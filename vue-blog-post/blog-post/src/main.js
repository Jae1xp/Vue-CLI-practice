import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

// This registers the routes from the routes file
const router = new VueRouter({
  routes: Routes 
});

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
  render: h => h(App),
  router: router // Must be done in order to use the router in this vue instance. You're setting it equal to the variable name you gave above
})
