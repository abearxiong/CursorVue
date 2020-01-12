// In main process.
const { ipcMain } = require('electron');
ipcMain.on('hello', (event, arg) => {
  console.log(arg); // prints "ping"
  event.sender.send('hello-reply', 'pong');
});
// console.log('运行hello');
module.exports = {
  hello: 'hello test'
};
