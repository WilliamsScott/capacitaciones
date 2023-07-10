self.addEventListener('install', function(event) {
    // Instalar de inmediato
    if (self.skipWaiting) { self.skipWaiting(); }
      event.waitUntil(
        caches.open('cache01').then(function(cache) {
          return cache.addAll([
            './',
      'index.html',
      '3784896.png',
          ]);
        })
      );
    });
    // Cache, falling back to network
    self.addEventListener('fetch', function(event) {
      event.respondWith(
        caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
        })
      );
    });
     // Elimina archivos de cache viejos
      var cacheWhitelist = ['cache01'];
        caches.keys().then(function(cacheNames) {
          return Promise.all(
            cacheNames.map(function(cacheName) {
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
              }
            })
          );
        });
        caches.keys().then(function(cacheKeys) {
        // Muestra en la consola la cache instalada 
        console.log('Versión SW: '+cacheKeys);
    });  

    importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': '548061389725' // 4. Get Firebase Configuration
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]