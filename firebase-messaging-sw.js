// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');
// nsymar o neymar
firebase.initializeApp({
  apiKey: "AIzaSyAsK3kEuustv7KyoQXR0Ep-whTpDCDa03w",
  authDomain: "manuu-c23a7.firebaseapp.com",
  databaseURL: "https://manuu-c23a7-default-rtdb.firebaseio.com",
  projectId: "manuu-c23a7",
  storageBucket: "manuu-c23a7.firebasestorage.app",
  messagingSenderId: "378235951611",
  appId: "1:378235951611:web:72c855fbb5ccdb1a84535e"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[SW] Push recebido em background:', payload);

  const title = payload.notification?.title || 'Mensagem de Nosso Mundo ❤️';
  const options = {
    body: payload.notification?.body || 'Alguém mandou algo especial!',
    icon: 'https://cdn-icons-png.flaticon.com/512/2589/2589175.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/2589/2589175.png',
    vibrate: [200, 100, 200], 
    tag: 'msg-group',
    renotify: true,
    requireInteraction: true,
    data: { url: '/' }
  };

  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url || '/'));
});
