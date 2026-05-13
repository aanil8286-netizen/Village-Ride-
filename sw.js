const CACHE_NAME = 'village-ride-v2'; // ఇక్కడ పేరు మార్చాను

self.addEventListener('install', (event) => {
  self.skipWaiting(); // పాత దాన్ని వెంటనే తీసేస్తుంది
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => {
      for (let name of names) caches.delete(name); // పాత క్యాచీ అంతా క్లీన్ చేస్తుంది
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request)); // డైరెక్ట్ నెట్ నుండి తీసుకుంటుంది
});
