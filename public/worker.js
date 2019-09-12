/* eslint-disable no-restricted-globals */
console.log('Loaded service worker!');

let data

self.addEventListener('push', event => {
  data = event.data.json()
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
      const unformattedMessage = data.body.split(" ")
      const victimAddress = unformattedMessage.slice(4).join("")
      const name = "Sonya"
      // unformattedMessage.slice(0,1)
      event.waitUntil(clients.openWindow(`sos/${victimAddress}/${name}`));
      break;
    case 'Decline':
      event.notification.close();
      break;
    default:
      console.log(`The ${event.action} action is unknown`);
      break;
  }
});