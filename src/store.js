import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// const ipcRenderer = window.electron.ipcRenderer;
// const config = ipcRenderer.sendSync('getConfig');
// console.log('获取配置', config);
// const mouseRootPath = config.mousePath || '';
// const mouses = config.mouses || [];

export default new Vuex.Store({
  state: {
    // mouseRootPath,
    // mouses
  },
  mutations: {},
  actions: {}
});
