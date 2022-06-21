const electron = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

const { app, BrowserWindow } = electron;

let mainWindow;
const relativePath = app.getAppPath();

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1366,
    height: 768,
    backgroundColor: '#fff',
    minWidth: 900,
    minHeight: 680,
    webPreferences: {
      webSecurity: false,
    },
  });
  mainWindow.loadURL(
    isDev ? 'http://localhost:3000' : path.join(relativePath, '../index.html')
  );
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
  }
  mainWindow.webContents.openDevTools();

  mainWindow.setMenu(null);
  mainWindow.on('closed', () => (mainWindow = null));

  mainWindow.webContents.session.webRequest.onBeforeSendHeaders(
    (details, callback) => {
      callback({
        requestHeaders: {
          Origin: 'http://localhost:3000',
          ...details.requestHeaders,
        },
      });
    }
  );

  mainWindow.webContents.session.webRequest.onHeadersReceived(
    (details, callback) => {
      callback({
        responseHeaders: {
          'Access-Control-Allow-Origin': [
            'http://main.sibralan.com',
            'http://192.168.1.128:3000',
            'http://localhost:3000',
          ],
          ...details.responseHeaders,
        },
      });
    }
  );
}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
