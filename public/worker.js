/* eslint-disable no-restricted-globals */
console.log('Loaded service worker!');

self.addEventListener('push', event => {
    const data = event.data.json()
    const body = data.body
    const options = {
      actions: [
        {action: "Accept", title: 'Accept'}
      ]
    }
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
})