if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/8xd52kVD8nKRTh_G1ME0M/_buildManifest.js",revision:"cd68c09116fa07e8ed30d28a5466126d"},{url:"/_next/static/8xd52kVD8nKRTh_G1ME0M/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/8xd52kVD8nKRTh_G1ME0M/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/framework-f798a5b6430bee51.js",revision:"f798a5b6430bee51"},{url:"/_next/static/chunks/main-5559f0924869f1cd.js",revision:"5559f0924869f1cd"},{url:"/_next/static/chunks/pages/404-f8c86be57dac1b06.js",revision:"f8c86be57dac1b06"},{url:"/_next/static/chunks/pages/500-9871afec087094fb.js",revision:"9871afec087094fb"},{url:"/_next/static/chunks/pages/_app-95d37ea0d49c77cc.js",revision:"95d37ea0d49c77cc"},{url:"/_next/static/chunks/pages/_error-8b9d369b3b7f2134.js",revision:"8b9d369b3b7f2134"},{url:"/_next/static/chunks/pages/commands-e920ad7a91cb48ab.js",revision:"e920ad7a91cb48ab"},{url:"/_next/static/chunks/pages/index-5a4b7986c6eb1c9a.js",revision:"5a4b7986c6eb1c9a"},{url:"/_next/static/chunks/pages/partners-e09f63f0eaa625a8.js",revision:"e09f63f0eaa625a8"},{url:"/_next/static/chunks/pages/privacy-bf4f15e5b305667e.js",revision:"bf4f15e5b305667e"},{url:"/_next/static/chunks/pages/tos-d889dfe2515362f7.js",revision:"d889dfe2515362f7"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-d7b038a63b619762.js",revision:"d7b038a63b619762"},{url:"/_next/static/css/2a861715994fde55.css",revision:"2a861715994fde55"},{url:"/css/customColors.css",revision:"630745f9b6cde2a80c3a488c8230948f"},{url:"/css/global.css",revision:"3f9e3b8ee32bcc8fba4cb705a8965acc"},{url:"/css/nprogress.css",revision:"c6adaeb29c55a8cb19899f8f4a4d959d"},{url:"/css/tippy.css",revision:"f14e4e01f7aaa1ad5f549d2d45d5dfe4"},{url:"/img/bck.png",revision:"2e4c6271d931eee83f48c913b7cfbb51"},{url:"/img/bck2.png",revision:"ea97be7cc9373b4ec7b468801f6e60e5"},{url:"/img/bck3.png",revision:"d0321896c7e863efbc72903499b5df02"},{url:"/img/bck4.png",revision:"6125cc45bd9c34cd87da9731228e5a1d"},{url:"/img/gift-left.png",revision:"bb95d34fceaf5ea927efb4953b59e3be"},{url:"/img/gift-right.png",revision:"84aad877270a4abdf12f21ebd0452227"},{url:"/img/logo.jpg",revision:"3d2f9316fe425f6623cd83ce029eb46c"},{url:"/img/logo2.png",revision:"06e199325e79da5a68f21332e639f63f"},{url:"/js/main.js",revision:"f97c34acf67977a2badf44e89c44fee2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
