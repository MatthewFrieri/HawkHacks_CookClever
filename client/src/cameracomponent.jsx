import React, { useState, useRef, useCallback, useEffect, useContext } from 'react';
import Webcam from 'react-webcam';
import { MyContext, FeedbackContext } from './MyContext';

const CameraComponent = (
  {req, stepNumber}
) => {
  
  const { userId, setUserId } = useContext(MyContext);
  const { feedback, setFeedback } = useContext(FeedbackContext);


  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [imageData, setImageData] = useState({
    imageSrc: '',
    imageRequirements: ''
    });

  const webcamRef = useRef(null);


  const openCamera = () => {
    setIsCameraOpen(true);
  };

  useEffect(() => {
    analyzeImage()
  },[imageData])
  
  const capturePhoto = useCallback(() => {
    const imagebase64 = webcamRef.current.getScreenshot();
    setCapturedPhoto(imagebase64);
    setImageData({imageSrc: imagebase64, imageRequirements: req})
    setIsCameraOpen(false);
  }, [webcamRef]);

  function analyzeImage() {
    fetch('http://127.0.0.1:5000/imageanalysis', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({ imageData })
      }
    )
    .then((res) => res.json()
    .then((data) => {
      console.log(data);
      // NOW DO SOMETHING WITH IT

      // update the right feedback
      setFeedback(prevState => ({
        ...prevState,
        [stepNumber]: data.feedback
      }))

      // give points to the user
      givePoints(data.points)
    })
    );
  }

  function givePoints(points) {

    console.log("USERID AND POINTS: " + userId, points);
    fetch('http://127.0.0.1:5000/adduserpoints', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
      }, 
      body: JSON.stringify({ userId, points })
      }
    )
    .then((res) => res.json()
    .then((data) => {
        console.log(points + 'points added!');      
    })
    );

  }

  return (
    <div>
      {!isCameraOpen && !capturedPhoto && (
        <div
          style={{
            width: '300px',
            height: '200px',
            border: '2px solid black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          onClick={openCamera}
        >
          Click to open camera
        </div>
      )}

      {isCameraOpen && (
        <div style={{ position: 'relative' }}>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            style={{ width: '100vw', height: '100vh' }}
          />
          <button className='camera-button'
            onClick={capturePhoto}>
            Capture
          </button>
        </div>
      )}

      {capturedPhoto && !isCameraOpen && (
        <div>
          <img src={capturedPhoto} alt="Captured" />
          <button onClick={() => setCapturedPhoto(null)}>Retake Photo</button>
        </div>
      )}
    </div>
  );
};

export default CameraComponent;
