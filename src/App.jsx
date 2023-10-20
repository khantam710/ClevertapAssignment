import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import SignupForm from './components/SignUpForm';
import Form from './components/form';
import CleverTap from 'clevertap-web-sdk';


function App() {
  CleverTap.init({ accountId: 'Z44-Z4K-K65Z' });
  CleverTap.spa = true;
  
  return (
    <>
      {/* <SignupForm/> */}
      <Form/>
    </>
  )
}

export default App
