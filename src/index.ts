const { app, BrowserWindow } = require('electron');
const electron = require('electron');
const path = require('path');
const ipc = electron.ipcMain;

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 1200,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'home/home.html'));
  mainWindow.webContents.openDevTools();

  ipc.on('toSearch', function(event, pagecontent, pagetitle) {
    async function loadSearchFile() {
      mainWindow.loadFile(path.join(__dirname, 'search/search.html'));
      await new Promise(resolve => setTimeout(resolve, 1000));
      mainWindow.webContents.send('toSearch: content article received', pagecontent);
      mainWindow.webContents.send('toSearch: title received', pagetitle);
    }
    loadSearchFile();
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});