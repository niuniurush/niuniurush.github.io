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
    "revision": "ae5c523baacb0afda2d516bc7b948886"
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
    "url": "assets/js/37.c8b0300b.js",
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
    "url": "assets/js/40.abe85e5c.js",
    "revision": "a39c479bfdab606adde21cce5d6808bc"
  },
  {
    "url": "assets/js/41.76c3cec5.js",
    "revision": "43b87749db0a99dd18acad880c719dc7"
  },
  {
    "url": "assets/js/42.22b646fa.js",
    "revision": "4aa79a054aacf0f830493fda3c6a9709"
  },
  {
    "url": "assets/js/43.9e5a2c70.js",
    "revision": "80e2f5731b82487d4162883faa1b0ce8"
  },
  {
    "url": "assets/js/44.8cebdec2.js",
    "revision": "bc82485b93c0c4318ae47be7416ef255"
  },
  {
    "url": "assets/js/45.9834bd59.js",
    "revision": "62bb0d352722f903c6d857e8d6449514"
  },
  {
    "url": "assets/js/46.9e95d4d6.js",
    "revision": "e55bff8c01005463cd5fa79308f82643"
  },
  {
    "url": "assets/js/47.61a4d9ce.js",
    "revision": "46c26249f047d92f3bd9dd8f7e461f9d"
  },
  {
    "url": "assets/js/48.d6f2a386.js",
    "revision": "6581eac56a62cc9e955fca4cff6d10c9"
  },
  {
    "url": "assets/js/49.7304f894.js",
    "revision": "f10a1e254b5636adb277d0e8e5b79c54"
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
    "url": "assets/js/app.919ba2f5.js",
    "revision": "2624c4cc11ef8911c98347ab5b778e96"
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
    "url": "categories/anaconda/index.html",
    "revision": "1937640590c94804d9634d56d1ca0682"
  },
  {
    "url": "categories/index.html",
    "revision": "532915c4607a35c437dbab655ba3ef9a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a7422bb61303c00b51ca47d1f9d18648"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c1dfa663cd113b1c2af25eff8a3b90df"
  },
  {
    "url": "categories/python/index.html",
    "revision": "6f3c4f1cd1f42b7dc7d58b5e4ed73ac6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "22001ad7e878b248d5b94a4690158df8"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "4e06ab2253c4882ce897f3ed2a59d60f"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "img/111.png",
    "revision": "4221b9540af94f174c96ba951335dbf1"
  },
  {
    "url": "img/222.png",
    "revision": "9144e89b6680974fa3f8ac2f20af4935"
  },
  {
    "url": "img/333.png",
    "revision": "f8119fad86c68b592683a3a3af7c807b"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/595149.png",
    "revision": "b84256f9a0d18cfd25cc130cc16185d4"
  },
  {
    "url": "img/avatar.png",
    "revision": "e192c0be001e444d3dfc3b2fd79708e3"
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
    "url": "img/logo_back.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/logo.png",
    "revision": "6592e1e9a436ac6f83ea52c9bc25f861"
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
    "url": "index.html",
    "revision": "3037533a0869cf1f3b8af36657157066"
  },
  {
    "url": "js/custom.js",
    "revision": "6e913667479e60e3cbf45d245908346b"
  },
  {
    "url": "logo.png",
    "revision": "6592e1e9a436ac6f83ea52c9bc25f861"
  },
  {
    "url": "tag/index.html",
    "revision": "4deeb7927579774ef18afccffd5511a9"
  },
  {
    "url": "tags/anaconda/index.html",
    "revision": "f7b327c068cd4dc44518d0bf9d981833"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "ddca0e0ee325d3a909b7be651da90d21"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "0faa8f50e54ee2a092d98efbd6ac801a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "32d96ad2abbd574516afb004e1d58e87"
  },
  {
    "url": "tags/python/index.html",
    "revision": "df616916078fa8430c969a81f7f35500"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "56354eef434260c76271c77b28d67751"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "25a5180cda029a85e8df984f4ca701ad"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b405809da6a2870d5f65fb332b79dffa"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "60f9a74cd91a6234c386660cb00daa1e"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "b19901db6a63c208c882c3b30cc3ac48"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "496997ec1285f160d46e32fca4dd0b7c"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "763cc722b81d309259d8c0741d427585"
  },
  {
    "url": "timeline/index.html",
    "revision": "b5f1299facd1106132851fd90d9e61da"
  },
  {
    "url": "技术文章1111/index.html",
    "revision": "546b9cbe513125b06ac5c3fc0d850423"
  },
  {
    "url": "技术文章1111/java/javase.html",
    "revision": "d10424789afa80b5643b3b6734c9bf6b"
  },
  {
    "url": "技术文章1111/java高级/javaee.html",
    "revision": "bc4c8f74f61229c0463c716c860305f0"
  },
  {
    "url": "技术文章1111/vue/vue01.html",
    "revision": "24d86f1c7b6a0acca25b0605286e50a9"
  },
  {
    "url": "技术杂谈/anaconda/00.html",
    "revision": "a86e37c8786a14066f9f5c7cb579298b"
  },
  {
    "url": "技术杂谈/anaconda/anaconda.html",
    "revision": "af0408dc17e5eafa0f3dad716c9b9d2c"
  },
  {
    "url": "技术杂谈/anaconda/anaconda2.html",
    "revision": "5437db62f296930316b9cbdce1a9a020"
  },
  {
    "url": "技术杂谈/python/python.html",
    "revision": "f74186062559ad6d1503e96569764e04"
  },
  {
    "url": "日志随笔/01/22.html",
    "revision": "f2d84e9bac788455807d388e43af2ca5"
  },
  {
    "url": "日志随笔/life.html",
    "revision": "febd27863b29b71cfb2a33086715c5c0"
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
