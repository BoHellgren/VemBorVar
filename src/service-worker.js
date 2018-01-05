/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

// self.toolbox.options.debug = true;

self.toolbox.options.cache = {
  name: 'ionic-cache-22'
};

const CACHE_VERSION = '22';
console.log('Service Worker started with CACHE_VERSION ', CACHE_VERSION);


// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.fastest);

 self.toolbox.router.get('/(.*)', self.toolbox.fastest, { origin: 'https://husarvikenproxy.herokuapp.com' });

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;


self.addEventListener('notificationclose', function (e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  console.log('Closed notification: ' + primaryKey);
});

self.addEventListener('notificationclick', function (e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  var action = e.action;
  if (action === 'close') {
    notification.close();
    console.log('Closed notification: ' + primaryKey);
  } else {
    clients.openWindow('https://husarviken.firebaseapp.com/index.html');
    notification.close();
  }

  self.registration.getNotifications().then(function (notifications) {
    notifications.forEach(function (notification) {
      notification.close();
      console.log('Closed one old notification');
    });
  });

});

self.addEventListener('push', function (e) {

  var body;
  if (e.data) {
    body = e.data.text();
  } else {
    body = 'Du har fått nya grannar!';
  };

  var options = {
    body: body,
    icon: 'assets/imgs/logo.png',
    vibrate: [200, 100, 200],
    tag: 1,
    renotify: true,
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '-push-notification'
    },
    actions: [
      { action: 'explore', title: 'Starta VemBorVar' },
      //	icon: 'assets/imgs/checkmark.png'},
      { action: 'close', title: 'Kollar senare' }
      //	icon: 'assets/imgs/xmark.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Brf Husarvikens Strand', options)
  );
  caches.open('ionic-cache-3').then(function (cache) {
    cache.keys().then(function (keys) {
      keys.forEach(function (request, index, array) {
        //	console.log('cache request: ',request.url);
        if (request.url.search('husarvikenproxy') != -1) cache.delete(request);
      });
    });
  });

});


