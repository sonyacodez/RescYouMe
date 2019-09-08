import axios from 'axios'

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
    await axios.post('/alert', currentSub, {
      headers: {
        'content-type': 'application/json'
      }
    })
    return true
  }
  return false
}
