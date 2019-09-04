/* eslint-disable no-restricted-globals */
console.log('Loaded service worker!');

self.addEventListener('push', event => {
  const data = event.data.json()
  const options = {
    body: data.body,
    actions: [
      {
        action: 'Accept',
        title: 'Show it',
        icon: '../src/images/accept.png'
      },
      {
        action: 'Decline',
        title: 'Ignore it',
        icon: '../src/images/decline-hi.png'
      }
    ]
  }
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
})

self.addEventListener('notificationclick', (event) => {
  if (!event.action) {
    console.log('No button clicked');
    return;
  }
  switch (event.action) {
    case 'Accept':
      window.location.href = `http://www.google.com`;
      break;
    case 'Decline':
      Notification.close();
      break;
    default:
      console.log(`The ${event.action} action is unknown`);
      break;
  }
});