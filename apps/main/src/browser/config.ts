import { NativeImage } from 'electron';

declare const APP_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

export class Config {
  constructor(icon: NativeImage) {
    return {
      width: 800,
      height: 600,
      show: false,
      frame: false,
      autoHideMenuBar: true,
      titleBarStyle: 'hidden',
      backgroundColor: '#202020',
      icon: icon,

      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        nodeIntegrationInWorker: false,
        nodeIntegrationInSubFrames: false,
        preload: APP_WINDOW_PRELOAD_WEBPACK_ENTRY,
        sandbox: false,
      },
    };
  }
}
