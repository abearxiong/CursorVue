<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" hidden />
    <HelloWorld msg="Welcome to Your Vue.js App" hidden />
    <About hidden />

    <MouseList />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import About from '@/views/About.vue';
import MouseList from '@/components/MouseList.vue';
export default {
  name: 'home',
  components: {
    HelloWorld,
    About,
    MouseList
  },
  data() {
    console.log('home 配置', this.$store.state);
    return {
      state: this.$store.state,
      commit: this.$store.commit,
      dispatch: this.$store.dispatch,
      config: this.$store.state.config
    };
  }
};
</script>
