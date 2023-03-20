const { app, BrowserWindow } = require('electron');
const electron = require('electron');
const path = require('path');
const ipc = electron.ipcMain;

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'start-page.html'));
  mainWindow.webContents.openDevTools();

  ipc.on('start->search', function(event, message) {
    console.log(message);
    mainWindow.loadFile(path.join(__dirname, 'search-page.html'));
  })
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