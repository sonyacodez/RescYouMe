/* eslint-disable no-restricted-globals */
console.log('Loaded service worker!');

self.addEventListener('push', event => {
    const data = event.data.json()
    const options = {
      body: data.body,
      buttons: data.buttons
    }
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
})