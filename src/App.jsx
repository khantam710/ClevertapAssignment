import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CleverTap from 'clevertap-web-sdk';
import SigninForm from './components/SigninForm';


function App() {
  CleverTap.init({ accountId: 'Z44-Z4K-K65Z' });
  CleverTap.spa = true;
  
  return (
    <>
      <SigninForm/>
    </>
  )
}

export default App
