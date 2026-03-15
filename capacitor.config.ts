import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.yourco.app',
  appName: 'YourApp',
  webDir: 'out'      // important
  // no server.url here
};
export default config;