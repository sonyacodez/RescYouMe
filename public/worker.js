/* eslint-disable no-restricted-globals */
console.log('Loaded service worker!');

self.addEventListener('push', event => {
  const data = event.data.json()
  const options = {
    body: data.body,
    actions: [
      {
        action: 'show',
        title: 'Show it',
        icon: '/check.png'
      },
      {
        action: 'ignore',
        title: 'Ignore it',
        icon: '/delete.png'
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
    case 'show':
      console.log('User wants to see more');
      break;
    case 'ignore':
      console.log('User wants to ignore the notification');
      break;
    default:
      console.log(`The ${event.action} action is unknown`);
      break;
  }
});