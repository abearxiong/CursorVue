<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" hidden />
    <HelloWorld msg="Welcome to Your Vue.js App" hidden />
    <About hidden />
    <TestIpc />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import About from '@/views/About.vue';
import TestIpc from '@/components/TestIpc.vue';
export default {
  name: 'home',
  components: {
    HelloWorld,
    About,
    TestIpc
  }
};
</script>
