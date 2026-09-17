// Service worker mínimo: no guarda nada en caché (siempre pide todo a
// internet), solo existe para que el navegador permita instalar esta
// plataforma como una app en el computador.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
