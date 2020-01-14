import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const ipcRenderer = window.electron.ipcRenderer;
const configString = ipcRenderer.sendSync('getConfig');

let config = null;
try {
  config = JSON.parse(configString);
} catch (e) {
  config = { MouseRootPath: '', Mouses: [] };
}
// console.log('获取配置', config);
const state = {
  config
};
function saveConfig(config) {
  ipcRenderer.send('setConfig', JSON.stringify(config));
}
export default new Vuex.Store({
  state,
  mutations: {
    SET_MOUSE_ROOT_PATH(state, value) {
      console.log('config', value, typeof value);
      state.config.MouseRootPath = value;
      saveConfig(state.config);
    },
    SET_MOUSES(state, value) {
      // let OriginMouses = state.config.Mouses; // 保存之前有的
      let OriginMouses = [];
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
      // console.log('Mouses', setMouses);
      saveConfig(state.config);
    }
  },
  actions: {}
});
