import {React, useContext} from 'react';
import CameraComponent from './cameracomponent';
import { useNavigate } from 'react-router-dom';
import { FeedbackContext } from './MyContext';
import './lesson.css'

const Lesson = () => {

    const navigate = useNavigate();

    const sec2Ref = useRef(null);
    
    const handleBack = () => {
        navigate('/stirfry');
    };

    const handleNext = () => {
        ref.current.scrollIntoView({ behaviour: 'smooth', block: 'start'})
    }

    const { feedback, setFeedback } = useContext(FeedbackContext);

    const Requirements = {
        one: 'The ingredients should be aligned.',
        two: 'chop em up',
        three: 'boil em away'
    }

    // console.log(Requirements.Prep);
    
  return (
        <div className='lesson-container'>
            <div className='prep-container'>
                <div className='preparation-header'>
                    <button className='prep-back-button' onClick={handleBack}>
                        <i class="fa-solid fa-2x fa-arrow-left"></i>
                    </button>
                    <h1>Preparation</h1>
                    <div className='prep-points'>

                    </div>
                </div>
                <div className='prep-ingre-tools'>
                    <div className='prep-ingredients'>
                        <h2>Ingredient Prep</h2>
                        <li>(2 stocks) Broccoli</li>
                        <li>(1x) Red Pepper</li>
                        <li>(1 can) Baby Corn</li>
                        <li>(x2) Chicken Breasts</li>
                    </div>
                    <div className='prep-tools'>
                        <h2>Ingredient Prep</h2>
                        <li>(2 stocks) Broccoli</li>
                        <li>(1x) Red Pepper</li>
                        <li>(1 can) Baby Corn</li>
                        <li>(x2) Chicken Breasts</li>
                    </div>
                </div>
                
                <div className='prep-instructions'>
                    <p>
                        Cooking Instructions: Gather all the ingredients and tool listed above, and prepare a clean works space. 
                    </p>
                    <b />       
                    <p>
                        Image Instructions: Take a picture of all your ingredients and tools lined up and click th analyze button to see how you did.
                    </p>
                </div>
                <div className='prep-camera-component'>
                    <CameraComponent req={Requirements.one} stepNumber='one' 
                    />
                </div>
                <div className='prep-results'>
                    <p className='aa'>Results:</p>
                    <p>{feedback.one}</p>
                </div>
                
                <div className='prep-footer'>
                    <button className='prep-back-button' onClick={handleNext}>
                        <i class="fa-solid fa-2x fa-arrow-down"></i>
                    </button>
                </div>
                
            </div>

            <div className='sec2-container' ref={sec2Ref}>
                <div className='preparation-header'>
                    <button className='prep-back-button' onClick={handleBack}>
                        <i class="fa-solid fa-2x fa-arrow-left"></i>
                    </button>
                    <h1>Preparation</h1>
                </div>
            </div>
        </div>    
  );
};

export default Lesson;
