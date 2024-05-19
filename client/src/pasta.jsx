import React, { useNavigate, useState, useRef, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';

const Pasta = () => {
  
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/prep');
    };

  return (
    <div>
        <button onClick={handleNext}>
            Next
          </button>
    </div>
  );
};

export default Pasta;
