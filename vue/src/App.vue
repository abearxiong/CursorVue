<template>
  <div id="app">
    <div id="app">
      <!-- <div id="nav" hidden>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/testIpc">测试</router-link>
      </div> -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
};
</script>

<style>
body {
  /* margin: 0px; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
