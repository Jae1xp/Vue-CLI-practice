<template>
  <footer>
    <p>{{copyright}}</p>
  </footer>

</template>

<script>
export default {
  data () {
    return {
      copyright: 'Copyright 2018 ERGO Interactive'
    }
  },

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
