const staticCacheName = 'site-static';
const assets = [
  '/',
  '/index.html',
  '/js/app.js',
  '/css/style.css',
  '/img/favicon.ico',
  '/img/icon/apple-touch-icon-192x192.png',
  '/img/icon/game-icon.png',
  'https://cmgt.hr.nl:8000/api/projects/',
  'https://cmgt.hr.nl:8000/api/projects/tags',
];

self.addEventListener('install', evt => {
    // console.log('service worker has been installed');
    evt.waitUntil(
      caches.open(staticCacheName).then(cache => {
        console.log('caching shell assets');
        cache.addAll(assets);
      })
    )
  });
  
self.addEventListener('activate', evt => {
  // console.log('service worker has been activated');
});

self.addEventListener('fetch', evt => {
  // console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cachRes => {
      return cachRes || fetch(evt.request);
    })
  )
});