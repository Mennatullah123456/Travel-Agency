import React from "react";
import "./category.css";

export const Category = () => {
  return (
    <div className="category" id="category">
      <div className="category_wrapper">
        <div className="heading_1">
          <span>Category</span>
          <h1 className="section_title">We Offer Best Services</h1>
        </div>
        <div className="category_cards">
          <div className="card_wrapper">
            <div className="card">
              <img
                src="assets/category/card_image_1.svg"
                alt=""
                className="card_image"
              />
              <h2>Calculated Weather</h2>
              <p>
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </div>
            <img className="card_back_image" src="assets/category/cards_bg.svg" alt="" />
          </div>
          <div className="card_wrapper">
            <div className="card">
              <img
                src="assets/category/card_image_2.svg"
                alt=""
                className="card_image"
              />
              <h2>Best Flights</h2>
              <p>Engrossed listening. Park gate sell they west hard for the.</p>
            </div>
            <img className="card_back_image" src="assets/category/cards_bg.svg" alt="" />
          </div>
          <div className="card_wrapper">
            <div className="card">
              <img
                src="assets/category/card_image_4.svg"
                alt=""
                className="card_image"
              />
              <h2>Local Events</h2>
              <p>
                Barton vanity itself do in it. Prefferd to men it engrossed
                listening.
              </p>
            </div>
            <img className="card_back_image" src="assets/category/cards_bg.svg" alt="" />
          </div>
          <div className="card_wrapper">
            <div className="card">
              <img
                src="assets/category/card_image_4.svg"
                alt=""
                className="card_image"
              />
              <h2>Customization</h2>
              <p>
                We deliver outsourced <br />
                aviation services for
                <br />
                military customers
                <br />
              </p>
            </div>
            <img className="card_back_image" src="assets/category/cards_bg.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
