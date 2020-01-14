<template>
  <div class="home">
    <MouseList />
  </div>
</template>

<script>
// @ is an alias to /src
import MouseList from '../components/MouseList.vue';
export default {
  name: 'home',
  components: {
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
