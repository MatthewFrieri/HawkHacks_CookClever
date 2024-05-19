import { React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';
import './signup.css';

function Signup() {
  const navigate = useNavigate();


  const [usernameValue, setUsernameValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('')

  const handleSignup = () => {
    // Add signup logic here
    if (passwordValue == confirmPasswordValue) {

      fetch('http://127.0.0.1:5000/adduser', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({ usernameValue, passwordValue })
      }
    )
    .then((res) => res.json()
    .then((data) => {
    })
    );

    setUsernameValue('')
    setPasswordValue('')
    setConfirmPasswordValue('')
    navigate('/')

    }
  };

  return (
    <MDBContainer fluid className="signup-container">
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto signup-card'>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
              <p className="text-white-50 mb-5">Please enter your details to sign up!</p>
              <div className="input-wrapper mb-4 w-100">
                <MDBInput value={usernameValue} onChange={(e) => {setUsernameValue(e.target.value)}} labelClass='text-white' label='Username' id='formControlLgEmail' type='email' size="lg" />
              </div>
              <div className="input-wrapper mb-4 w-100">
                <MDBInput value={passwordValue} onChange={(e) => {setPasswordValue(e.target.value)}} labelClass='text-white' label='Password' id='formControlLgPassword' type='password' size="lg" />
              </div>
              <div className="input-wrapper mb-4 w-100">
                <MDBInput value={confirmPasswordValue} onChange={(e) => {setConfirmPasswordValue(e.target.value)}} labelClass='text-white' label='Confirm Password' id='formControlLgConfirmPassword' type='password' size="lg" />
              </div>
              <MDBBtn outline className='mx-2 px-5 signup-button' color='white' size='lg' onClick={handleSignup}>
                Sign Up
              </MDBBtn>
              <div>
                <p className="mb-0">
                  Already have an account? <a href="/" className="text-white-50 fw-bold">Login</a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
