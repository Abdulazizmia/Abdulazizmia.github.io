'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9ee8d4ba06f8d37e1637259603f9a4c7",
"assets/AssetManifest.bin.json": "f9807b39b54e09b9b8a92ded54d0b0e5",
"assets/AssetManifest.json": "86ec27d5ff01a45a470d710abe0a0413",
"assets/assets/aboutus.json": "6b895afdd13a1f7f78211fac84381c3a",
"assets/assets/badge.json": "a8eba31084692a10d1b6801139f60b18",
"assets/assets/cross.gif": "ebc993c713ae69e41aee403f2ed1c909",
"assets/assets/favorite.json": "f30a2dae723b3d4809c0c639230b9bae",
"assets/assets/forgot.json": "90f3aab5b9ef693a6a8163211a3da82a",
"assets/assets/home.json": "62250f8bf4c0bbffcf74aebbe0b2e4ec",
"assets/assets/icons/about.png": "7de8d3b6a51f913e1f73638af96f4dea",
"assets/assets/icons/android12splash.png": "dec738ce0c44f0cef75beda9506d8023",
"assets/assets/icons/bdflug.png": "0831590f46b71b790d1a7ce2ad40fd06",
"assets/assets/icons/edit.png": "d314dcab4d765f4389012099603bd34b",
"assets/assets/icons/housetype.png": "d7b645f6ace8b6ea02db18cc104370ac",
"assets/assets/icons/icon.png": "d1c20099c45bef8c2a68a53f816c336c",
"assets/assets/icons/locationcion.png": "9911bf0ecf6098eeb3b8f6ed45557bcf",
"assets/assets/icons/name.png": "8311657cb96c0423456f6921a48ae675",
"assets/assets/icons/post-01.png": "281b9eb7700ac82960b497a9fde8a36e",
"assets/assets/icons/privacy.png": "f55a26f6ec4205de57a26ebec91cd577",
"assets/assets/icons/profile.png": "40ce84941c6c9f07fcb14a572816e750",
"assets/assets/icons/splash.png": "c2dc621f3e10d18f118122c604983378",
"assets/assets/login.json": "f65a9e86e086ebc87fe7510c4d2e0822",
"assets/assets/logoicon.png": "d1c20099c45bef8c2a68a53f816c336c",
"assets/assets/profilename.json": "10f4072ea2d7797000e21ed013b1d613",
"assets/assets/search.json": "6911d40324d84079a0d7a331b743a125",
"assets/assets/success.gif": "e6cccf3df8125e06cc958e66ba13e23c",
"assets/assets/warning.gif": "d2cb08c41c3a81e62437f460efee3466",
"assets/FontManifest.json": "d951ee4fc7b61f4c2d89592b92fd59bb",
"assets/fonts/MaterialIcons-Regular.otf": "30ee82f2dac2a979042ac734ec69d04d",
"assets/fonts/Noirrit-Regular.ttf": "b048c8a2a63a8f6bc1bc749796750fad",
"assets/fonts/Noirrit-SemiBold.ttf": "d457e3159193d7d533a2f9e14ce8f795",
"assets/NOTICES": "8795b7b923c940e0386836ac608b47bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f81871b4dee354769e962d1b91b9f6e1",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "41d3346054ba1baeeb5c66ed400dfe14",
"/": "41d3346054ba1baeeb5c66ed400dfe14",
"main.dart.js": "ba6ba689fde2f85f85754fd81126c289",
"manifest.json": "4f7e23e31d353aec200325e0462f00d9",
"version.json": "c10a2afadf8e7014c0e14ac2a2fcd217"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
