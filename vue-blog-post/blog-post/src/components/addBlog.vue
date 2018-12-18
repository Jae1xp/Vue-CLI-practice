<template>
  <div id="add-blog">
    <h1>Add a New Blog Post</h1>
    <!-- This if will hide the form if it has been submitted. Refer to the submit div on line 30 -->
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <!-- By using blog.title in the model, you can better organize your code by having a BLOG object -->
      <!-- .lazy just makes whatever input you type, not appear until you tab out of the input field -->
      <input type="text" v-model.lazy="blog.title" required /> 
      <label>Blog Content:</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label>Cooking</label>
        <input type="checkbox" value="Cooking" v-model="blog.categories" />
        <label>Gaming</label>
        <input type="checkbox" value="Gaming" v-model="blog.categories" />
        <label>Sports</label>
        <input type="checkbox" value="Sports" v-model="blog.categories" />
        <label>Reading</label>
        <input type="checkbox" value="Reading" v-model="blog.categories" />
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>
      <!-- .prevent is the = to prevent default -->
      <button v-on:click.prevent="post">Add Post!</button> 
    </form>
    <!-- If the form has been submitted, this message will show -->
    <div v-if="!submitted">
      <h2>Thanks for adding your post!!</h2>
    </div>

    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{blog.title}}</p>
      <p>Blog Content:</p>
      <p>{{blog.content}}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>


export default {

  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Michelle Obama', 'J.K. Rowling', 'Randy Pausch', 'Kobe Bryant'],
      // tracks whether the form has been submitted or not
      submitted: false,
    }
  },
  methods: {
    // form to add a new blog post
    post: function() {
      // Can use $http only after installing vue resource
      // Check this URL to see why we require BODY and USER ID
      this.$http.post('http://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1,
      }).then(function(data) {
        console.log('this is the data', data);
        this.submitted = true;
      });
    }
  }
}
</script>

<style>
  #add-blog * {
    box-sizing: border-box;
  }
  #add-blog {
    margin: 20px auto;
    max-width: 500px;
  }
  label {
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"], textarea {
    display: block;
    width: 100%;
    padding: 8px;
  }
  #preview {
    padding: 10px 20px;
    border: 1px dotted #333;
    margin: 30px 0;
  }
  h3 {
    margin-top: 10px;
  }
  #checkboxes input {
    display: inline-block;
    margin-right: 10px;
  }
  #checkboxes label {
    display: inline-block;
  }
</style>
