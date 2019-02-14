<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" class="single-blog">
      <!-- Using RAINBOW as a randomly named directive -->
      <router-link v-bind:to="'/blog/' + blog.id"><h2>{{blog.title}}</h2></router-link>
      <article >{{blog.content}}</article>
      <p>Author: {{blog.author}}</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
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
    this.$http.get('https://blog-project-305a0.firebaseio.com/posts.json').then(function(data) {
      return data.json();
      // this.blogs = data.body.slice(0, 10) gets the first 10 elements from the array of dummy API data
    }).then(function(data){
      let blogsArray = [];
      for (let key in data) {
        // console.log(data[key]);
        data[key].id = key
        blogsArray.push(data[key]);
      }
      // console.log(data);
      console.log(blogsArray);
      this.blogs = blogsArray;
    })
  }
}
</script>

<style>

#show-blogs {
  max-width: 800px;
  margin: 0px auto;
  padding: 0px 100px;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

</style>
