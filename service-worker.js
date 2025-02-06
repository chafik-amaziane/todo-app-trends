const CACHE_NAME = "to-do-pwa-cache-v1";
const FILES_TO_CACHE = [
  "/todo-app-trends/",
  "/todo-app-trends/index.html",
  "/todo-app-trends/style.css",
  "/todo-app-trends/app.js",
  "/todo-app-trends/manifest.json",
  "/todo-app-trends/icons/icon-128.png",
  "/todo-app-trends/icons/icon-512.png",
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
