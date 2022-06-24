const { BrowserWindow, ipcMain } = require('electron');

ipcMain.on('app:open-file', (e, path) => {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
    },
  });

  win.loadURL(path);
});
