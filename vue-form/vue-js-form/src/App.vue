<template>
  <div>
   <div id="initial">
    <component v-bind:is="component"></component>
    <button id="hide-btn" @click="component = 'show-form'; hide();">Update</button>
   </div>
  </div>
</template>

<script>
import showForm from './components/showForm.vue';
import goToForm from './components/goToForm.vue';

export default {
  components: {
    'show-form': showForm,
    'go-to-form': goToForm
  },
  data () {
    return {
      component: 'go-to-form',
      isHidden: false
    }
  },
  methods: {
    hide: function() {
      var hide = document.getElementById('hide-btn').style.display = 'none';
    }
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
