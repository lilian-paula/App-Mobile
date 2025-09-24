self.addEventListener("install", event => {
  event.waitUntil(
  caches.open("Troca de cor por horário-cache").then(cache => {
    return cache.addAll([
        "index.html",
        "manifest.json",
        "icone192.png",
        "icone512.png",
        "manha.jpg",
        "tarde.jpg",
        "noite.jpg",
        "madrugada.jpg"
    ]);
  })
 );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
  );
});