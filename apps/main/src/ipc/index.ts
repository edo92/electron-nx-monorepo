import { ipcMain } from 'electron';

export function registerIpc(): void {
  ipcMain.handle('greet', <T>(event: Electron.IpcMainEvent, args: T) => {
    console.log('Event-2: ', event);
    console.log('Args-2: ', args);
  });
}
