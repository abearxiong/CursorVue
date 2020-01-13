// In main process.
const { ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const configPath = path.join(__dirname, '../config.json');
// 读取配置
ipcMain.on('getConfig', (event, arg) => {
  let cf = fs.readFileSync(configPath);
  console.log(arg, configPath, '内容', cf, ' end');
  event.returnValue = cf.toString();
});
// 写入配置
ipcMain.on('setConfig', (event, arg) => {
  console.log(arg);
  try {
    fs.writeFileSync(configPath, arg);
    event.returnValue = true;
  } catch (e) {
    event.returnValue = false;
  }
});
// 读取内容
ipcMain.on('getMouses', (event, arg) => {
  console.log(arg);
  let MouseRootPath = arg;
  if (fs.existsSync(MouseRootPath)) {
    event.returnValue = fs.readdirSync(MouseRootPath);
  }
  event.returnValue = [];
});
ipcMain.on('getMouseConfig', (event, arg) => {
  // 一个文件需要的内容包括
  let MousePath = arg;
  let filenames = [
    'Appstarting',
    'Arrow',
    'Crosshair',
    'cursor',
    'Hand',
    'Help',
    'IBeam',
    'NO',
    'NWPen',
    'Person',
    'Pin',
    'SizeAll',
    'SizeNESW',
    'SizeNS',
    'SizeNWSE',
    'SizeWE',
    'UpArrow',
    'Wait'
  ];
  let allfiles = fs.readdirSync(MousePath);
  let havefiles = allfiles.map(onefile => {
    return path.basename(onefile, path.extname(onefile));
  });
  console.log('havefiles', havefiles);
  for (let filename of filenames) {
    if (havefiles.includes(filename)) {
      continue;
    } else {
      event.returnValue = `filename: ${filename} is not have`;
    }
  }
  event.returnValue = 'true';
});
// ipcMain.on('refreshMouse',event => {
//   let MouseRootPath = arg;

// })
// console.log('运行hello');
module.exports = {
  config: 'config set'
};
