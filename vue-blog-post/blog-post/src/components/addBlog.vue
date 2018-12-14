<template>
  <div id="add-blog">
    <h1>Add a New Blog Post</h1>
    <form>
      <label>Blog Title:</label>
      <!-- By using blog.title in the model, you can better organize your code by having a BLOG object -->
      <!-- .lazy just makes whatever input you type, not appear until you tab out of the input field -->
      <input type="text" v-model.lazy="blog.title" required /> 
      <label>Blog Content:</label>
      <textarea v-model="blog.content"></textarea>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{blog.title}}</p>
      <p>Blog Content:</p>
      <p>{{blog.content}}</p>
    </div>
  </div>
</template>

<script>


export default {

  data () {
    return {
      blog: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    
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
</style>
