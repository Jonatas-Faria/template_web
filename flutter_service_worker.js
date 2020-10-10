'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "19ada475a54e055254dc1d8f538ad79f",
".git/description": "4f6bfb3f1ea7b0ad4e982cd8c370f0e4",
".git/FETCH_HEAD": "8d50c3ed5d62321f5f7b7c73393a6088",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "77f4e356b03b793791c135e176ea66e3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1cc5c22e17e4e7a3ba183d40ab172d1d",
".git/logs/refs/heads/main": "1cc5c22e17e4e7a3ba183d40ab172d1d",
".git/logs/refs/remotes/origin/main": "64da8cf69003c65521cd25fa305d7f7f",
".git/objects/03/5c757584c3782b55293d14ca547631171a8bf4": "fcea2ebef63f38a4a871679fcd7855be",
".git/objects/04/d01d324730e003ec87b4324772b436440469e1": "8c3c9551dbbd32c4fff3799beb21a11f",
".git/objects/11/a0e298ecbd02a34e8948d8f5b8db8cb794724f": "a71d3191a96ee96a79b410f1ade1c83b",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/18/da00f89be1c5c1ea509c119985f98fa953c68f": "a338e66193a54750a0606e5f7da87f24",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/30/e5e97f53fb0451af5d5fd3388a1d4c8ad68071": "b13713b4e63b13a1d76c456038c4f46f",
".git/objects/42/234b60b2dc3ff98140f215f4d0eaf1c25f6b9d": "1974da88223b24d61dd7467a6c5a20d5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b574b3f1792c6938534c5ad197c7e1a3343b2f": "9c2de8ec1eb59d84fe69f3260d438d58",
".git/objects/4e/b82564b92663de2a1990e773f9434233978359": "640a6782557fbfefb90f4781ecf36a51",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/67/fbe35eb9c5effe721acbf30b0fd697ada4991c": "7c7cd5de1f61915c301c7f04f23c67d8",
".git/objects/72/fab0b121d5a51d5d4fa70580aaa79d0448351d": "ba67a736b7ed51b54017db7d3f93b593",
".git/objects/75/d66d36ba3f6edd793a46d05341bb13a0231520": "d54ab2a8508d2a800817c5d91e9bbfde",
".git/objects/88/56b0da3bf5e3a451c1ba4a9efae2f4832dbc9e": "8b09eb4aa2ede47d32af28578c1fe44d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a2/eebbabe14ae1b0ce23fd41fb40f6f0b0e2ed48": "fd89cb035585c67db315a7c97272c8c4",
".git/objects/a3/3c1c83ca6daf9c35b0b8244d11d7f7424f0929": "a074d12fd04313ca23d172fd6c38aa85",
".git/objects/b1/bf04d27c40ef22f2fc9c963e0ccd9f3792324f": "baa480e819fb7e9c35b06ba98531be53",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/0f2004059b9b9201e474ecd2f13bd52838e1bc": "a60e7eaef029c1ece2cfcbc61a2553ca",
".git/objects/c7/01ee46b4ba83b4968291178590db132256aaba": "585196b66c502de795cec6a8c7ca93c1",
".git/objects/d2/97813b4de6db9cb7f231ec45e1d00f479421bd": "9ea54de8dc234318dffd3994e6d62117",
".git/objects/dc/43630abe3d42122befe0ea002af1b11bbc97eb": "aeb08ac4c7730cf17829138d2d1f1d34",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/f0/61b5a1dee9cf1b141fc46db164c94adcfd6df0": "900b80f92dc4482bc98f6e373a1d305d",
".git/objects/fc/1c373440b5cc8a78f4b5741e24d9d80c95d7b3": "049de951d05a353c41ec6f3a9be9a9cb",
".git/objects/fc/dba41ff527d3d3d86cb95176270a09bd754deb": "9490cc9ef14145d00883f232803aa6d1",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/ORIG_HEAD": "36cb43238e4272179d7b05bfecbc8084",
".git/refs/heads/main": "f9b37d46a3a12a60ac0e39808cc2132f",
".git/refs/remotes/origin/main": "f9b37d46a3a12a60ac0e39808cc2132f",
"assets/AssetManifest.json": "69674d530925a13d4e273053b09d3da8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/lib/assets/flare/template_button.flr": "160323be86ea6037005487b992a550e9",
"assets/NOTICES": "e855fdcf869c966fa15983b8789ed57f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e07197512b7d23e1dd9bcd73056edd4b",
"/": "e07197512b7d23e1dd9bcd73056edd4b",
"LICENSE": "f23a1e8ecba33f99d78b3d979e750c27",
"main.dart.js": "6fe92abd4181c5b171fe65a3d3c454e2",
"manifest.json": "edf4c31673bdc02d6aeef4351539fa48",
"README.md": "adba4ab910d8abc8d462b845d167a159",
"version.json": "f5cfe445654eb4c4035429e108f0b6f9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
