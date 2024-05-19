import React from 'react';
import CameraComponent from './cameracomponent';
import { useNavigate } from 'react-router-dom';
import './lesson.css'

const Lesson = () => {

    const navigate = useNavigate();
    
    const handleBack = () => {
        navigate('/stirfry');
    };

    const handleNext = () => {

    }

    const Requirements = {
        Prep: 'The ingredients should be aligned.',
        Chop: '',
        Boil: '',
    }
    
  return (
        <div className='lesson-container'>
            <div className='prep-container'>
                <div className='preparation-header'>
                    <button className='prep-back-button' onClick={handleBack}>
                        <i class="fa-solid fa-2x fa-arrow-left"></i>
                    </button>
                    <h1>Preparation</h1>
                </div>
                <div className='prep-ingre-tools'>
                    <div className='prep-ingredients'>
                        <h2>Ingredient Prep</h2>
                        <li>(2 stocks) Broccoli</li>
                        <li>(1x) Red Pepper</li>
                        <li>(1 can) Baby Corn</li>
                        <li>(x2) Chicken Breasts</li>
                    </div>
                    <div className='pre'>

                    </div>
                </div>
                
                <div className='prep-camera-component'>
                    <CameraComponent 
                    req = {Requirements.Prep}
                    />
                </div>
                <div className='prep-footer'>
                    <button className='prep-back-button' onClick={handleNext}>
                        <i class="fa-solid fa-2x fa-arrow-down"></i>
                    </button>
                </div>
                
            </div>
            
        </div>    
  );
};

export default Lesson;