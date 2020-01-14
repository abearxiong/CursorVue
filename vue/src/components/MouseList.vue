<template>
  <div class="mouses-list">
    <el-card>
      {{ config.MouseRootPath }} <br />
      <el-button @click="onGetRootPath">选择路径</el-button>
      <el-button @click="refreshMousesList">刷新鼠标</el-button>
      <el-button @click="removeMouse()">恢复样式</el-button>
    </el-card>
    <div class="mouse-list">
      <el-card
        class="mouse-list-card"
        v-for="mouse in mouses"
        :key="mouse.path"
      >
        <img :src="mouse.path + '\\cursor.png'" />
        {{ mouse.name }}
        <el-button @click="setMouse(mouse.path)">设置</el-button>
        <el-button @click="openFile(mouse.path)">打开</el-button>
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
      config: this.$store.state.config,
      commit: this.$store.commit,
      chooseRootPath: '',
      mouses: this.$store.state.config.Mouses
    };
  },
  computed: {
    getMouseRootPath() {
      return this.config.MouseRootPath;
    }
  },
  methods: {
    onGetRootPath() {
      let chooseRootPath = ipcRenderer.sendSync('getDirectory', 'openFile');
      console.log('chooseRootPath', chooseRootPath);
      this.commit('SET_MOUSE_ROOT_PATH', chooseRootPath[0]);
    },
    refreshMousesList() {
      // alert('没有写');
      let mouses = ipcRenderer.sendSync('getMouses', this.config.MouseRootPath);
      console.log('获取mouses', mouses);
      // this.mouses = mouses;
      this.commit('SET_MOUSES', mouses);
      this.mouses = this.$store.state.config.Mouses;
    },
    setMouse(value) {
      ipcRenderer.send('setMouse', value);
    },
    openFile(value) {
      ipcRenderer.send('openFile', value);
    },
    removeMouse() {
      ipcRenderer.send('removeMouse');
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
.mouse-list-card {
  height: 140px;
}
img {
  float: left;
  width: 100px;
  height: 100px;
}
</style>
