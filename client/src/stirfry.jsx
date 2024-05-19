import React from 'react';
import { useNavigate } from 'react-router-dom';
import stirfryImage from './assets/stir-fry.png';
import './stirfry.css';

const Stirfry = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/home');
    };

    const handleNext = () => {
        navigate('/lesson');
    };

    return (
        <div className="container">
            <header>
                <button className='prep-back-button' onClick={handleBack}>
                        <i class="fa-solid fa-2x fa-arrow-left"></i>
                    </button>
                <h1 className="title">Vegetarian Stirfry Mix</h1>
            </header>
            <div className="top-section">
                <img src={stirfryImage} alt="Stirfry" className="stirfry-image" />
                <div className="nutritional-facts">
                    <p>Calories: 330</p>
                    <p>Vitamins: A, B, C</p>
                    <p>Proteins: 10g</p>
                    <p>Carbohydrates: 55g</p>
                </div>
            </div>
            <div className="bottom-section">
                <div className="ingredients">
                    <h2>Ingredients</h2>
                    <ul>
                        <li>Pasta</li>
                        <li>Tomato Sauce</li>
                        <li>Garlic</li>
                        <li>Olive Oil</li>
                        <li>Basil</li>
                        <li>Parmesan Cheese</li>
                    </ul>
                </div>
                <div className="utensils">
                    <h2>Cooking Utensils</h2>
                    <ul>
                        <li>Pot</li>
                        <li>Pan</li>
                        <li>Knife</li>
                        <li>Cutting Board</li>
                        <li>Strainer</li>
                    </ul>
                </div>
            </div>
            <div className='start-button'>
                <button onClick={handleNext} className="next-button">Start</button>
            </div>
            
        </div>
    );
};

export default Stirfry;
