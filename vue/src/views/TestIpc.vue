<template>
  <div class="test-ipc-main">
    <h1>This is an TestIpcMain pages</h1>
    <button @click="setMouse">设置鼠标样式</button>
    <button @click="removeMouse">鼠标样式</button>
    <button @click="getMouses">获取所有鼠标样式</button>
    <button @click="getMouseConfig">获取鼠标是否包含</button>
    <button @click="getConfig">获取配置</button>
    <button @click="setConfig">设置配置</button>
  </div>
</template>
<script>
// import { ipcRenderer } from 'electron';
const ipcRenderer = window.electron.ipcRenderer;
if (ipcRenderer) {
  console.log('测试成功');
  // var ipcRenderer = window.require('electron').ipcRenderer;
  console.log(ipcRenderer.send('hello', 'hello you'));
  ipcRenderer.on('hello-reply', (event, arg) => {
    console.log('web注册消息', arg);
  });
}
console.log('发送消息');
// console.log(ipcRenderer.sendSync('hello', 'hello you'));
// ipcRenderer.on('hello-reply', (event, arg) => {
//   console.log(arg);
// });
export default {
  name: 'TestIpc',
  methods: {
    setMouse() {
      ipcRenderer.send('setMouse', 'F:\\GitHub\\cursorvue\\mouse\\Apostle');
    },
    removeMouse() {
      ipcRenderer.send('removeMouse');
    },
    getMouses() {
      let getMousesData = ipcRenderer.sendSync(
        'getMouses',
        'F:\\GitHub\\cursorvue\\mouse\\'
      );
      console.log('GetMouseData', getMousesData); // TODO: 对Mouse的数据进行处理
    },
    getMouseConfig() {
      let getMouseConfigData = ipcRenderer.sendSync(
        'getMouseConfig',
        'F:\\GitHub\\cursorvue\\mouse\\Apostle'
      );
      console.log('GetMouseConfigData', getMouseConfigData);
    },
    getConfig() {
      const config = ipcRenderer.sendSync('getConfig');
      console.log(config, typeof config);
    },
    setConfig() {
      let config = { mouseRootPath: '路径' };
      const result = ipcRenderer.sendSync('setConfig', JSON.stringify(config));
      console.log(result);
    }
  }
};
</script>
