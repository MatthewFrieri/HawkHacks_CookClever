import React from 'react';
import pastaImage from './assets/pasta.png';
import roastChickenImage from './assets/roastchicken.png'; 

const Home = () => {
  return (
    <div className="container">
      <header>
        <button className="homeButton" onClick={() => window.location.href = '/'}>
          Home
        </button>
      </header>
      <main>
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
      </main>
    </div>
  );
};

export default Home;