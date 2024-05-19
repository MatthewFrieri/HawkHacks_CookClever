import {React, useContext, useRef} from 'react';
import CameraComponent from './cameracomponent';
import { useNavigate } from 'react-router-dom';
import { FeedbackContext, PointsContext } from './MyContext';
import './lesson.css'

const Lesson = () => {

    const navigate = useNavigate();

    const sec2ref = useRef(null);
    
    const handleBack = () => {
        navigate('/stirfry');
    };

    const handleNext = () => {
        window.scrollTo({top: sec2ref.current.offsetTop, behavior: 'smooth'});
    }

    const { feedback, setFeedback } = useContext(FeedbackContext);
    const { userPoints, setUserPoints } = useContext(PointsContext)
   

    const Requirements = {
        one: 'The image should contain the ingredients following: broccoli, red pepper, chicken breasts, baby corn, and carrots. The image should also contain the following tools: Knife, Cutting board, Bowls/containters. In the image, ALL the ingredients and tools listed visible and must clearly match all the ingredients and tools provided.',
        two: 'The image should contain a pile of thinly slice carrots that are bit sized. The image should also contain diced onions that have been cut in such a manner. These two piles should be place seperate bowls. Comment on the images accuracy to this.',
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
                        <p>Points: {userPoints}</p>
                    </div>
                </div>
                <div className='prep-ingre-tools'>
                    <div className='prep-ingredients'>
                        <h3>Ingredient Prep</h3>
                        <li>(2x) Broccoli</li>
                        <li>(1x) Red Pepper</li>
                        <li>(1x) Baby Corn</li>
                        <li>(x2) Carrots</li>
                    </div>
                    <div className='prep-tools'>
                        <h3>Tools</h3>
                        <li>Knife</li>
                        <li>Cutting Board</li>
                        <li>Bowls/Containers</li>
                    </div>
                </div>
                
                <div className='prep-instructions'>
                    <p>
                        Cooking Instructions: Gather all the ingredients and tool listed above, and prepare a clean works space.
                    </p>
                    <b />       
                    <p>
                        Image Instructions: Take a picture of all your ingredients and tools lined up and click the analyze button to see how you did.
                    </p>
                </div>
                <div className='prep-camera-component'>
                    <CameraComponent req={Requirements.one} stepNumber='one' 
                    />
                </div>
                
                {
                (feedback.one[0]) !== '' 
                ? <div className='prep-results'>
                    <p className='aa'>Results:</p>
                    <p>{feedback.one[0]} You earned {feedback.one[1]} points!</p>
                    </div> 
                :
                    null
                }
                
                
                <div className='prep-footer'>
                    <h2>Next Step!</h2>
                    <button className='prep-back-button' onClick={handleNext}>
                        <i class="fa-solid fa-2x fa-arrow-down"></i>
                    </button>
                </div>
                
            </div>

            <div className='sec2-container' ref={sec2ref}>
                <div className='preparation-header'>
                    <button className='prep-back-button' onClick={handleBack}>
                        <i class="fa-solid fa-2x fa-arrow-left"></i>
                    </button>
                    <h1>Chopping</h1>
                </div>
                <div className='prep-ingre-tools'>
                    <div className='prep-ingredients'>
                        <h3>Ingredient Prep</h3>
                        <li>(2x) Onion</li>
                        <li>(x2) Carrots</li>
                    </div>
                    <div className='prep-tools'>
                        <h3>Tools</h3>
                        <li>Knife</li>
                        <li>Cutting Board</li>
                        <li>Bowls/Containers</li>
                    </div>
                </div>
                
                <div className='prep-instructions'>
                    <p>
                        Chopping Instructions: Cut the carrots in to thin slices that are bite size and place them in to a bowl. Dice the onions into a pill and place them in to a bowl aswell. 
                    </p>
                    <b />       
                    <p>
                        Image Instructions: Take a picutre of you work for analysis.
                    </p>
                </div>
                <div className='prep-camera-component'>
                    <CameraComponent req={Requirements.two} stepNumber='two' 
                    />
                </div>
                {
                (feedback.two[0]) !== '' 
                ? <div className='prep-results'>
                    <p className='aa'>Results:</p>
                    <p>{feedback.two[0]} You earned {feedback.two[1]} points!</p>
                    </div> 
                :
                    null
                }
            </div>
        </div>    
  );
};

export default Lesson;
