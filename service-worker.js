/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b4c2f6da05fc545ae0140e4c3e4da396"
  },
  {
    "url": "assets/css/0.styles.688024b2.css",
    "revision": "b89ed0cceb89697dfaf355959e758837"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.f4c70ad4.js",
    "revision": "732d84c2f294985aef70f1a58100a99f"
  },
  {
    "url": "assets/js/10.0e486c50.js",
    "revision": "a0a59afeea7015ea9499c708369311c0"
  },
  {
    "url": "assets/js/14.f920233a.js",
    "revision": "ff30f2b8c8998b211f494cd41caa5e2e"
  },
  {
    "url": "assets/js/15.4c0e89da.js",
    "revision": "edeee6bf4ab2ea7de466835df7c47cfa"
  },
  {
    "url": "assets/js/16.c3139422.js",
    "revision": "fdc798da7e3ed0a97832bb22ba0e0ee3"
  },
  {
    "url": "assets/js/17.d32e9106.js",
    "revision": "bcf77957ee8efdd6a16c372fcecc477c"
  },
  {
    "url": "assets/js/18.4d6e1112.js",
    "revision": "3e4a6b717bd5092f8390fe2ca5d3f263"
  },
  {
    "url": "assets/js/19.9658b96a.js",
    "revision": "4e18e917213769d24f7710515217c02e"
  },
  {
    "url": "assets/js/2.c93080b6.js",
    "revision": "fdda7066d57655179aefaa2433efe95a"
  },
  {
    "url": "assets/js/20.c91a7fd6.js",
    "revision": "2437af4a90b1cfa4d8054e954d45714e"
  },
  {
    "url": "assets/js/21.d25a62ef.js",
    "revision": "9d63ca487401c573e2fe4079b5e6981a"
  },
  {
    "url": "assets/js/22.4a3a218e.js",
    "revision": "950115a8ca5a76d0c364d6ae2ca0cae8"
  },
  {
    "url": "assets/js/23.9b7b0063.js",
    "revision": "4290c0bcd40241ea6d8807f62ba99f1e"
  },
  {
    "url": "assets/js/24.65c291ca.js",
    "revision": "915b19398980f58708a1495a9a9ec51d"
  },
  {
    "url": "assets/js/25.8b3eb180.js",
    "revision": "088d3712d337608583a19d91f1129e19"
  },
  {
    "url": "assets/js/26.0cddb775.js",
    "revision": "f2d7e17258bab1e524c3684bf0a6958e"
  },
  {
    "url": "assets/js/27.eb6da1b0.js",
    "revision": "a2c2b42d551b60038891b4fc11a52545"
  },
  {
    "url": "assets/js/28.7df0b088.js",
    "revision": "0ca5b13bd12e3087b376301cf7ce61d7"
  },
  {
    "url": "assets/js/29.e66142af.js",
    "revision": "87eb5a979595de108d77a29c0b92625a"
  },
  {
    "url": "assets/js/3.2b767198.js",
    "revision": "e090ac9bcf72b6e9cc25abb7956f40bb"
  },
  {
    "url": "assets/js/30.587e5f10.js",
    "revision": "fe4801edec1acb909a0101f8fac2752c"
  },
  {
    "url": "assets/js/31.107ee136.js",
    "revision": "6b94a86f23567740d6a99fc9e1010025"
  },
  {
    "url": "assets/js/32.ef2e3ad9.js",
    "revision": "47373bf79555f2af330c90ddc88346d8"
  },
  {
    "url": "assets/js/33.921ff5bd.js",
    "revision": "a93e628393abf8812143e9052238eb78"
  },
  {
    "url": "assets/js/34.9e434435.js",
    "revision": "22360f2f966e48b3234c5d4eef12533a"
  },
  {
    "url": "assets/js/35.ee66cc51.js",
    "revision": "e6b4118324d68d7bb6d9b5a684e6972d"
  },
  {
    "url": "assets/js/36.96611999.js",
    "revision": "0601d9bb0b3e6ffdfba62c62c23ea717"
  },
  {
    "url": "assets/js/37.269c1f72.js",
    "revision": "6946c36aa3fd24a0f8716baf1501b211"
  },
  {
    "url": "assets/js/38.960dfcec.js",
    "revision": "cd8c48e062447f7a2e2257cd3a4940de"
  },
  {
    "url": "assets/js/39.dcb8bbc5.js",
    "revision": "772efdd2efb75e784ff4817a71a38784"
  },
  {
    "url": "assets/js/4.d1cae3a7.js",
    "revision": "0729c97fe2a654b3c275f4f55c64d4c2"
  },
  {
    "url": "assets/js/40.3de064db.js",
    "revision": "c3a16aac4cb998bfe1525b9582b0b52c"
  },
  {
    "url": "assets/js/41.d55f9f30.js",
    "revision": "9c3e010c6a7530d09dfdc54ef2cbd1ca"
  },
  {
    "url": "assets/js/42.2d24f942.js",
    "revision": "6338748067743f47b3b6bb72d5cad0a2"
  },
  {
    "url": "assets/js/43.a5e9a069.js",
    "revision": "5864f82ca36b4359c183b03bd36ccb16"
  },
  {
    "url": "assets/js/44.a257b066.js",
    "revision": "6443c63b09c02ab78f91b3500461e060"
  },
  {
    "url": "assets/js/45.1538bf71.js",
    "revision": "533a2b9e8ac50884d3c67ea014fadb30"
  },
  {
    "url": "assets/js/5.8113fe05.js",
    "revision": "887f1fe271dde47ad04551330a517874"
  },
  {
    "url": "assets/js/6.880d8063.js",
    "revision": "01aab0e0f77bcfede04dcb349d8264a3"
  },
  {
    "url": "assets/js/7.487d215b.js",
    "revision": "8029b2c9f8cbe9618c4350941e7f071a"
  },
  {
    "url": "assets/js/8.c921544d.js",
    "revision": "24ced4e7b4079e2dd06d4823e4b06f68"
  },
  {
    "url": "assets/js/9.75443d07.js",
    "revision": "a28799bdf3710d8be6bc59f5f7555de1"
  },
  {
    "url": "assets/js/app.4a0e215f.js",
    "revision": "c36f747ee1170eca3d8262498653d06f"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.66190999.js",
    "revision": "624ee701e7a010ee3947f51674f8e2cf"
  },
  {
    "url": "assets/js/vendors~flowchart.2357f8f7.js",
    "revision": "4235d5f3268d7819b19dd0e704a2ea18"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "4847f7acc3c33ca737492e41fc52e8e8"
  },
  {
    "url": "categories/java/index.html",
    "revision": "bc63430c5ef11eb49aaae354618d6c21"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "899daaaa640663386f0db55991c7c4e2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0d2f6fefcdd9a834e624196fef251d66"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ccdc6b1453ee83b42055ebaadd535daa"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "51878598eef836c1f0bb7983f9bcb824"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "08a3f26bdb1f65db1b074c38dfe0897d"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "a7e3b49d7f06bf7489bc7cdafe982bfa"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "6554c3db70b31c61a9d34a347e9d839c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "b3a3320661e803a84e95e60077be5529"
  },
  {
    "url": "tags/js/index.html",
    "revision": "13462f6a080b65ae693ba026c0103736"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "79119dc17e894877be325c380055bca8"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "e1293127152e4683253809583aee66a6"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "660f3f6aa63ba90e83ff6086df6b0efd"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "5d4b7d69434dae557021e5b69430bb72"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "4fc4833c31ee5ce7f39dcb275f4e92cc"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "78d7d51973a557d7f24026bb233f3850"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "8cfebf4bca53a1da49dcc39a8b81526f"
  },
  {
    "url": "timeline/index.html",
    "revision": "b8751f0809dcd19ccea7c82b127774fd"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1b210e11fca13f95fdc4fe8400664eda"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "952ca6e130d2d00a3de9f83f547e6db4"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "0a7e2d7441799d92e83044e26656f269"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "24adf5cb47118bede2ff8a7eea6e4de4"
  },
  {
    "url": "生活分享/life.html",
    "revision": "de82acac5c5993955315a8424aa0e3d0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
