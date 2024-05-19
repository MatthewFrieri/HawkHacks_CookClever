import { React, useState, useEffect, useContext } from 'react';
import CameraComponent from './cameracomponent';
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
import { MyContext } from './MyContext';
import './login.css';

function Login() {

  const [usernameValue, setUsernameValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [isValidLogin, setIsValidLogin] = useState(false)

  const { userId, setUserId } = useContext(MyContext);

  useEffect(() => {
    if (isValidLogin) {
      handleLogin();
      setIsValidLogin(false)
      setUsernameValue('')
      setPasswordValue('')
    }
  },[isValidLogin])


  function handleLoginClick() {

    // call the db and check if the credentials are valid
    fetch('http://127.0.0.1:5000/authentication', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({ usernameValue, passwordValue })
      }
    )
    .then((res) => res.json()
    .then((isValid) => {
      // isValid is either false or the user's id
      if (isValid) {
        setUserId(isValid)
        setIsValidLogin(true)
      }
      else {
        setUserId('')
        setIsValidLogin(false)
      }
    })
    );
  }


  function assign_user_id(userId) {
    setUserId(userId)
  }

  const navigate = useNavigate();

  const handleLogin = () => {
    // Add login logic here
    navigate('/home');
  };

  return (
    <MDBContainer fluid className="login-container">
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto login-card'>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              <MDBInput value={usernameValue} onChange={(e) => {setUsernameValue(e.target.value)}} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlLg' type='email' size="lg" />
              <MDBInput value={passwordValue} onChange={(e) => {setPasswordValue(e.target.value)}} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />
              <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn onClick={handleLoginClick} outline className='mx-2 px-5' color='white' size='lg'>
                Login
              </MDBBtn>
              <div className='d-flex flex-row mt-3 mb-5 social-buttons'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg" />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg" />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg" />
                </MDBBtn>
              </div>
              <div>
                <p className="mb-0">
                  Don't have an account? <a href="/signup" className="text-white-50 fw-bold">Sign Up</a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
