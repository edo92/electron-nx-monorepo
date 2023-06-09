import { ipcRenderer, contextBridge } from 'electron';
import type { API as IAPI } from '@electron-nx-monorepo/shared/types';

const API: IAPI = {
  greet: (message: unknown) => ipcRenderer.invoke('greet', message),
};

contextBridge.exposeInMainWorld('api', API);
