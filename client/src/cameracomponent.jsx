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

  const [isAnalyze, setIsAnalyze] = useState(false);

  const webcamRef = useRef(null);

  const openCamera = () => {
    setIsCameraOpen(true);
  };

  const sendAnalysis = () => {
    setIsAnalyze(prev => !prev)
  }

  useEffect(() => {
    analyzeImage()
  },[isAnalyze])

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
        [stepNumber]: [data.feedback, data.points]
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
    <div className='camera-container'>
      {!isCameraOpen && !capturedPhoto && (
        <div
          style={{
            width: '80vw',
            minHeight: '20vh',
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
        <div className='webcam-active' onClick={capturePhoto}>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            style={{ width: '80vw', display: 'flex', top: '15vh'}}
            mirrored={true}
          />
        </div>
      )}

      {capturedPhoto && !isCameraOpen && (
        <div>
          <img style={{ width: '80vw', display: 'flex', top: '15vh'}} src={capturedPhoto} alt="Captured" onClick={() => setCapturedPhoto(null)}/>
        </div>
      )}

      <div className=''>
        <button className='Analyze' onClick={sendAnalysis}>
          Analyze Image using A.I
        </button>
      </div>
    </div>
  );
};

export default CameraComponent;
