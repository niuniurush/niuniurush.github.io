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
    "revision": "a8def6d5922eb6e5e1030d607a6819c3"
  },
  {
    "url": "assets/css/0.styles.8c31a643.css",
    "revision": "2a1ff0417d6d451f10a44a834c879a51"
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
    "url": "assets/js/1.bcfbfe48.js",
    "revision": "289756543d35a29e64a6160c4d762b6d"
  },
  {
    "url": "assets/js/10.5dd09041.js",
    "revision": "20758ff03b1c73b32bbf029438014345"
  },
  {
    "url": "assets/js/14.a72f3822.js",
    "revision": "b69db8832ffa30169c047d7403dd875f"
  },
  {
    "url": "assets/js/15.44fe0766.js",
    "revision": "070b06b75fe362f04c55b658c4bb8265"
  },
  {
    "url": "assets/js/16.a5a2c480.js",
    "revision": "3235cff5a796d41593be724714e8af63"
  },
  {
    "url": "assets/js/17.7e67ecab.js",
    "revision": "96500c56a478a2a2c1613d9c6d2b3eb8"
  },
  {
    "url": "assets/js/18.c595dc48.js",
    "revision": "0a953f6dbdfe1780a0e4af93751f430c"
  },
  {
    "url": "assets/js/19.33cc29c4.js",
    "revision": "85e8b1750ee026e78d8e2c76fca9e01f"
  },
  {
    "url": "assets/js/2.8d9c9307.js",
    "revision": "5df7d4ea34936c8f49136be533dc8e69"
  },
  {
    "url": "assets/js/20.792b569f.js",
    "revision": "3aa504b8e2e72344227ff94d744455c9"
  },
  {
    "url": "assets/js/21.76a11835.js",
    "revision": "53b568f1642c6f76124a2fee65b1ba6b"
  },
  {
    "url": "assets/js/22.ed2e27b9.js",
    "revision": "c956a23d4f22d811c2595f58bdb7ea24"
  },
  {
    "url": "assets/js/23.38400eb7.js",
    "revision": "9711d9585748a9ccf93be4e53bf0dc27"
  },
  {
    "url": "assets/js/24.8eccbcff.js",
    "revision": "578f9196cf42562337a74760808b34a6"
  },
  {
    "url": "assets/js/25.3ce28283.js",
    "revision": "d90076e91a9982eb7f721014e6128232"
  },
  {
    "url": "assets/js/26.7bb329f3.js",
    "revision": "cf668b6e14f3d2f59768e43153bb0ef1"
  },
  {
    "url": "assets/js/27.8a446d4f.js",
    "revision": "9daa363ecf211eb4ac8a8fb9d4db99b6"
  },
  {
    "url": "assets/js/28.4c858693.js",
    "revision": "eca8f23ad03b669cf943f9f106bb910a"
  },
  {
    "url": "assets/js/29.eab5ccb0.js",
    "revision": "ea2630f3b1abb14aa8c2f58c84843aae"
  },
  {
    "url": "assets/js/3.64b75f86.js",
    "revision": "1513de3e226c97a9ff27099bc7bca271"
  },
  {
    "url": "assets/js/30.b26a5b06.js",
    "revision": "aecf53b75e157c146638d301f785f6fe"
  },
  {
    "url": "assets/js/31.832051c6.js",
    "revision": "c97728291f5a5e130ae949e8d7a48b6d"
  },
  {
    "url": "assets/js/32.dfc1e71b.js",
    "revision": "7dfcf845ab30cd31ba40f9532b120b44"
  },
  {
    "url": "assets/js/33.069965d5.js",
    "revision": "6adcab74579fcacf49d6f24a4529c513"
  },
  {
    "url": "assets/js/34.40c9d488.js",
    "revision": "d59afb714b312d76ecdb3b8edbd376db"
  },
  {
    "url": "assets/js/35.d54f2be2.js",
    "revision": "0d72f761dfe2306fc896cb26536a2710"
  },
  {
    "url": "assets/js/36.c6f8f55c.js",
    "revision": "c8fe308271d3bc4a9faf4509b335d44d"
  },
  {
    "url": "assets/js/37.e212e97f.js",
    "revision": "95d058ab3ccf8a50327daa1a5271e6e3"
  },
  {
    "url": "assets/js/38.6bd9ac53.js",
    "revision": "87fc5785232bcb2b895deac5a343f01b"
  },
  {
    "url": "assets/js/39.99603098.js",
    "revision": "2070fc1e42971926f04be6d5629f060b"
  },
  {
    "url": "assets/js/4.cddf3b71.js",
    "revision": "88d31ebe6fdfc5c95838190a04a85fd2"
  },
  {
    "url": "assets/js/40.b519be1d.js",
    "revision": "3095e19e0f1a5f61fd322b8c573893bd"
  },
  {
    "url": "assets/js/41.fc9c935c.js",
    "revision": "0959db0447be9af5efd47568e71af42e"
  },
  {
    "url": "assets/js/42.9c25577e.js",
    "revision": "d5b0b052d94f358fac7c99c3b6f778d8"
  },
  {
    "url": "assets/js/43.419c6786.js",
    "revision": "9bae6d85e239c35f87a6599c5a1fcfdf"
  },
  {
    "url": "assets/js/44.6906b29b.js",
    "revision": "add4fa1513f4c7c0219fd5e01301ed67"
  },
  {
    "url": "assets/js/45.8a662bc3.js",
    "revision": "39c90e1423e1514b2545785a0e1f4ec9"
  },
  {
    "url": "assets/js/5.94f6054c.js",
    "revision": "911a65ddc3135d5d98c0cf92f6784001"
  },
  {
    "url": "assets/js/6.8e966bd4.js",
    "revision": "ce6bd8af84e3348d88bc5607e1a99e82"
  },
  {
    "url": "assets/js/7.5c07bf80.js",
    "revision": "fae48a2e219e1675b703307e0027cb6c"
  },
  {
    "url": "assets/js/8.c85740ce.js",
    "revision": "3296aafd594ef336e28e05e18a8a9810"
  },
  {
    "url": "assets/js/9.1b8a95cb.js",
    "revision": "5d3cb25ef7b4ae85c667b0cdf5c39cd7"
  },
  {
    "url": "assets/js/app.57f54ade.js",
    "revision": "55991e45520f0c53ed004bced72119a2"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.217ab061.js",
    "revision": "bb128693b5837c31c004508316ec5a4b"
  },
  {
    "url": "assets/js/vendors~flowchart.71bdeae9.js",
    "revision": "7bef177250f6e4e62912aff31be68d88"
  },
  {
    "url": "avatar.png",
    "revision": "e192c0be001e444d3dfc3b2fd79708e3"
  },
  {
    "url": "bing_icon.png",
    "revision": "555d513905598be82be5d52ceb30935c"
  },
  {
    "url": "categories/index.html",
    "revision": "04fd9906e57b6f99ab510929bfb96416"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7e13b4c9d76e261509d9395621293831"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "485981a1475a63e701ca49a6c63a0e7b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "40090abe9e9b4d25d88747fa21dc9268"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "387d12adb1c0824a9ed7dd1d31650d58"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "533da890356af453cb5a2d4ef0c46b76"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/111.png",
    "revision": "4221b9540af94f174c96ba951335dbf1"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/5854014_beach_coconut_island_palm_summer_icon.png",
    "revision": "f8119fad86c68b592683a3a3af7c807b"
  },
  {
    "url": "img/595149.png",
    "revision": "b84256f9a0d18cfd25cc130cc16185d4"
  },
  {
    "url": "img/bing.png",
    "revision": "0e30263b6a58bf388e29ac48f8c37ff2"
  },
  {
    "url": "img/cloud.png",
    "revision": "65ec8526e40754fa29e8a45d4faf7f54"
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
    "url": "img/小龙虾.png",
    "revision": "27d19d855dffed217372ee09eaad8b2a"
  },
  {
    "url": "img/长颈鹿.png",
    "revision": "9144e89b6680974fa3f8ac2f20af4935"
  },
  {
    "url": "index.html",
    "revision": "3be2b5e38dbb394cab2ad3cdc3f27ddf"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "a076e952510e25a61bf9a75f954f6f3b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "4b92fc76cff6dcb2f0ed2215bb0dd3cf"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "2b5de7ccf472a2e5a72405e6bbe51301"
  },
  {
    "url": "tags/js/index.html",
    "revision": "d613d903d288f800a142ef8dbf507a25"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "d0436b2aacecd73a97888fcc79a9f58b"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "5f88fa570e463f64a956ee4650152fa1"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "bbdd0523a166a0de740e113d62feb092"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "23f3c228ad2c110dbf557b76048c7de9"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9461118784f79efb5df4da65b6b90781"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "aa754bc85dfc6d563cf035b393ea56ff"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "bed6b035eb4609e5c702406201e87fce"
  },
  {
    "url": "timeline/index.html",
    "revision": "734b7d02c69ed00532be22e1ebf77b24"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "ce469af740a099aefa7af7d9936b880e"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "c9628ac1b30c68f92a7bf0ca5e44345c"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "960a8edb23ea1437a6781a1bd945ed8a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "8c091d05eed8453ebce4df0ff11d5bfd"
  },
  {
    "url": "生活分享/life.html",
    "revision": "3c69fa5e3dfd63145e0c3e624dcb5890"
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
