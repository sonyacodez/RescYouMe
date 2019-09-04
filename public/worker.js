/* eslint-disable no-restricted-globals */
console.log('Loaded service worker!');

self.addEventListener('push', event => {
  const data = event.data.json()
  const options = {
    body: data.body,
    actions: [
      {
        action: 'Accept',
        title: 'ACCEPT'
      },
      {
        action: 'Decline',
        title: 'DECLINE'
      }
    ]
  }
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
})

self.addEventListener('notificationclick', (event) => {
  switch (event.action) {
    case 'Accept':
      event.waitUntil(clients.openWindow(`sos`));
      break;
    case 'Decline':
      event.notification.close();
      break;
    default:
      console.log(`The ${event.action} action is unknown`);
      break;
  }
});