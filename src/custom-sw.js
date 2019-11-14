/* eslint-disable no-undef */

console.log("hello from custom-sw.js");
const CACHE_NAME = "assets-cache";
const DYNAMIC_NAME = "dynamic-cache";
/* global workbox */
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  // Force development builds
  workbox.setConfig({ debug: true });

  // Force production builds
  // workbox.setConfig({ debug: false });

  //  /* injection point for manifest files.  */
  //  workbox.precaching.precacheAndRoute([]);

  // See https://developers.google.com/web/tools/workbox/guides/configure-workbox
  // workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

  /* custom cache rules*/
  workbox.routing.registerNavigationRoute("/index.html", {
    blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/]
  });

  /* get urls cache */
  workbox.routing.registerRoute(
    new RegExp("https://picsum.photos/*"),
    new workbox.strategies.NetworkFirst({
      cacheName: DYNAMIC_NAME
    })
  );
  workbox.routing.registerRoute(
    new RegExp("https://api.mapbox.com/*"),
    new workbox.strategies.NetworkFirst({
      cacheName: DYNAMIC_NAME
    })
  );
  // workbox.routing.registerRoute(
  //     /\.(?:png|jpg|jpeg|svg|gif)$/,
  //     new workbox.strategies.CacheFirst({
  //       cacheName: CACHE_NAME,
  //     })
  //   );
  /* static resources cache */
  workbox.routing.registerRoute(
    new RegExp("/static/"),
    // Use cache but update in the background.
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: CACHE_NAME
    })
  );

  // workbox.routing.registerRoute(
  //     /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  //     new workbox.strategies.CacheFirst({
  //       cacheName: 'images',
  //       plugins: [
  //         new workbox.expiration.Plugin({
  //           maxEntries: 60,
  //           maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
  //         }),
  //       ],
  //     })
  //   );

  //   workbox.routing.registerRoute(
  //     /\.(?:js|css)$/,
  //     new workbox.strategies.StaleWhileRevalidate({
  //       cacheName: 'static-resources',
  //     })
  //   );

  // self.addEventListener("install", event => {
  //     event.waitUntil(
  //       caches.open(CACHE_NAME).then(cache => {
  //         return cache.addAll(targetsToCache);
  //       })
  //     );
  //   });

  self.addEventListener("install", event => {
    console.log("install");
    event.waitUntil(self.skipWaiting());
  });
  self.addEventListener("activate", event => {
    console.log("activate");
    event.waitUntil(self.clients.claim());
  });
  // self.addEventListener("fetch", event => {
  //     console.log('fetching', event);
  //     event.respondWith(
  //       caches.open(CACHE_NAME).then(cache => {
  //         // first fire a network request
  //         fetch(event.request)
  //           .then(response => {
  //             // Cache the response
  //             cache.put(event.request, response.clone());
  //             // Return the original response to the page
  //             return response;
  //           })
  //           .catch(() => {
  //             // if reques fails then look in cache
  //             return caches.match(event.request);
  //           });
  //       })
  //     );
  //   });

  // We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
  workbox.precaching.precacheAndRoute(self.__precacheManifest);

  // app-shell
  // workbox.routing.registerRoute("/", workbox.strategies.NetworkFirst()());
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}


