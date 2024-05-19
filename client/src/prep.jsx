import React from 'react';
import pastaImage from './assets/pasta.png';
import CameraComponent from './cameracomponent';
import { useNavigate } from 'react-router-dom';

const Prep = () => {

    const navigate = useNavigate();
    
    const handleNext = () => {
        navigate('/pasta');
    };
    
  return (
    <>
        <button onClick={handleNext}>
            Back
        </button>
        <CameraComponent/>
    </>
  );
};

export default Prep;