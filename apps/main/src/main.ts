import { app } from 'electron';
import { Browser } from './browser';
import { registerIpc } from './ipc';

app.on('ready', () => {
  Browser.create(() => registerIpc());
});
