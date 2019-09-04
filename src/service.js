import axios from 'axios'

const publicKey ='BJ0EZi8Bbg3qs7GFg1t9ItYQTu9XyRC2e1Goph9BabRVq6M9nFdmz--aAokvfbq9T9lkerpvTOf0Npv9hvJ4N2k'

const urlBase64ToUint8Array = (key)=> {
  const padding = '='.repeat((4 - (key.length % 4)) % 4)
  const base64 = (key + padding).replace(/-/g, '+').replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

// main function
export const run = async () => {
  // (1) check if serviceWorker functionality is supporter by the browser(navigator)
  if ('serviceWorker' in navigator) {
    try {
      console.log('Registering service worker')
      // (2) registering script 'worker.js' as processor for notifications (as service worker)
      const registration = await navigator.serviceWorker.register(
        // PUBLIC_URL => 'public' folder
        `${process.env.PUBLIC_URL}/worker.js`,
        { scope: '/' }
      )
      //  unsubscribe from old subscription, should not be needed
      const current = await registration.pushManager.getSubscription()
      if (current) await current.unsubscribe()

      // make object for subscription
      const subObject = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey)
      }
      // (5) navigator gives endpoint and we declare subscription
      const subscription = await registration.pushManager.subscribe(subObject)
      console.log('Registered push')

      console.log('Sending push')
      // (6) send request to server
      await axios.post(
        'https://rescyoume-app.herokuapp.com/subscribe',
        subscription,
        {
          headers: {
            'content-type': 'application/json'
          }
        }
      )
      console.log('Sent push to server')
    } catch (e) {
      // display error from server
      console.log(e)
      if (e.response && e.response.data) console.log(e.response.data)
    }
    return true
  }
  return false
}

export const alert = async () => {
  // get current service worker registration data
  console.log('inside alert function in service.js')
  const currentReg = await navigator.serviceWorker.getRegistration()
  // get subscription details
  const currentSub = currentReg
    ? await currentReg.pushManager.getSubscription()
    : ''
  // send request to server
  if (currentSub) {
    await axios.post('https://rescyoume-app.herokuapp.com//alert', currentSub, {
      headers: {
        'content-type': 'application/json'
      }
    })
    return true
  }
  return false
}

// 'https://rescyoume-app.herokuapp.com/subscribe'
// 'https://rescyoume-app.herokuapp.com/alert'
