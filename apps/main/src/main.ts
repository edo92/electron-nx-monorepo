import { app } from 'electron';
import { Browser } from './browser';

app.on('ready', () => {
  Browser.create();
});
