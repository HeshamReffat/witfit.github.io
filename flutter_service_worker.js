'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4a15cf8c96a74e8bbc46231a255b75fb",
"index.html": "fbc587f09dd25eaa924c9ee44587f1b5",
"/": "fbc587f09dd25eaa924c9ee44587f1b5",
"main.dart.js": "8148503ac161ff914aafd0869fcb5119",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "61e1da627175dd1188d18818a84d19d0",
".git/config": "11bca6967c763b9e10ac4d737d62dfe8",
".git/objects/92/7740c428a0414bc3f1673bef861075f4e1a0f2": "853c445b23c381634b55348c6e02bbfb",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/779ebb8b98af5271e8c047d805d0163b3eea0b": "fd662d16ac762261ba7225cc8fabbaa7",
".git/objects/3d/43ca37f5d9145816f4e750c08b9d2981ad713c": "82bf21a54f7e6a7cf50d1b2102a3e6f6",
".git/objects/58/35313533fc3f0ebcbab66bfb757180c1ac503b": "9c359dea8517bd1f11cb1534f9bb217c",
".git/objects/02/ed384576628d63fe05bdaff34f0c6c692b9a93": "cc5c6eba616bc1dfb67e1e0e2a8ff402",
".git/objects/a3/5dd6f2da9d0ae61357285b4c75d308919bc48f": "e67989b0c33f0e84b55fd5647fc775dd",
".git/objects/d9/e1c6b0bdf4205fbe1fdbddbe0018de3d62b13d": "5a83633fb9849014a9851142ffa70614",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/2dc10e1db21f6b33ef000c0a9b0b982b3faadd": "c30a887a81cdf485f61c664fcdadfe24",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/7dee05852da11f12a2c546471ff6c7b1e73937": "262bf1366534713bc75504d8fcf7bb2a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/4e/dd9bd948eab7f0dd6e6f3a3c9d5ee08afd89a0": "13bdbdd279d749ed4fbae16f290ffd7e",
".git/objects/18/dafa75cbd69d339bcb59ba1b21ab461ab90032": "6b6a3f3f3f111f85f79db5c6210a3732",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/11/25e4049ad6182554e25bfa8b3559a1441935bf": "322fdf3aa2e7086b13f40a59aebf498e",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/d0885197b1c3457bb8513b5e188daec922502e": "a4bed3051f63f5349433d8f8232c9232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/62/b3c8319f1f157f74c603201cd8e4282ca29019": "5ba18e283d25d75f4c4812df0902fc52",
".git/objects/98/17f67d9e673a471afd2a65ce9ff66f1f7dff98": "8b91acf99d74cc4d0e60f25740823c98",
".git/objects/97/924ead9d5d4a669dd6d709aaf95b489420c92a": "7d1e8c54ee0774c8f0ac12b2e7d78811",
".git/objects/a7/33fc1119271a1202a579fb0164b86b7c2987c2": "7735835acfdba02f4d234a914b70ee67",
".git/objects/af/9b97c1cdd906fd6b827581aac12df59ad598bc": "fc995194d652dea3295a8266d8894536",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/95d32da3dc1d92209078cdd275683c092f29de": "b03f8c938cd2d16cdac35cda9c4ec2fa",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/a12903002fff8c7da5b6bb9c4c9b6e6d2e5fd9": "66bf7d5766ea8b25f21da8db72887389",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/87daa9a58c0f0b73c0887d41b4164a9c408817": "de067870595c926fba928b73214740f9",
".git/objects/a1/5722dc825ba828d7df84e970d29d39a4eae63b": "916c90f6b515a4f6a4b1dfdb16075fb4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/668a27458e8a92e3cb2ab2770ea43aa478d532": "a4894055c9ce914fcdfd88fc1f169367",
".git/objects/c4/2777ecf00ee830e4c31b527d93c5e0eec9f8b5": "d53ca39bedc2a3c66b891a52ae43f708",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cae8bece3f91aaa091cfaab60cca2bf893b0c0": "b25d84a56f1330195805396529c27b36",
".git/objects/14/55a2253f2fe31a68227967e33d1611507d3525": "ca7340edfff7377ffa5a66bfbc78f3c0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ee236162dc428f36185f711daafd2ea5",
".git/logs/refs/heads/master": "ee236162dc428f36185f711daafd2ea5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "eef6bff7bf424cd21dc78bef8c791a59",
".git/index": "6cbdc9850178231cfa839799ff7d208a",
".git/COMMIT_EDITMSG": "48c2e9d94df8ecbc102130e11c164784",
"assets/AssetManifest.json": "3988bcbc5f32a7d70dec2a5b8553f90b",
"assets/NOTICES": "338b1e455422c0487392615bd8047d89",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/translation/en.json": "71076d60d3a13d0e70c1842392ea0674",
"assets/assets/translation/da.json": "0ca69a2952605e3c796c5858f5da3e56",
"assets/assets/images/dp_default%2520-%2520Copy.png": "e7328a1134559646b06d69d7757bb0ac",
"assets/assets/images/profile_image.jpg": "659c5cd5914f9932214421ae6448ba66",
"assets/assets/images/app_icon.png": "a3cb2035e7be0415d0510ad8545ff4e4",
"assets/assets/images/Banner.PNG": "4a3aa32a82534a36d4f0db39c52c2586",
"assets/assets/images/agora-logo.png": "ff75c4ad02ac09ef27fd7fe6d3ee38e8",
"assets/assets/images/dp_default.jpg": "4e75ae363d979d6f5df3da17ab79d6cd",
"assets/assets/images/dp_default.png": "e7328a1134559646b06d69d7757bb0ac",
"assets/assets/images/logo_dark.png": "9ffe62672b0ef6cd7d2af4187d47df6a",
"assets/assets/images/logo_white.png": "e1b8d8877811298a65a795aa178c6fe6",
"assets/assets/images/appBar_logo.JPG": "ff75c4ad02ac09ef27fd7fe6d3ee38e8",
"assets/assets/images/google.png": "94c0ec2007237b08a331bd008cf688a9",
"assets/assets/images/facebook.png": "95c4c698dfe8ab6f6751af6a7a6ce4df",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
