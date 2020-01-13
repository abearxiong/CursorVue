<template>
  <div class="mouses-list">
    <el-card v-if="!haveConfig">
      <el-button @click="chooseRootPath"> 选择路径 </el-button>
    </el-card>
    <el-card v-else>
      {{ config.MouseRootPath }}
      <el-button @click="rechangeRootPath">重选路径</el-button>
      <el-button @click="refreshMousesList">刷新鼠标</el-button>
    </el-card>
    <div v-if="config.Mouses" class="mouse-list">
      <el-card v-for="mouse in config.Mouses" :key="mouse.name">
        {{ mouse.name }}
        <el-button @click="setMouse(mouse.name)">设置内容</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
const ipcRenderer = window.electron.ipcRenderer;
export default {
  name: 'MouseList',
  props: {
    msg: String
  },
  data() {
    return {
      state: this.$store.state,
      config: this.$store.state.config
    };
  },
  computed: {
    haveConfig() {
      return this.config.MouseRootPath;
    },
    getMouseRootPath() {
      return this.config.MouseRootPath;
    }
  },
  methods: {
    chooseRootPath() {
      alert('no write');
    },
    rechangeRootPath() {
      alert('没有写');
      // this.commit
    },
    refreshMousesList() {
      alert('没有写');
      // this.commit
    },
    setMouse(value) {
      ipcRenderer.send('setMouse', this.getMouseRootPath + '\\' + value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
