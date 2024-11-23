import { defaultCache } from '@serwist/sw';
import { Serwist } from 'serwist';

// Add service worker installation logic
self.addEventListener('install', () => {
  self.skipWaiting(); // Activate the new service worker immediately
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim()); // Take control of all pages immediately
});

// Initialize Serwist
const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST || [], // Pre-cache manifest from the build process
  runtimeCaching: [
    ...defaultCache, // Default caching rules
    {
      urlPattern: /^https?.*/, // Match all HTTP(s) requests
      handler: 'NetworkFirst', // Use network first, fallback to cache
      options: {
        cacheName: 'runtime-cache', // Custom cache name
        expiration: {
          maxEntries: 200, // Limit the number of entries
          maxAgeSeconds: 24 * 60 * 60, // Cache for 24 hours
        },
      },
    },
  ],
});

// Attach event listeners for the service worker
serwist.addEventListeners();
