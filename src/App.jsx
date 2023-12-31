import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CleverTap from 'clevertap-web-sdk';
import SigninForm from './components/SigninForm';


function App() {
  CleverTap.init({ accountId: 'Z44-Z4K-K65Z' });
  CleverTap.spa = true;

  if ('serviceWorker' in navigator) {
    // Unregister the previous service worker (if any)
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister().then(success => {
        if (success) {
          console.log('Previous service worker unregistered successfully.');
        } else {
          console.error('Failed to unregister the previous service worker.');
        }
  
        // Register the new service worker
        navigator.serviceWorker.register('/sw_webpush.js', { scope: '/' })
          .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      });
    });
  }
  
  
  return (
    <>
      <SigninForm/>
    </>
  )
}

export default App
