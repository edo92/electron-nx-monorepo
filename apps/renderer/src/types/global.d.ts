import { API } from './backend/preload';

declare global {
  interface Window {
    api: API;
  }
}

declare module '*.png' {
  const value: string;
  export default value;
}
