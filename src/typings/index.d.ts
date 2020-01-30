export * from './AppConfig'

declare global {
  const PKG_NAME: string;
  const PKG_VERSION: string;

  interface Window {
    config: object;
  }
}
