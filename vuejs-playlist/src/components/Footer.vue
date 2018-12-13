<template>
  <footer>
    <p>{{copyright}}</p>
  </footer>

</template>

<script>
import { bus } from '../main';
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      copyright: 'Copyright 2018 ERGO Interactive'
    }
  },
  created () {
    bus.$on('titleChanged', (data) => {
      this.title = data
    })
  }
}
</script>

<style scoped>
  footer {
    background: black;
    padding: 10px;
  }
  p {
    color: lightgreen;
    text-align: center;
  }
</style>
