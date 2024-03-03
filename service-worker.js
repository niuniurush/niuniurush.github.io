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
    "revision": "6e8af716163ede8a73406ecbfbd1f64a"
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
    "url": "assets/img/image-20240303100905900.edb6fb81.png",
    "revision": "edb6fb81fe758b1ecab87df87ad49444"
  },
  {
    "url": "assets/img/image-20240303113720571.2d688de3.png",
    "revision": "2d688de32958b9bfe1812b57a05d5da5"
  },
  {
    "url": "assets/img/image-20240303114238312.8ed78443.png",
    "revision": "8ed784437dea419eb53cea1375f78c22"
  },
  {
    "url": "assets/img/image-20240303114311073.76e1c355.png",
    "revision": "76e1c355a5d81de350af637e7e366a37"
  },
  {
    "url": "assets/img/image-20240303114424805.8cff500e.png",
    "revision": "8cff500eac62281b106d2758f7ac85d7"
  },
  {
    "url": "assets/img/image-20240303114856210.a1d3790e.png",
    "revision": "a1d3790e1c731b663a8d851d0dcd2ae2"
  },
  {
    "url": "assets/img/image-20240303115037561.b7a54fba.png",
    "revision": "b7a54fba6e2f9bc47012aa6920e5cc88"
  },
  {
    "url": "assets/js/1.ffb3b1c4.js",
    "revision": "24cba386857803b59734c13abf04496d"
  },
  {
    "url": "assets/js/10.1d512db3.js",
    "revision": "85c7a12842d465ef91f997aeba28df09"
  },
  {
    "url": "assets/js/14.1da0247b.js",
    "revision": "807ef85dfb9309fda68d6508279de2d6"
  },
  {
    "url": "assets/js/15.98e2029b.js",
    "revision": "e62406a7eb38fd3c13fc9f488837e674"
  },
  {
    "url": "assets/js/16.e24e6e67.js",
    "revision": "3cf20585329d50a2d0f65ab4df5e8e75"
  },
  {
    "url": "assets/js/17.cb8284be.js",
    "revision": "9e70dadb8708b5825edaec5129887e69"
  },
  {
    "url": "assets/js/18.a39c17f4.js",
    "revision": "171e01dc389c28921f722379fb934ce9"
  },
  {
    "url": "assets/js/19.fd8348fb.js",
    "revision": "dbecd0b4e96f1b932251877b316206a9"
  },
  {
    "url": "assets/js/2.4bb42df7.js",
    "revision": "1714c7f828f99a4125f3703abe0f84c3"
  },
  {
    "url": "assets/js/20.7099e69c.js",
    "revision": "afd599573afd0a38826851419824415f"
  },
  {
    "url": "assets/js/21.e66d4b8f.js",
    "revision": "9f9d05562e33f125df823629fd5b66fe"
  },
  {
    "url": "assets/js/22.a4b6b6c5.js",
    "revision": "8502d8578de199034b9940743e7186e5"
  },
  {
    "url": "assets/js/23.b711840e.js",
    "revision": "fe90250e25b1dcd115d925926c877946"
  },
  {
    "url": "assets/js/24.845e4301.js",
    "revision": "73a864f3f87349359009c12188d2bb71"
  },
  {
    "url": "assets/js/25.fca5ef83.js",
    "revision": "3e42b37379517578d212e9d5c6239aa6"
  },
  {
    "url": "assets/js/26.6fdbc20c.js",
    "revision": "9a984d52088197e2d8636953631a02de"
  },
  {
    "url": "assets/js/27.5da37888.js",
    "revision": "913b18abea4a3fbf10aa088d8bb666c3"
  },
  {
    "url": "assets/js/28.8f2c02f1.js",
    "revision": "9f36f3b83831bac2c39c746185bcb332"
  },
  {
    "url": "assets/js/29.4843f2bc.js",
    "revision": "ccc28e62d0f629a9f1a727a4a9220e05"
  },
  {
    "url": "assets/js/3.04e627bd.js",
    "revision": "2f5a29869c16439d92ff712b3fe6dd0c"
  },
  {
    "url": "assets/js/30.fbfcea9d.js",
    "revision": "8ac19b054c1ca7c33766ed541ca163a7"
  },
  {
    "url": "assets/js/31.abfd246a.js",
    "revision": "ba8ae9e0d25f19094156f14a6bf97e3d"
  },
  {
    "url": "assets/js/32.a99e3f32.js",
    "revision": "cf9de46b457ee87ae68d2e8ae75261e0"
  },
  {
    "url": "assets/js/33.a55b2af2.js",
    "revision": "869807ffc000b2d39c554ae08839d9b7"
  },
  {
    "url": "assets/js/34.372d7cf7.js",
    "revision": "8b49b60581006603cfe3d2230f4533ce"
  },
  {
    "url": "assets/js/35.5e4db58a.js",
    "revision": "1768bddcb82e5f181041dafc08f16d69"
  },
  {
    "url": "assets/js/36.96948fdb.js",
    "revision": "8ef25ec4e09dd4cff93df553f962882b"
  },
  {
    "url": "assets/js/37.19d7d9e7.js",
    "revision": "aaf817f0b88dff911179a2f5aa3a8d23"
  },
  {
    "url": "assets/js/38.4d4c06fc.js",
    "revision": "a1525956aa281d2787a7f3d581e8e8af"
  },
  {
    "url": "assets/js/39.d7a0d14e.js",
    "revision": "634dec8871a8399c16fe14c1405d9af5"
  },
  {
    "url": "assets/js/4.b471c995.js",
    "revision": "8005584ec8a35e10cb428a4d7aee1de0"
  },
  {
    "url": "assets/js/40.c5748143.js",
    "revision": "64d8d8f41adb449e72e70be57bbf6330"
  },
  {
    "url": "assets/js/41.ea0874c2.js",
    "revision": "debd2a564ebfc7aef479cd1310c92107"
  },
  {
    "url": "assets/js/42.0bfcda37.js",
    "revision": "3d94e8c4a56fdc1a935843450ac79760"
  },
  {
    "url": "assets/js/43.c4f193ed.js",
    "revision": "e41deb1444304d7989873ef71097a4a0"
  },
  {
    "url": "assets/js/44.4a7571da.js",
    "revision": "4a71028a6e01d102d0216175d3acf112"
  },
  {
    "url": "assets/js/45.17fbbb6f.js",
    "revision": "b23be645d3dd3e7495e34ac82ab5f868"
  },
  {
    "url": "assets/js/46.b046b675.js",
    "revision": "591eeb1c07f71263957b11cc1214ff8b"
  },
  {
    "url": "assets/js/47.ed5ad196.js",
    "revision": "d187081a82276ebf62cae4873acb940b"
  },
  {
    "url": "assets/js/48.31dcc334.js",
    "revision": "b9213b67844244b30f1c4208dc4e97c1"
  },
  {
    "url": "assets/js/49.6cf6a9c0.js",
    "revision": "1568c4e23dbd0bf98c2a040518467330"
  },
  {
    "url": "assets/js/5.ed74cf26.js",
    "revision": "d7d2df83c355f019e2faeea60fb127f0"
  },
  {
    "url": "assets/js/50.29206da8.js",
    "revision": "a316bf9283f73ee025590c52a26494b5"
  },
  {
    "url": "assets/js/51.00a6b2db.js",
    "revision": "374b13a9756a84e5812001b6592dd45a"
  },
  {
    "url": "assets/js/52.dbd10f36.js",
    "revision": "960548044c64237078b6afde3786ae8a"
  },
  {
    "url": "assets/js/6.947fb35b.js",
    "revision": "c5f3db4314d7793fe2a5bb96cbe030e8"
  },
  {
    "url": "assets/js/7.7736c87b.js",
    "revision": "c15bfc97b7e19886f6befb7a75f50862"
  },
  {
    "url": "assets/js/8.5fd7c055.js",
    "revision": "83d7167d6f38ea62487086020e99cf93"
  },
  {
    "url": "assets/js/9.cafb4ba3.js",
    "revision": "6591126b5c5edf385f2f823fc2b846e2"
  },
  {
    "url": "assets/js/app.c6593760.js",
    "revision": "fee0eb2660bd3c8560a11d5810a5759d"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.0222bd08.js",
    "revision": "bb99ed70515166c5b72133d4e525e08d"
  },
  {
    "url": "assets/js/vendors~flowchart.7345f519.js",
    "revision": "f39ec250bb8aa7c57073a877b632044e"
  },
  {
    "url": "avatar.png",
    "revision": "e192c0be001e444d3dfc3b2fd79708e3"
  },
  {
    "url": "categories/anaconda/index.html",
    "revision": "923ae8907543fa6f459d0a4960909a5d"
  },
  {
    "url": "categories/index.html",
    "revision": "8813a787e1d7c4051226a0e73db70080"
  },
  {
    "url": "categories/python/index.html",
    "revision": "085049276f30b499307d4430b51ef097"
  },
  {
    "url": "categories/学习资源/index.html",
    "revision": "55b76813169cc9e6daee0840d67d7fde"
  },
  {
    "url": "categories/开发工具/index.html",
    "revision": "198ab455a645233a5669379ecdc563a4"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "900270e22c3ef0f9b65cefd08637c05d"
  },
  {
    "url": "categories/类别/index.html",
    "revision": "b9ca09ecbe1a1d11d10981dcba631cf9"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "img/avatar.png",
    "revision": "e192c0be001e444d3dfc3b2fd79708e3"
  },
  {
    "url": "img/logo.png",
    "revision": "6592e1e9a436ac6f83ea52c9bc25f861"
  },
  {
    "url": "index.html",
    "revision": "02af9effc3030cd332893f1e68f8b5ae"
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
    "revision": "c43587a952d8548756aa5ddd641807f5"
  },
  {
    "url": "tags/anaconda/index.html",
    "revision": "44d37e9871be663f6a779b708fc7e7c6"
  },
  {
    "url": "tags/git/index.html",
    "revision": "d9dd7b8ae8be6c315af360b9ea2e9e13"
  },
  {
    "url": "tags/python/index.html",
    "revision": "6aaf4f5404178035e26bda35fbbfec71"
  },
  {
    "url": "tags/visual studio/index.html",
    "revision": "91d3a58f66373a7b720c46498edf7288"
  },
  {
    "url": "tags/vscode/index.html",
    "revision": "9f0d7dcd69facd441747f8a6f399af73"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "5efe050afc53dd54963a0ea3e5301eaf"
  },
  {
    "url": "tags/文献查找/index.html",
    "revision": "1598dc5c22f0271dab1876a1e7f38677"
  },
  {
    "url": "tags/标签1/index.html",
    "revision": "2e2c23fda32930c404bbc41fef4316bc"
  },
  {
    "url": "tags/标签2/index.html",
    "revision": "24c6dc19b2dc845a10ac1e3c12f733c2"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "f931e0111678e97f0e908f637f41053a"
  },
  {
    "url": "timeline/index.html",
    "revision": "3456b618e587bdadfdd66a1da6fb2db4"
  },
  {
    "url": "技术杂谈/anaconda/00.html",
    "revision": "9acfa4bdf32b6524f2ed8a095d4ebda0"
  },
  {
    "url": "技术杂谈/anaconda/anaconda.html",
    "revision": "bfb6e475a4d8794891b65983377d315a"
  },
  {
    "url": "技术杂谈/anaconda/anaconda2.html",
    "revision": "d3c88ca30a76fb3c5714c8379244ef0f"
  },
  {
    "url": "技术杂谈/demo.html",
    "revision": "1a56e2ae27979373e5d19050f07f899d"
  },
  {
    "url": "技术杂谈/python/python.html",
    "revision": "37714be9a176a63dcc1c5b8e1a38dbf3"
  },
  {
    "url": "日志随笔/01/22.html",
    "revision": "bd5c0a20d43c7ec2a0e9c00092123ef2"
  },
  {
    "url": "日志随笔/life.html",
    "revision": "e483acba9d61ace9da0c732c27ff32a1"
  },
  {
    "url": "资源分享/开发工具/anaconda的安装配置.html",
    "revision": "92cb95413b5eff19e56faf950adcf3d9"
  },
  {
    "url": "资源分享/开发工具/cuda的安装配置.html",
    "revision": "f43530056c7e7a31d56cbcf886e0125d"
  },
  {
    "url": "资源分享/开发工具/git的安装配置.html",
    "revision": "b7be7db05489ea9cb0af2ec38b11aa24"
  },
  {
    "url": "资源分享/开发工具/visual studio的安装配置.html",
    "revision": "d1189f542b1da4b0f68eed78e936bb5d"
  },
  {
    "url": "资源分享/开发工具/vscode的安装配置.html",
    "revision": "d6be778f70c40131aedb430b425a09ad"
  },
  {
    "url": "资源分享/文献查找/中英文文献查找及下载方法.html",
    "revision": "b5b3e62e8a83cc16a5420bcae6d421f7"
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
