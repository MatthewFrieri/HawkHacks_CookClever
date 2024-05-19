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
    <div id="big-container">
      <header>
        <h2>Sign Up</h2>
      </header>
      <div id="square-box">
        <p>Please enter your details to sign up!</p>
        <span>
          <p>Username</p>
          <input value={usernameValue} onChange={(e) => {setUsernameValue(e.target.value)}} />
        </span>
        <span>
          <p>Password</p>
          <MDBInput value={passwordValue} onChange={(e) => {setPasswordValue(e.target.value)}} type='password' />
        </span>
        <span>
          <p>Confirm Password</p>
          <MDBInput value={confirmPasswordValue} onChange={(e) => {setConfirmPasswordValue(e.target.value)}} type='password' />
        </span>
        <button onClick={handleSignup}>Sign Up</button>
      </div>
      <div>
        <p>
          Already have an account? <a href="/" >Login</a>
        </p>
      </div>
    </div>
  
  );
}

export default Signup;
