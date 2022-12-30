const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openFile(path) {
    ipcRenderer.send('app:open-file', path);
  },
  browseTemplate(path) {
    ipcRenderer.send('app:browse-template', path);
  },
});
