const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openFile(path) {
    ipcRenderer.send('app:open-file', path);
  },
});
