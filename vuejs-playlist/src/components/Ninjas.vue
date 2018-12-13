<template>
  <div id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
        <h2>{{ninja.name}}</h2>
        <h3 v-show="ninja.show">{{ninja.specialty}}</h3>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  props: { // This Method of is called VALIDATION. Receiving props as an OBJECT instead of an array, having ninjas as another object, and setting the validiation inside of it. 
    ninjas: {
      type: Array,
      required: true
    }
  },
  // props: ['ninjas'] More simple way of receiving data but doesn't include validation
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
  #ninjas {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0px;
  }
  li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #333;
  }
</style>
