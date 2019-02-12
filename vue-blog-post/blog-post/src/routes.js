import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
import singleBlog from './components/singleBlog';

export default [
  { path: '/', component: showBlogs},
  { path: '/add', component: addBlog},
  { path: '/blog/:id', component: singleBlog}
]

// Each object inside of the array is a route
// Exporting the array to Main.js, inside of the router variable