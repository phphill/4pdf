import {app, BrowserWindow} from 'electron';
let win;

app.on('ready', () => {
  win = new BrowserWindow({
    darkTheme: true,
  });
  app.setMaxListeners({});
  app.setBadgeCount(1);
});
