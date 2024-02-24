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
    "revision": "e4246736b854b68bee65ee9cf0122720"
  },
  {
    "url": "assets/css/0.styles.8c31a643.css",
    "revision": "2a1ff0417d6d451f10a44a834c879a51"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/image-20240224115223727.2ab0db15.png",
    "revision": "2ab0db15f30050f29c773dd1af41fec2"
  },
  {
    "url": "assets/img/image-20240224115423113.c48f058a.png",
    "revision": "c48f058a102e03a8ae505c50a4251a8c"
  },
  {
    "url": "assets/img/image-20240224120320961.93083085.png",
    "revision": "93083085a4813228d2653cd7cb41c74b"
  },
  {
    "url": "assets/img/image-20240224124101182.b95495a0.png",
    "revision": "b95495a0defa5aca258077345ec7d90f"
  },
  {
    "url": "assets/img/image-20240224124410216.423c9017.png",
    "revision": "423c901775f09c745c80bdce43177685"
  },
  {
    "url": "assets/img/image-20240224124530529.a895c62c.png",
    "revision": "a895c62cf8c36961b4ee81b45a6e4bdd"
  },
  {
    "url": "assets/img/image-20240224124752318.5d993c31.png",
    "revision": "5d993c31175d4499851dd50208796b2b"
  },
  {
    "url": "assets/js/1.49e7fef1.js",
    "revision": "121370dc01abe39770e704925aa30ffc"
  },
  {
    "url": "assets/js/10.f2dba88d.js",
    "revision": "30a20052507d1a2dfbba7c1167d06a56"
  },
  {
    "url": "assets/js/14.da2c98bf.js",
    "revision": "a83305ef966fb1dcba4874282580137f"
  },
  {
    "url": "assets/js/15.2e606a71.js",
    "revision": "cc11973311ff0a092656d4db70baa2b3"
  },
  {
    "url": "assets/js/16.0f70cad0.js",
    "revision": "020182cd3b6c57ce25cb9c2917c886c3"
  },
  {
    "url": "assets/js/17.f98e13ea.js",
    "revision": "d315d7fdcc23dc077f7fc6a210c58a26"
  },
  {
    "url": "assets/js/18.256d183f.js",
    "revision": "e7370d2a78019d26805a08fd9d21527f"
  },
  {
    "url": "assets/js/19.d2a11ce4.js",
    "revision": "2346d0579928ef400cef8e7c92149c70"
  },
  {
    "url": "assets/js/2.5f4eb5ec.js",
    "revision": "00b055d5b8ddf8acfaf778c68b982b96"
  },
  {
    "url": "assets/js/20.671cbe19.js",
    "revision": "b7959ef50bbc07a3f7a100377b118739"
  },
  {
    "url": "assets/js/21.c9e0bd07.js",
    "revision": "1de621951b4b3ea2868aee9dcd897ea4"
  },
  {
    "url": "assets/js/22.a4b6b6c5.js",
    "revision": "8502d8578de199034b9940743e7186e5"
  },
  {
    "url": "assets/js/23.03aa5b43.js",
    "revision": "8cc3b3bd648c97bbbf49e33ac03b550f"
  },
  {
    "url": "assets/js/24.2a3b994d.js",
    "revision": "1a05456a67b783b66769566c537550b7"
  },
  {
    "url": "assets/js/25.65497735.js",
    "revision": "4343cf0b860781e9ef7dc16717c70f96"
  },
  {
    "url": "assets/js/26.ed2f627e.js",
    "revision": "c0e65a807a38bfea4ce31a18d8fe1c34"
  },
  {
    "url": "assets/js/27.acc40ede.js",
    "revision": "b82b4d5f5d83f4eb5ea178d843071534"
  },
  {
    "url": "assets/js/28.5cf8a11c.js",
    "revision": "4808f6b4bcb2893d3d164d3478734393"
  },
  {
    "url": "assets/js/29.53b31d64.js",
    "revision": "417dbe54d86a1d50af90a8fcc580db90"
  },
  {
    "url": "assets/js/3.0495e5f1.js",
    "revision": "a27059871bfa5990d618794176bb399d"
  },
  {
    "url": "assets/js/30.2ee8bffb.js",
    "revision": "d2daa3bc3865c041dfb35ccfa9b524b9"
  },
  {
    "url": "assets/js/31.9ac2ffc7.js",
    "revision": "48cd422c29b68534094e11e462a97f80"
  },
  {
    "url": "assets/js/32.4024af3f.js",
    "revision": "04bfa6275ee01c4be3a7c89159bcc247"
  },
  {
    "url": "assets/js/33.747cc336.js",
    "revision": "c833823522bb1511c28c6bba31c928d8"
  },
  {
    "url": "assets/js/34.d8c25534.js",
    "revision": "148319c560e66fe8f7fabe3779d61eb7"
  },
  {
    "url": "assets/js/35.a66c36af.js",
    "revision": "413af46668a7ed112ce911956202eca4"
  },
  {
    "url": "assets/js/36.5d3c9648.js",
    "revision": "9858e9e1cb58504e662b50f7328ac131"
  },
  {
    "url": "assets/js/37.e5cdf4eb.js",
    "revision": "52f302a820335b64f62e98f47e7e7516"
  },
  {
    "url": "assets/js/38.8d827b0c.js",
    "revision": "1512503ceea3900cdf442dd3adb769ce"
  },
  {
    "url": "assets/js/39.99603098.js",
    "revision": "2070fc1e42971926f04be6d5629f060b"
  },
  {
    "url": "assets/js/4.c4be413f.js",
    "revision": "e8ae32d076040ad223beae3f58d5de94"
  },
  {
    "url": "assets/js/40.abe85e5c.js",
    "revision": "a39c479bfdab606adde21cce5d6808bc"
  },
  {
    "url": "assets/js/41.c67b92f0.js",
    "revision": "8fe8d71a8b4eaaa9a3fb96c1b1a1747f"
  },
  {
    "url": "assets/js/42.8773189f.js",
    "revision": "5ccc6af4acbeae4309cb66bafbb6d69d"
  },
  {
    "url": "assets/js/43.f5873c12.js",
    "revision": "2b4790ec710393c59364ed9782e464f7"
  },
  {
    "url": "assets/js/44.e8f88671.js",
    "revision": "58b8eaf3158cd1cc64e673b6f7beb9f2"
  },
  {
    "url": "assets/js/45.96a4c17c.js",
    "revision": "eaa2c7a90444b58ec0e46ac85684f33e"
  },
  {
    "url": "assets/js/46.67cc5a77.js",
    "revision": "dcc57552ffe35a3a9442a47565f40657"
  },
  {
    "url": "assets/js/47.263dc06e.js",
    "revision": "e4507ecf43e9f7b94cc56347e8d9bf19"
  },
  {
    "url": "assets/js/5.63c5c127.js",
    "revision": "4b45600569ec1d0de170352e9f8545c6"
  },
  {
    "url": "assets/js/6.9868cb4a.js",
    "revision": "3b23dc9eea55b399b03ce57276704301"
  },
  {
    "url": "assets/js/7.b91f0d3e.js",
    "revision": "92d432cde088a4d88b37576148a410b3"
  },
  {
    "url": "assets/js/8.1e42a268.js",
    "revision": "8244c5e04f98896276ec3a052a194722"
  },
  {
    "url": "assets/js/9.d2955256.js",
    "revision": "e1a8a2991a1ede26e5cd4aeff467c786"
  },
  {
    "url": "assets/js/app.b5a76240.js",
    "revision": "2fbf2195cfa33f3d5d5afb411370fef1"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.ebf81046.js",
    "revision": "387dfeddc55c1454b10cae210966671b"
  },
  {
    "url": "assets/js/vendors~flowchart.e2ac6387.js",
    "revision": "8c762fb01ad46f3f4173e7907e6817a0"
  },
  {
    "url": "avatar.png",
    "revision": "e192c0be001e444d3dfc3b2fd79708e3"
  },
  {
    "url": "categories/anaconda/index.html",
    "revision": "6a9620b26ca470c51f9042dc1ec3b194"
  },
  {
    "url": "categories/index.html",
    "revision": "418182de72f116075a48ceaba1ee3d0d"
  },
  {
    "url": "categories/python/index.html",
    "revision": "53ccd6a8e0a9ce493f71131ca156abe3"
  },
  {
    "url": "categories/学习资源/index.html",
    "revision": "d24b96b08cca7bb646a7d8e3c616cc5e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ec949cedbaeac1edcc2e1ff69f64307e"
  },
  {
    "url": "categories/类别/index.html",
    "revision": "13e5aa652bb89ffd4cda87ba5a74732d"
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
    "revision": "a3a02019094849a986e9b51ba1eb8c51"
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
    "revision": "640c9c19fb070d93ad59fd2295625444"
  },
  {
    "url": "tags/anaconda/index.html",
    "revision": "74d36b9df46c0e65bbb958769901b52b"
  },
  {
    "url": "tags/python/index.html",
    "revision": "8a6570032760ce4f7d72ed6b97609a45"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "9862cc7f03415fd9fcd82741b0692a57"
  },
  {
    "url": "tags/文献查找/index.html",
    "revision": "f0c356c9b945ac16f05a8a3434cbf799"
  },
  {
    "url": "tags/标签1/index.html",
    "revision": "64d6269069a533bd13e038986199666f"
  },
  {
    "url": "tags/标签2/index.html",
    "revision": "0f34e6d158704511f7849081bd732110"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9346ed1db92eea5d58c5c49f11e12d64"
  },
  {
    "url": "timeline/index.html",
    "revision": "8ff8688292a71781f3c1e894159de57c"
  },
  {
    "url": "技术杂谈/anaconda/00.html",
    "revision": "dd51b7d1c9ee581c75eadf3efffc43bf"
  },
  {
    "url": "技术杂谈/anaconda/anaconda.html",
    "revision": "a81b643c233cdf70994b2a3d10a78e64"
  },
  {
    "url": "技术杂谈/anaconda/anaconda2.html",
    "revision": "b60d840bcaefa793b252ef6d2bd65f93"
  },
  {
    "url": "技术杂谈/demo.html",
    "revision": "39ac0cd59e974d278119aa91cc938a3b"
  },
  {
    "url": "技术杂谈/python/python.html",
    "revision": "1ebdde76db597c453307a463508965df"
  },
  {
    "url": "日志随笔/01/22.html",
    "revision": "5aeb69171ef55ac6b56d8d2e35b160c9"
  },
  {
    "url": "日志随笔/life.html",
    "revision": "5dfd6052469d9e0d54efb1db17d8028d"
  },
  {
    "url": "资源分享/文献查找/文献查找.html",
    "revision": "79ebe526bc807f0d13f21aabfb1a7efc"
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
