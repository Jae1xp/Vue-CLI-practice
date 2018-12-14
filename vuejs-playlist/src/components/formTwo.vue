<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form Two - Login</h3>
        <p>Enter your details to login</p>
      </div>
    </form-helper>
    <div slot="form-fields">
      <input type="text" placeholder="username" required />
      <input type="password" placeholder="password" required />
    </div>
    <div slot="form-controls">
      <button v-on:click="handleSubmit">Login</button>
    </div>
  </div>
</template>

<script>
import formHelper from './formHelper.vue'
export default {
  components: {
    'form-helper': formHelperVue
  },
  data() {
    return {

    }
  },
  methods() {
    
  }
}
</script>

