import { ipcRenderer, contextBridge } from 'electron';

const API = {
  greet: (message: unknown) => ipcRenderer.invoke('greet', message),
};

contextBridge.exposeInMainWorld('api', API);

export type API = typeof API;
