var cacheName = 'SafeZone'

self.addEventListener('install', event =>{
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll([
                'index.html',
                'formularioRelato.html',
                'ocorrencias.html',
                
                './assets/css/main.css',
                './assets/js/map.js',
                './assets/js/formulario.js',


                './assets/image/icon_lista.png',
                './assets/image/icon_pindrop.png',
                './assets/image/iconpin.png',
                './assets/image/icon_mapa.png'
            ]))
    );
});


self.addEventListener('message', function(event){
    if(event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

self.addEventListener('fetch', function (event){
    event.repondWith(async function(){
        try {
            return await fetch(event.request);
        } catch (err){
            return caches.match(event.request);
        }   
    }());

    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if(response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});





