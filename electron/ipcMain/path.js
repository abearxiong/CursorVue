const { dialog, ipcMain } = require('electron');

ipcMain.on('getDirectory', event => {
  let directory = dialog.showOpenDialogSync({
    title: '选择路径',
    properties: ['createDirectory', 'openDirectory']
  });
  event.returnValue = directory;
});
