<template>
  <div id="show-form">
    <h1>Add Information</h1>
    <form>
      <label>Username:</label>
      <input type="text" v-model.lazy="form.title" required/>
      <label>Favorite Kind of Foods</label>
      <select v-model="form.food">
        <option value="">Korean</option>
        <option value="">Italian</option>
        <option value="">Mexican</option>
        <option value="">American</option>
        <option value="">Chinese</option>
      </select>
      <label>Content:</label>
      <textarea v-model.lazy="form.content"></textarea>
      <br>
      <button v-on:click.prevent="post">Submit</button>
    </form>
    <div id="preview">
      <h3>Preview Information</h3>
      <p>Username: {{ form.title }}</p>
      <p>Content:</p>
      <p>{{ form.content }}</p>
    </div>
    <button>Submit</button>
  </div>
  
</template>

<script>


export default {
  data () {
    return {
      form: {
        title: "",
        content: "",
        food: ""
      } 
    }
  },
  methods: {
    post: function () {
      
    }
  }
}
</script>

<style>

#show-form {
  max-width: 500px;
  margin: 20px auto;
  box-sizing: border-box;
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
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}

</style>
