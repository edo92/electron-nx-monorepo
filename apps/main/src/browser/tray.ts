import { Menu, BrowserWindow, Tray, app } from 'electron';

export class TrayMenu {
  private tray!: Electron.Tray;
  public toggle?: () => void;

  constructor(private readonly icon: Electron.NativeImage) {}

  private get browserWindow(): Electron.BrowserWindow {
    return BrowserWindow.getAllWindows()[0];
  }

  public close(): void {
    this.tray.destroy();
  }

  public showWindow(): void {
    this.browserWindow.show();
    this.browserWindow.setVisibleOnAllWorkspaces(true);
    this.browserWindow.focus();
    this.browserWindow.setVisibleOnAllWorkspaces(false);
  }

  public createTray(): void {
    this.tray = new Tray(this.icon.resize({ width: 16 }));
    this.tray.setIgnoreDoubleClickEvents(true);
    const rightClickMenu = this.rightClickMenu();

    this.tray.on('right-click', () => {
      this.tray.popUpContextMenu(rightClickMenu);
    });

    this.tray.on('click', () => {
      this.toggle && this.toggle();
    });
  }

  protected rightClickMenu(): Electron.Menu {
    const menu = [
      {
        label: 'Quit',
        click: () => {
          app.exit();
        },
      },
    ];
    return Menu.buildFromTemplate(menu);
  }
}
