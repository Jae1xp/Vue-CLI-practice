<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" class="single-blog">
      <!-- Using RAINBOW as a randomly named directive -->
      <router-link v-bind:to="'/blog/' + blog.id"><h2>{{blog.title}}</h2></router-link>
      <article >{{blog.body}}</article>
    </div>
  </div>
  
</template>

<script>


export default {
  data () {
    return {
      blogs: []
    }
  },
  methods: {
  
  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data) {
      console.log(data);
      this.blogs = data.body.slice(0, 10) // gets the first 10 elements from the array of dummy API data
      console.log(this.blogs)
    })
  }
}
</script>

<style>

#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

</style>
