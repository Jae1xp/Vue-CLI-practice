<template>
  <div>
    <component v-bind:is="component"></component>
  </div>
</template>

<script>
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';
export default {
  components: {
    // 'app-header': Header,
    // 'app-footer': Footer,
    // 'app-ninjas': Ninjas
    'form-one': formOne,
    'form-two': formTwo
  },
  data () {
    return {
      component: 'form-one'
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
