self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("horario-cache").then(cache => {
      return cache.addAll(["index.html", "manifest.json", "icono192.png", "icono512.png"]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});