//checks if browser is compatible with service worker and Push API for notifications
const check = () => {
  if (!('serviceWorker' in navigator)) {
    return
  }
  if (!('PushManager' in window)) {
    return
  }
}

//registers service worker
//tells the browser where our service worker file is (service.js)
function registerServiceWorker() {
  return navigator.serviceWorker.register('service.js')
  .then(function(registration) {
    console.log('Service worker successfully registered.');
    return registration;
  })
  .catch(function(err) {
    console.error('Unable to register service worker.', err);
  });
}

//requests permission for notifications from the user and can be default, granted, or denied
const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission()
  if (permission !== 'granted') {
    throw new Error('Permission not granted for Notification')
  }
}

//push event in service worker
self.addEventListener("push", function(event) {
  if (event.data) {
    console.log("Push event!! ", event.data.text());
    showLocalNotification("New Notifs", event.data.text(), self.registration);
  } else {
    console.log("Push event but no data");
  }
});

const showLocalNotification = (title, body, swRegistration) => {
    const options = {
        body,
        // here you can add more properties like icon, image, vibrate, etc.
    };
    swRegistration.showNotification(title, options);
}
const main = async () => {
    check();
    const swRegistration = await registerServiceWorker();
    const permission =  await requestNotificationPermission();
    showLocalNotification('Task', 'Task Description', swRegistration);
}
main();