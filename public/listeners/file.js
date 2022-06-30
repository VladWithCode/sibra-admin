const { BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');

ipcMain.on('app:open-file', (e, path) => {
  shell.openExternal(path);
});

ipcMain.on('app:browse-template', (e, _p) => {
  shell.showItemInFolder(
    '\\\\SIBRA-SERVER\\compartido\\Plantillas de Recibo\\'
  );
});
