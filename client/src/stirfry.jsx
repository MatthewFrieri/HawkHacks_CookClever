import React from 'react';
import { useNavigate } from 'react-router-dom';
import pastaImage from './assets/pasta.png';
import './stirfry.css';

const Stirfry = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/lesson');
    };

    return (
        <div className="container">
            <h1 className="title">Classic Italian Pasta</h1>
            <div className="top-section">
                <img src={pastaImage} alt="Pasta" className="pasta-image" />
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
            <button onClick={handleNext} className="next-button">
                Next
            </button>
        </div>
    );
};

export default Stirfry;
