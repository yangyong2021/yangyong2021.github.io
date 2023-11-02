/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/09/22/hello-world/index.html","de4d84eb2ec77e91f9eb519f0adf1dd6"],["/2023/09/22/hexo+github教程/image-20231026144235091.png","572d0eae66eec74655144245881d6400"],["/2023/09/22/hexo+github教程/image-20231026144414751.png","7c7a07d30ee27938e2c0897b1850228e"],["/2023/09/22/hexo+github教程/image-20231026145351160.png","b05c3adc63aca669bee34c19abfb94ea"],["/2023/09/22/hexo+github教程/image-20231026145852416.png","8dcf20bd8658ff254a72cc8035325dd8"],["/2023/09/22/hexo+github教程/index.html","8a988da735784f75d625da390c4760ba"],["/2023/09/22/java复习资料/index.html","04d2b6fc995e1a9bd0e99e94efe01fb6"],["/2023/09/22/基础篇-排序/index.html","459841c1124c57b7cb787a712cd8444d"],["/2023/09/23/Java面试/index.html","8959a1856f3ea4a4207a49ceadf8079d"],["/2023/10/08/接口幂等/index.html","4c1115daf0800f01dd78f032b798e45f"],["/2023/10/19/力扣刷题/image-20231022111018869.png","3c097223da4f2076df0837b0c4bcf199"],["/2023/10/19/力扣刷题/image-20231023100947315.png","2e51fb38a9c2098bb639760365d6199d"],["/2023/10/19/力扣刷题/index.html","8eb71ee2d5f6d7d5777fd2d8bf785265"],["/2023/10/25/Springboot微服务/image-20231102103654239.png","e5762f83d935ea0f4867be98cfeffe9e"],["/2023/10/25/Springboot微服务/index.html","13b13648f4849e50cf2f8161fbf120d9"],["/2023/10/26/Nacos安装指南/image-20210402161102887.png","98a14f791f5f36207e0c0e4915868db0"],["/2023/10/26/Nacos安装指南/image-20210402161130261.png","ca1ccc0e48b08a13155890a27b7e587b"],["/2023/10/26/Nacos安装指南/image-20210402161843337.png","dc09abbb64598472d2c064c1a5ecb19c"],["/2023/10/26/Nacos安装指南/image-20210402162008280.png","f22776d81c7fa5c99113c353479cd398"],["/2023/10/26/Nacos安装指南/image-20210402162251093.png","ff990b5d864abb5d6bde92aa51fa6da3"],["/2023/10/26/Nacos安装指南/image-20210402162350977.png","9111b21d2e35a13cf2c26581040f4db1"],["/2023/10/26/Nacos安装指南/image-20210402162526774.png","138b8714298532439ec271c191e8cd35"],["/2023/10/26/Nacos安装指南/image-20210402162630427.png","9ecdf5a09f90e5c1472349e0a5c7affe"],["/2023/10/26/Nacos安装指南/image-20210402162709515.png","ee54a5c38d293b83950ec8968384508f"],["/2023/10/26/Nacos安装指南/image-20210402163715580.png","0631481a0dba1a3231d71ce8a0f3e33b"],["/2023/10/26/Nacos安装指南/image-20210402163858429.png","a95a43d7a0f2e54fae570f67d70f5e4d"],["/2023/10/26/Nacos安装指南/image-20210402164414827.png","ad991c6690a2a28f595cf38b4989888f"],["/2023/10/26/Nacos安装指南/image-20210402172334810.png","342a90d506ad5b27b21d382ae33c3689"],["/2023/10/26/Nacos安装指南/index.html","fac4b0c76737a19a408523818f2ea956"],["/Nacos安装指南/image-20210402161102887.png","98a14f791f5f36207e0c0e4915868db0"],["/Nacos安装指南/image-20210402161130261.png","ca1ccc0e48b08a13155890a27b7e587b"],["/Nacos安装指南/image-20210402161843337.png","dc09abbb64598472d2c064c1a5ecb19c"],["/Nacos安装指南/image-20210402162008280.png","f22776d81c7fa5c99113c353479cd398"],["/Nacos安装指南/image-20210402162251093.png","ff990b5d864abb5d6bde92aa51fa6da3"],["/Nacos安装指南/image-20210402162350977.png","9111b21d2e35a13cf2c26581040f4db1"],["/Nacos安装指南/image-20210402162526774.png","138b8714298532439ec271c191e8cd35"],["/Nacos安装指南/image-20210402162630427.png","9ecdf5a09f90e5c1472349e0a5c7affe"],["/Nacos安装指南/image-20210402162709515.png","ee54a5c38d293b83950ec8968384508f"],["/Nacos安装指南/image-20210402163715580.png","0631481a0dba1a3231d71ce8a0f3e33b"],["/Nacos安装指南/image-20210402163858429.png","a95a43d7a0f2e54fae570f67d70f5e4d"],["/Nacos安装指南/image-20210402164414827.png","ad991c6690a2a28f595cf38b4989888f"],["/Nacos安装指南/image-20210402172334810.png","342a90d506ad5b27b21d382ae33c3689"],["/Springboot微服务/image-20231102103654239.png","e5762f83d935ea0f4867be98cfeffe9e"],["/archives/2023/09/index.html","cac6016ed5de7a5e55676ac7f86db4c8"],["/archives/2023/10/index.html","db71090869cecadccf5f3083881cef7b"],["/archives/2023/index.html","ce0ffa346752b29d05874d451e9edaad"],["/archives/index.html","5c73818fe22aa5887a990bf7ce8c737b"],["/categories/index.html","6ee4a1b1beceb87a810c42c5b3a1d262"],["/css/background.css","a2b0dd04f6050aa67427e6fb1337666e"],["/css/index.css","57960f80d38f542e248d32f19af179a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/hexo+github教程/image-20231026144235091.png","572d0eae66eec74655144245881d6400"],["/hexo+github教程/image-20231026144414751.png","7c7a07d30ee27938e2c0897b1850228e"],["/hexo+github教程/image-20231026145351160.png","b05c3adc63aca669bee34c19abfb94ea"],["/hexo+github教程/image-20231026145852416.png","8dcf20bd8658ff254a72cc8035325dd8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","c9498bfa56353fec1c7ffc83c6f538a3"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head.jpg","41ee8110bcc14f395bf64b82226a4a01"],["/img/wechat.jpg","cee7f54ff923ad68b743807d9507edd8"],["/index.html","d8f2e99f6f021bc889c611a575ff8e40"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/sw-register.js","5385b52e53f17d620b5070c8974d4a04"],["/tags/index.html","f84e3e6e982a407e5ece05ef52164f5b"],["/力扣刷题/image-20231022111018869.png","3c097223da4f2076df0837b0c4bcf199"],["/力扣刷题/image-20231023100947315.png","2e51fb38a9c2098bb639760365d6199d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
