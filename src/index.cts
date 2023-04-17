const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1600,
    height: 1200,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs')
    }
  })

  win.loadFile('./front/home.html')
  win.webContents.openDevTools();

  ipc.on('toSearch', function(event, pagecontent, pagetitle) {
    async function loadSearchFile() {
      win.loadFile(path.join(__dirname, 'front/search.html'));
      await new Promise(resolve => setTimeout(resolve, 1000));
      win.webContents.send('toSearch: content article received', pagecontent);
      win.webContents.send('toSearch: title received', pagetitle);
    }
    loadSearchFile();
  });

  ipc.on('toHome', function(event) {
    win.loadFile(path.join(__dirname, 'front/home.html'));
  });

  ipc.on('toLiked', function(event) {
    win.loadFile(path.join(__dirname, 'front/liked.html'));
  });

  ipc.on('toLibrary', function(event) {
    win.loadFile(path.join(__dirname, 'front/library.html'));
  });
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
