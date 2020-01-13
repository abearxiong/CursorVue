import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const ipcRenderer = window.electron.ipcRenderer;
const configString = ipcRenderer.sendSync('getConfig');
const config = JSON.parse(configString);
// console.log('获取配置', config);

export default new Vuex.Store({
  state: {
    config
  },
  mutations: {},
  actions: {}
});
