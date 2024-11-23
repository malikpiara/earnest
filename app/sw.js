import { defaultCache } from '@serwist/next/browser'
import { installSerwist } from '@serwist/sw'

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

installSerwist({
  precacheEntries: self.__SW_MANIFEST,
  runtimeCaching: [
    ...defaultCache,
    {
      urlPattern: /^https?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "earnest-cache",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
      },
    },
  ],
})