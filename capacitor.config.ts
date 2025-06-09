
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lovable.avideo.mobile',
  appName: 'avideo-mobile-connect',
  webDir: 'dist',
  server: {
    url: 'https://1c2f3bf7-3419-41df-8f22-aabc03b7db9c.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#1f2937",
      showSpinner: false
    }
  }
};

export default config;
