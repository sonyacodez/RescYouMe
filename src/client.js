// const publicVapidKey =
//   "BJ0EZi8Bbg3qs7GFg1t9ItYQTu9XyRC2e1Goph9BabRVq6M9nFdmz--aAokvfbq9T9lkerpvTOf0Npv9hvJ4N2k";

// Check for service worker
// if ("serviceWorker" in navigator) {
//   send().catch(err => console.error(err));
// }

// Register SW, Register Push, Send Push
// async function send() {
//   // Register Service Worker -- this connects the browser with the APP through worker.js
//   console.log("Registering service worker...");
//   const register = await navigator.serviceWorker.register("/worker.js", {
//     scope: "/"
//   });
//   console.log("Service Worker Registered...");

//   // Register Push --- gets unique key identifying which device user is using and notifies the worker.js.
//   console.log("Registering Push...");
//   const subscription = await register.pushManager.subscribe({
//     userVisibleOnly: true,
//     applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
//   });
//   console.log("Push Registered...");

//   // Send Push Notification -- sends the subscription object above to the apiClient post route /subscribe.
//   console.log("Sending Push...");
//   await fetch("/subscribe", {
//     method: "POST",
//     body: JSON.stringify(subscription),
//     headers: {
//       "content-type": "application/json"
//     }
//   });
//   console.log("Push Sent...");
// }

//this function decrypts public key in service.js then adding to UserPush document in DB.
export const urlBase64ToUint8Array = function(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}