// Module to control application life.
import app from "app";
// Module to create native browser window.
import BrowserWindow from "browser-window";
// Report crashes to our server.
import crashReporter from "crash-reporter";
crashReporter.start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
let mainWindow = null;

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on("ready", () => {
  // Create the browser window.
  const Screen = require('screen');
  const size = Screen.getPrimaryDisplay().size;
  let mainWindow = new BrowserWindow({
      left: 0,
      top: 0,
      width: size.width,
      height: size.height,
      frame: false,
      show: true,
      transparent: true,
      resizable: false,
      // 'always-on-top': true
  });
  // mainWindow.setIgnoreMouseEvents(true);
  mainWindow.maximize();


  // and load the index.html of the app.
  mainWindow.loadUrl(`file://${__dirname}/index.html`);

  // Open the devtools.
  if (process.env.NODE_ENV !== "production") {
    mainWindow.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
