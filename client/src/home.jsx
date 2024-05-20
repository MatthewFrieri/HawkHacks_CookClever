import React from 'react';
import stirfryImage from './assets/stir-fry.png';
import roastChickenImage from './assets/roastchicken.png';
import { useNavigate } from 'react-router-dom';
import burritoBowl from './assets/burritobowl.png';
import sandwich from './assets/sandwich.png';
import './home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleNext = () => {
      navigate('/stirfry');
    };

    return (
        <div className="container">
            <header>
                <input type="text" placeholder="Search..." className="searchBar" />
            </header>
            <main>
                <div className="grid">
                    <div className="content" onClick={handleNext}>
                        <img src={stirfryImage} alt="Picture of Stirfry" className="image" />
                        <p className="description">
                        This is a picture of a delicious Stirfry. This vegetarian stirfry mix is packed with vibrant vegetables.
                        </p>
                    </div>
                    <div className="content">
                        <img src={roastChickenImage} alt="Roast Chicken" className="image" />
                        <p className="description">
                            This is a picture of roast chicken. It's a well-loved dish, perfect for any occasion.
                        </p>
                    </div>
                    <div className="content">
                        <img src={burritoBowl} alt="Burrito Bowl" className="image" />
                        <p className="description">
                            This is a picture of a burrito bowl. A healthy and tasty choice for any meal.
                        </p>
                    </div>
                    <div className="content">
                        <img src={sandwich} alt="Sandwich" className="image" />
                        <p className="description">
                            This is a picture of a sandwich. Perfect for a quick and delicious snack.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
