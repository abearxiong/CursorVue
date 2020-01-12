// In main process.
const { ipcMain } = require('electron');
const { execFile } = require('child_process');
const path = require('path');
const exePath = path.join(__dirname, '../exe');
// const child = execFile('node', ['--version'], (error, stdout, stderr) => {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });

ipcMain.on('setMouse', (event, arg) => {
  console.log(arg); // prints "ping"
  //   event.sender.send('hello-reply', 'pong');
  execFile(exePath + '/Cursor.exe', ['set', arg], (err, stdout, stderr) => {
    if (err) {
      throw err;
    }
    console.log(stdout, stderr);
  });
});
ipcMain.on('removeMouse', (event, arg) => {
  console.log(arg);
  execFile(exePath + '/Cursor.exe', ['remove'], (err, stdout, stderr) => {
    if (err) {
      throw err;
    }
    console.log(stdout, stderr);
  });
});
// console.log('运行hello');
module.exports = {
  hello: 'hello test'
};
