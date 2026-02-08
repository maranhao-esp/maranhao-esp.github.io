// Service Worker SUPER SIMPLES
self.addEventListener('install', event => {
    console.log('Service Worker instalado');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Service Worker ativado');
});

// Notificações locais (sem Firebase)
self.addEventListener('push', event => {
    console.log('Push recebido:', event);
    
    const data = event.data ? event.data.json() : {};
    const titulo = data.title || 'Nosso Mundo ❤️';
    const corpo = data.body || 'Nova mensagem!';
    
    event.waitUntil(
        self.registration.showNotification(titulo, {
            body: corpo,
            icon: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
            badge: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
        })
    );
});
