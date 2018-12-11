<template>
  <ul>
    <li v-for="player in players">{{ player }}</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      players: ['Kobe', 'LeBron', 'Jordan','KD', 'Giannis', 'Steph', 'Kyrie', 'Spider', 'Dame']
    }
  },

}
</script>

<style>

</style>
