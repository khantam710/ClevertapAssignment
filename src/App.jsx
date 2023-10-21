import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CleverTap from 'clevertap-web-sdk';
import SigninForm from './components/SigninForm';


function App() {
  CleverTap.init({ accountId: 'Z44-Z4K-K65Z' });
  CleverTap.spa = true;

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/firebase-messaging-sw.js")
        .then((registration) => {
            console.log("Service Worker registered with scope:", registration.scope);
        })
        .catch((error) => {
            console.error("Service Worker registration failed:", error);
        });
}
  
  return (
    <>
      <SigninForm/>
    </>
  )
}

export default App
