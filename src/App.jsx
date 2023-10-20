import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Form from './components/form';
import CleverTap from 'clevertap-web-sdk';


function App() {
  CleverTap.init({ accountId: 'Z44-Z4K-K65Z' });
  CleverTap.spa = true;
  
  return (
    <>
      <Form/>
    </>
  )
}

export default App
