import * as path from 'path';
import { BrowserWindow, nativeImage, app } from 'electron';
import { Config } from './config';
import { TrayMenu } from './tray';

declare const APP_WINDOW_WEBPACK_ENTRY: string;

export class Browser {
  private browserWindow!: Electron.BrowserWindow;
  private readonly tray: TrayMenu;

  constructor() {
    this.tray = new TrayMenu(Browser.nativeIcon);
  }

  public get isVisible(): boolean {
    return this.browserWindow.isVisible();
  }

  public static get nativeIcon(): Electron.NativeImage {
    const iconIco = path.resolve('assets/images/logo.png');
    return nativeImage.createFromPath(iconIco);
  }

  public static create(callback?: () => void): BrowserWindow {
    const browser = new Browser();
    const _browser = browser.createBrowserWindow();
    callback && callback();
    return _browser;
  }

  public createBrowserWindow(): BrowserWindow {
    if (this.browserWindow) return;

    const icon = Browser.nativeIcon;
    const browserWindow = new BrowserWindow(new Config(icon));
    browserWindow.loadURL(APP_WINDOW_WEBPACK_ENTRY);
    this.createTrayMenu();

    browserWindow.on('ready-to-show', () => browserWindow.show());
    browserWindow.on('close', (event) => {
      app.dock.hide();
      browserWindow.hide();
      event.preventDefault();
    });
    return browserWindow;
  }

  private createTrayMenu(): void {
    if (this.tray) return;
    this.tray.toggle = () => !this.isVisible && this.tray.showWindow();
    this.tray.createTray();
  }
}
