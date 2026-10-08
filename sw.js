/* Service worker mínimo: deja la app instalable pero NO guarda nada en caché,
   así siempre se ve la versión más nueva y los datos en vivo. */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request))});
