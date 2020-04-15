// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const path = require('path');
require('./ipcMain');
let env = 'production';
// env = 'development';
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 加入这个参数即可
      webSecurity: false
    }
  });
  let developUrl = 'http://localhost:8080/';
  let productUrl = path.join(__dirname, '../dist/index.html');
  if (env === 'development') {
    mainWindow.loadURL(developUrl);
  } else {
    console.log('file',productUrl);
    mainWindow.loadFile(productUrl);
  }

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});
