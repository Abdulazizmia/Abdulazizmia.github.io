'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "e16b3ea46e4e54ea5991387ecfd6f24e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1f3306b70458c981b9013ba01a1f0272",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8811fca19c6e129bbeddec6410d54442",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7310497bf2b27e21fb22b27eb85b4df7",
".git/logs/refs/heads/master": "7310497bf2b27e21fb22b27eb85b4df7",
".git/logs/refs/remotes/origin/master": "8b4b00d51c1dd5fd5bdbbe92884904dd",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/30bdbcd1e613cafccd1267f339d6f25802c471": "1fd3abbee41a63f1f6ccc369a1786686",
".git/objects/09/3471fd619e22dba6b0fec96c6d59c6a3c66cca": "83f102816fc52bf062e19c7999376426",
".git/objects/0a/af221b520d522b4da3dfc6658748935781bebc": "4c6a7c7e2badaa8674b0ea28b6ba85e2",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/4d0f074917544c47cac9a292c88532c6107f13": "14da48c500bf6e387edbe4e76e54b01d",
".git/objects/0e/cfe9859e0c0de53576cada0ca6c4a3324e7a57": "e56461ad2871bf64a9b5cf2b071a229a",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/95173e65d7698e836c705a7143c4d114b5ec8c": "3da953da2b5b666e945be7292a568daa",
".git/objects/13/89a7b5eb61d6e51eb4834263463fa22231e8bf": "e92e928cfc4a797972d1e7208ddf0317",
".git/objects/13/d29e24d0098ee31d42a1665884bc6b053d97ea": "b5f4551eb696e2cb5677c288ac266211",
".git/objects/16/4585544ba19ba1e2432a3fd2d9c1302dafc866": "21188aeca0299949336c83d352d6f982",
".git/objects/19/bc282a6c6972d5e9be029acd7319e8b825a4e8": "783148b916259057ecfdbebe49dabb6a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/30/2c281f5e25acffd5b52d33b61eae7dc8b756a6": "1cc9cb5189b9121220b1229eb6b4acb5",
".git/objects/32/d63499f5e196109be7158cec1f1fac94065fb4": "4e149798910e71466ce6b40fbf14688d",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3d/bc6763271c50073728d29825bfb2f1f68ec9ac": "e65d25c8b44f79b2dbc7293d489b097b",
".git/objects/3d/f80ba294a82d6b0885131609a3d4ba1dce76cd": "05d5f07c85d98210bdba052bb4da5cd6",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/8b7f41fdd4574cd2b4664189e3c98be2533dbd": "4e437f6fb3bcc6c80f438706681bfbf6",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/f061f54eccca485b41a92fe48c9074bbc79c6e": "45711c5f64f2139144b433b24ab74cff",
".git/objects/4b/6da07e42147d9f0820bf0a06b63423ac9e6286": "10653fba5e116a78642eb6f963c06e01",
".git/objects/4f/6f16e96101906fef6a35eab7bcb02970ed7e47": "a9be1533e3231e2b140be43c515a4946",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/1a1b2db4a8e33b36f85ec1f11bda0e51de8655": "1467e52b51ce4c256a05cb40d5774aba",
".git/objects/57/2c6810360ed523fe5f40d5fd68a25fdc755a72": "f17050c9199a97c9f628b723f038a9d2",
".git/objects/57/bb064cafc651161d3de8be2b2eb9fc292be555": "e7ea4690d3fd6c082eac65e17d3a746e",
".git/objects/5b/2c520ae6cf4660a09ae4cdba77d248b4415387": "dc6ef84867195f14c920c540cca55280",
".git/objects/5c/5e6860c221e22005e43c1e8b2b3faea64a52fe": "7616d707927184f1fe39f908e27dbe01",
".git/objects/5c/da6583db63204f74de964e326fda56da44affa": "d892455be527c4fbee47f552bb4b67d3",
".git/objects/5d/70a8638801aa26977df147d672751980b6cb58": "ccd043fd2e2b97367b7bf161a463c843",
".git/objects/5e/48ffa2d3a0319bfdda596f961870fe770d5c8f": "9f2dc689839b4f0c0869c65252c0333f",
".git/objects/65/0378fad14d0a1b8914d0c09ab2f607e8a6845a": "badf7c4d0e6c5e1769c123e725d051f2",
".git/objects/68/6cbbe7360c6399cc38d9fc549e779185ffe1b2": "4ddc6aa6bc1c1a8061e31dcc0081e715",
".git/objects/6a/fa717dfcc52e5862c7babd64c8f0cdfc078466": "8cdf86e8755a9b9092e78d121e5ec8b8",
".git/objects/72/96cfad12dfd4755eed43a761717246b0c778eb": "8f582a3c6906da4f75b1db610ddcfd96",
".git/objects/75/30e66bec33cba791ae4d0132ba918445fbe3fd": "f2dd1476ad687e9dd02beeadb489b8fa",
".git/objects/77/7935120816fdb562c03e5edfdecaa04e080023": "4ae57752b9836ef93dcc520e281b3570",
".git/objects/81/2a146287c91b58bf951ca31c0e31fe74613ee7": "47e0cc2712d6fb6b6aa689ead9c3cc26",
".git/objects/86/1bc7207493f62b217347ee8bac2bd2792d8bd1": "1c75bf9783f41a4494e713cf1c7e6fd9",
".git/objects/86/85718133632b4677fe8a502b2dc4651b7629c5": "66d23f723475b1cde2421ee712059b7f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/664286ff0836fb1f3de51a125a8cba296898eb": "cd4778edad1db018d2dc0e74f45f5486",
".git/objects/8a/39f164ce22b95013ad347c746613b54436770b": "c7ab783615c27071d8e591f778f6e3f1",
".git/objects/8a/9b2d1034c5492cf05494073528a32ae30a579e": "45f9521d9f76bc96d4000e5fa999e340",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/5b81c7adcdede58dc43fffbe6ef9a49b34472d": "50c9fb7ab30501bcaa273a61d9106a59",
".git/objects/8d/b2978711689991c423cbe9c322fc8f68cb4eb8": "0d6f56f4ec6c5e5366e7531d9d0d53aa",
".git/objects/8d/b3b332910e478814c6236d8ff0f38b785b0d6e": "12bada2e370f798601d4524254519aab",
".git/objects/8e/ad2b70ff78d0fd0fafc603f444209c613cffcd": "abed1e61d62777e9803305e6ba5de75a",
".git/objects/90/c5edf461ca7361e7dd8f9d51a3572736c66523": "70f96195460f2fa7a932cbec19ef2795",
".git/objects/92/46b23a69793e8124375e41e182e74294b247b8": "00e73374e2e6f06a157bd94bdd67cc49",
".git/objects/92/893ecc2ed40162079f6780acffc5e91292c6df": "6460af7de91595a76d58c8e223457943",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/99/a9c32730fec12f9d24b9c1000c9afc0d29db91": "fa3c7ed9cba4edb3c12427ad9d045fc7",
".git/objects/9c/21260fbf257d5f15f0553e8ec13d96482b6c60": "e5dd417dd3b66a06a3a9d5de4ef378ac",
".git/objects/9e/180949ff66326b03f4923f571689c48f035bc1": "f86cd5581b3f1a160d7f7ac93d379507",
".git/objects/a3/5e6d17a6888ce6240fe4dffc3261f219686584": "d3e52568e71d4f7d03cdcf29a8adb825",
".git/objects/a6/a8275dd60e6602914f80e5bcfb5f0228734468": "f2d2ee9867af1e69af8847c142ac855f",
".git/objects/aa/4ab3d8e8bcc8e3f16af303301e94de3adc64fd": "96bc7e6b5d5b8f0494e5050690bfcc8e",
".git/objects/ad/3ca898011705559dbfc47510eb4822ed2de646": "1a8a25d4abdc2feb3d575c5720f4611b",
".git/objects/ad/d2fb150ec1adec16fb2b2e624dbbff75dcd387": "aa91e88507ffec1185df7c3afda44269",
".git/objects/b4/53036e2a7884ac2a4fe7b28adf7525a82ec7aa": "85434b429bab5d16fcc12c375d8253db",
".git/objects/b6/117c8aab12ffc5f284a48cd1c3c278f7afae94": "96f54b2f0bf879273fb50845169c6d14",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ef21c5c9b8406010dadebeb43bdee8aa3280d7": "3a16e63226f947eb095219a9c5ff1d83",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/4b4dc518b9d4f460aa267a1f4137aac3fb651b": "5886775bad4bb547b9e78050ad994b26",
".git/objects/bf/ae961542a01a10b2d92f22ff59e45556e327c1": "5424f0141fe0eeea8d314597cbaa1655",
".git/objects/bf/cef250fe6c80a419c6713df9a5c590066d49b1": "5297254873c787434eab1f6e3cf52460",
".git/objects/c2/b2389b0bfc020a25bf668070feacfec6ec054c": "eebf4aab4bc99d1547aa184dfba1c83d",
".git/objects/c3/5cc0b2ea6e265a3e404ea94ba5e243cdf0ef85": "a8bdad347f1e2978f6ecc9b7fb5b2173",
".git/objects/c6/22d325e28a328978314ede2f86f602ae642cb3": "e421e4bc38cd1b50a043e863cad7ea50",
".git/objects/c6/62f43302f241135090781d3a9154f9c1be42d5": "d6414060eeaa75359f76bbdc9c8e1054",
".git/objects/d1/131d76e3e01d976c7ade8e6628a4a08af75683": "89058bd6cece09997225fd2b2bb00d3a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/b9df25be84eed4d15fbea1f66bd35bc8d655f2": "140b2803d5b1a11adaa28095396126d0",
".git/objects/e1/a21f25272239f68b2f501a0abad39f94d6c9b3": "83b3b326ba7697499294558930442d6f",
".git/objects/e5/a4fa31e8ae8fc55b65f31ab4b777f9fcfc18b3": "ecc1e9c9957dcd0ad814d9f75edac969",
".git/objects/ea/f2ec268f1d4ababc2cc5bc2dda538a7fe7f392": "ccde0dc2c704370f2a0614801ad272a3",
".git/objects/ea/fded050a7de0679c6b4baeb4246452bead2858": "3b1babbba3a1932225c32ddcaaf5d104",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/d5ded2f53ddd1ccac9799df2949dce45327763": "eabb8809f4cd23e11cb893353728b1d1",
".git/objects/ef/b059eb109ddef0ea1c53602122525917320b0a": "8c7857bc56957f010cabb58e56d3ad2e",
".git/objects/f1/1f02c68fa2677601ac35fad6b867e92c834df7": "51f0d0d7d1430753bdfae84c2cea5989",
".git/objects/f3/22c2a1b2b3dd897a44cb340988913159c44398": "a52e9bf968360bf2fca3325ad8174940",
".git/objects/f8/30fd87773ff70e777ec89ee64752ab3f4e99c4": "5f256b60de16f85975029e7eace0c678",
".git/objects/f9/63e466dc6ad049b49c5fec5b25960263f32fa0": "89704e82c6626eb8e3e56fcce666b4d0",
".git/objects/f9/af50715f146e9b6a7e0252e96dc6a3100addf2": "e479dccf9021e728391e50c30e20b2c0",
".git/objects/ff/07a688961b1d566977479d99a163f337928318": "ec609b6476ebb57e5a69d23800c9b1aa",
".git/ORIG_HEAD": "07e7ba0df494cf5a09ecea212b092375",
".git/refs/heads/master": "07e7ba0df494cf5a09ecea212b092375",
".git/refs/remotes/origin/master": "07e7ba0df494cf5a09ecea212b092375",
"assets/AssetManifest.bin": "9ee8d4ba06f8d37e1637259603f9a4c7",
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
"assets/fonts/MaterialIcons-Regular.otf": "012106f2af113a969cd3ef0dd2b5371d",
"assets/fonts/Noirrit-Regular.ttf": "b048c8a2a63a8f6bc1bc749796750fad",
"assets/fonts/Noirrit-SemiBold.ttf": "d457e3159193d7d533a2f9e14ce8f795",
"assets/NOTICES": "8cab7f3c60d4a101795f74762f87bbdd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "dd62a82aeb78957e4143ec7a61f03d41",
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
"index.html": "0bf906c11020fcb3d8d1cf916dd77863",
"/": "0bf906c11020fcb3d8d1cf916dd77863",
"main.dart.js": "93009b731395b586cf013a1c46b732a3",
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
