
// array med cache names vi gerne vil bruge. opdater disse for at triggere en install

const cacheVersionName = ['staticCache-v1'];


// her kan der evt scannes et directory på serveren ... og bygge et array til cache

// static elements til cache
// alle elementer til at skabe appen  caches her 
let staticUrlsToCache = ["/assets/img/bo.jpg",
  "/assets/css/site.css"];




self.addEventListener('install', event => {
  console.log('installing…');


  // her kan vi cache vores event... 
  // @ts-ignore
  event.waitUntil(

    caches.open(cacheVersionName[0]).then(cache => cache.addAll(staticUrlsToCache))

  );

});


self.addEventListener('fetch', (event) => {



  return;
});







/* // activate  sletter obsolete caches  virker udfra  cacheAllowList

self.addEventListener('activate', (event) => {


  // find alle cache keys (cache navne) og fortsæt med en array med cache navne
  event.waitUntil(caches.keys().then((keys) => {

    // Slet caches der ikke findes i cacheAllowList:
    return Promise.all(keys.map((key) => {

      if (!cacheVersionName.includes(key)) {
        // her slettes den enklte cache der ikke er i arrayet
        return caches.delete(key);
      }
    }));

  }));
});

*/


/* self.addEventListener('fetch', (event) => {
  // er jeg i cache list
  const url = new URL(event.request.url);
  const isPrecachedRequest = staticUrlsToCache.includes(url.pathname);

  if (isPrecachedRequest) {
    // kik i cache
    event.respondWith(caches.open(cacheVersionName[0]).then((cache) => {
      return cache.match(event.request.url);
    }));
  } else {
    // network
    return;
  }
}); */
















