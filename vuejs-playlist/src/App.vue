<template>
  <div>
    <!-- <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer> -->
    <form-helper >
      <h2 slot="title">I am the slot title</h2>
      <p slot="paragraph">I am the slot paragraph</p>
    </form-helper>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Ninjas from './components/Ninjas';
import formHelperVue from './components/formHelper.vue';

export default {
  components: {
    // 'app-header': Header,
    // 'app-footer': Footer,
    // 'app-ninjas': Ninjas
    'form-helper': formHelperVue
  },
  data () {
    return {
      ninjas: [
        {name: 'Jae', specialty: 'Vue Components', show: false},
        {name: 'Alex', specialty: 'HTML Wizardry', show: false},
        {name: 'Krystyna', specialty: 'Click Events', show: false},
        {name: 'Patrick', specialty: 'Conditionals', show: false},
        {name: 'Alexa', specialty: 'Webpack', show: false},
        {name: 'Dan', specialty: 'Data Diggin', show: false}
      ],
      title: "Vue Ninjas"
    }
  },
  methods: {
    updateTitle: function (updatedTitle) {
      this.title = updatedTitle;
    }
  }
}
</script>

<style>

</style>
