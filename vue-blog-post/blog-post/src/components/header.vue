<template>
  <nav>
    <ul>
      <li><router-link to="/" exact>All Blogs</router-link></li>
      <li><router-link to="/add" exact>Add a blog</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #fff;
    padding: 6px 8px;
    border-radius: 10px;
  }
  nav {
    background: #444;
    padding: 14px 0px;
    margin-bottom: 40px;
  }
  .router-link-active {
    background: #eee;
    color: #444;
  }
</style>