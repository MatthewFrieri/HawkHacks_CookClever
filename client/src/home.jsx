import React from 'react';
import pastaImage from './assets/pasta.png';
import roastChickenImage from './assets/roastchicken.png';
import { useNavigate } from 'react-router-dom';
import burritoBowl from './assets/burritobowl.png';
import sandwich from './assets/sandwich.png';
import './home.css'; // Make sure to import the CSS file

const Home = () => {

    const navigate = useNavigate();

    const handleNext = () => {
      navigate('/pasta');
    };

  return (
    
    <div className="container">
      <header>
        <button className="homeButton" onClick={() => window.location.href = '/'}>
          Log Out
        </button>
      </header>
      <main>
        <div className="grid">
          <div className="content">
            <img src={pastaImage} alt="Picture of pasta" className="image" />
            <p className="description">
              This is a picture of a delicious pasta. It's a traditional dish with a rich history and amazing taste.
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
          <button onClick={handleNext}>
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;