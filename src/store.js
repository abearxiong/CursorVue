import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const ipcRenderer = window.electron.ipcRenderer;
const configString = ipcRenderer.sendSync('getConfig');
const config = JSON.parse(configString);
// console.log('获取配置', config);
const state = {
  config
};
export default new Vuex.Store({
  state,
  mutations: {
    SET_MOUSE_ROOT_PATH(state, value) {
      console.log('config', value, typeof value);
      state.config.MouseRootPath = value;
    },
    SET_MOUSES(state, value) {
      let OriginMouses = state.config.Mouses;
      value.map(mouse => {
        OriginMouses.push({
          name: mouse,
          path: state.config.MouseRootPath + '\\' + mouse
        });
        return mouse;
      });
      let obj = {};
      let setMouses = [];
      for (let m of OriginMouses) {
        if (!obj[m.path]) {
          obj[m.path] = true;
          setMouses.push(m);
        }
      }
      state.config.Mouses = setMouses;
      console.log('Mouses', setMouses);
    }
  },
  actions: {}
});
