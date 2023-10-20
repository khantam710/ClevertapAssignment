import React, { useRef, useState } from 'react';
import CleverTap from 'clevertap-web-sdk';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import the styles for the toast notifications
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBRow,
  MDBCol
}
from 'mdb-react-ui-kit';

const Form = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  
  const formRef = useRef(null)
  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setDob('');
  };

  
    // Login
  const handleLogin = (e) => {
    e.preventDefault();
    CleverTap.onUserLogin.push({
      Site: {
        Name: name,
        Email: email,
        Phone: phone,
        DOB: new Date(dob)
      }
    });

    toast.success('Login successful!', {
        position: "top-center", // Set the position of the toast notification
        autoClose: 2000, // Auto close the toast after 2 seconds (2000 milliseconds)
        hideProgressBar: true, // Hide the progress bar of the toast
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: false, // Pause the toast duration when hovered
      });
      resetForm();
  };

    // Profile Push
    const handleProfilePush = (e) => {
        e.preventDefault();
        CleverTap.profile.push({
          Site: {
            Name: name,
            Email: email,
            Phone: phone,
            DOB: new Date(dob)
          }
        });
        toast.success('Profile Push successful!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
          });
          resetForm();
      };

    //   Notifications Push
    const handleAskForPush = (e) => {
        e.preventDefault();
    console.log("ask for push");
        
        // Send push notification to the user
        CleverTap.notifications.push({
          titleText: 'Would you like to receive Push Notifications?',
          bodyText: 'We promise to only send you relevant content and give you updates on your transactions',
          okButtonText: 'Sign me up!',
          rejectButtonText: 'No thanks',
          askAgainTimeInSeconds: 5,
          okButtonColor: '#f28046'
        });
        // CleverTap.notificationCallback = notificationCallback;
      };

    //   Handle Raise Event of Users
      const handleRaiseEvent = (e) => {
        e.preventDefault();
        CleverTap.event.push('Details of Person', {
          Name: name,
          Email: email,
          Phone: phone,
          DOB: new Date(),
        });
        toast.success('Event Raised!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
          });
          resetForm();
      };
    

  return (
    <MDBContainer fluid className='bg'>
      {/* <div className='mask gradient-custom-3'></div> */}
      <form ref={formRef}>
      <MDBRow className='d-flex align-items-center justify-content-center'>
        <MDBCol className='d-none d-md-block animated-image'>
            <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" className='img-fluid' alt="" />
        </MDBCol>

        <MDBCol className='animated-div'>
          <h2 className="text-uppercase text-center mb-5">CLEVERTAP SIGNUP FORM</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' value={name} onChange={(e) => setName(e.target.value)} type='text'/>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' value={email} onChange={(e) => setEmail(e.target.value)} type='email'/>
          <MDBInput wrapperClass='mb-4' label='Date of Birth' size='lg' value={dob} onChange={(e) => setDob(e.target.value)} type='date'/>
          <MDBInput wrapperClass='mb-4' label='Contact Number' size='lg' value={phone} onChange={(e) => setPhone(e.target.value)} type=''/>

          <div className='d-flex align-items-center justify-content-center'>
          <MDBBtn className="ms-2 custom-btn" color="warning" size="lg" noRipple onClick={handleLogin}>Login</MDBBtn>
          <MDBBtn className="ms-2 custom-btn" color="warning" size="lg" noRipple onClick={handleProfilePush}>Profile Push </MDBBtn>
          <MDBBtn className="ms-2 custom-btn" color="warning" size="lg" noRipple onClick={handleAskForPush}>Ask For Push</MDBBtn>
          <MDBBtn className="ms-2 custom-btn" color="warning" size="lg" noRipple onClick={handleRaiseEvent}>Raise Event</MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
      </form>
      <ToastContainer/>
    </MDBContainer>
  );
}

export default Form;