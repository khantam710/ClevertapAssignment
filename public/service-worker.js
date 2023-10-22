self.addEventListener('push', event => {
  const pushData = event.data.json(); // Assuming CleverTap sends JSON data
  const { title, body, icon } = pushData;

  const options = {
    body: body,
    icon: icon,
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
