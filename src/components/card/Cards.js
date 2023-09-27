import React from "react";
import "./Cards.css";
import Card from './Card'

const Cards = () => {
  return (
    <div className="cards">
      <h1>Discover Your Next Journey</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Card
              src="images/img-9.jpg"
              text="Uncover Amazon's Hidden Waterfall"
              label="Adventure"
              path="/services"
            />
            <Card
              src="images/img-2.jpg"
              text="Sail the Islands of Bali on a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="card__items">
            <Card
              src="images/img-3.jpg"
              text="Set Sail in the Uncharted Atlantic Ocean"
              label="Mystery"
              path="/services"
            />
            <Card
              src="images/img-4.jpg"
              text="Football at the Peak: Himalayan Adventure"
              label="Adventure"
              path="/products"
            />
            <Card
              src="images/img-8.jpg"
              text="Guided Camel Tours: Sahara Desert Adventures"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
