const { ipcMain, shell, BrowserWindow } = require('electron');

ipcMain.on('app:open-file', (e, path) => {
  if (path.includes('localhost')) {
    const w = new BrowserWindow({});

    w.loadURL(path);
  } else {
    shell.openExternal(path);
  }
});

ipcMain.on('app:browse-template', (e, _p) => {
  shell.showItemInFolder(
    '\\\\SIBRA-SERVER\\compartido\\Plantillas de Recibo\\'
  );
});
