import { API } from '@electron-nx-monorepo/shared/types';

declare global {
  interface Window {
    api: API;
  }
}
