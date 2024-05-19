import { React, useState, useEffect, useContext } from 'react';
import CameraComponent from './cameracomponent';
import { useNavigate } from 'react-router-dom';
import tomato from './assets/tomato.png'
import lettuce from './assets/lettuce.png'
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
import { MyContext, PointsContext } from './MyContext';
import './login.css';

function Login() {

  const [usernameValue, setUsernameValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [isValidLogin, setIsValidLogin] = useState(false)

  const { userId, setUserId } = useContext(MyContext);
  const { userPoints, setUserPoints } = useContext(PointsContext)

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
        getuserpoints(isValid)
      }
      else {
        setUserId('')
        setIsValidLogin(false)
      }
    })
    );
  }

  function getuserpoints(userId) {

    console.log('user id issss:' + userId);
    fetch('http://127.0.0.1:5000/getuserpoints', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
      }, 
      body: JSON.stringify({ userId })
      }
    )
    .then((res) => res.json()
    .then((points) => {
      console.log('i have this many points: ' + points);
      setUserPoints(points)
      // console.log(data);
    })
    );

  }



  const navigate = useNavigate();

  const handleLogin = () => {
    // Add login logic here
    navigate('/home');
  };

  return (

    <div id="container">
      <div className="back"></div>
      <img id='tomato' src={tomato} alt="" />
      <img id='lettuce' src={lettuce} alt="" />
      <header>
        <h1>Login</h1>
      </header>

      <div id="square-container">
        <p id='msg'>Please enter your login and password!</p>

        <span className='loginspan'>
          <p>Username</p>
          <input value={usernameValue} onChange={(e) => {setUsernameValue(e.target.value)}}/>
        </span>
        <span className='loginspan'>
          <p>Password</p>
          <MDBInput value={passwordValue} onChange={(e) => {setPasswordValue(e.target.value)}} type='password' />
        </span>
        <button id="btn1" onClick={handleLoginClick}>Login</button>
        <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>


     
    </div>
  );
}

export default Login;
