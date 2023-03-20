import React from "react";
import "./destinations.css";

export const Destinations = () => {
  return (
    <div className="destinations" id="destinations">
      <div className="destinations_wrapper">
        <div className="heading_1 ">
          <span>Top Selling</span>
          <h1 className="section_title">Top Destinations</h1>
        </div>
        <div className="destinations_cards">
          <div className="card_wrapper">
            <a href="" className="card">
              <img src="assets/destinations/roma.jpg" alt="" className="des_image" />
              <div className="card_info">
                <div className="card_loc_peice">
                  <span>Rome, Italy</span>
                  <span>$5.42k</span>
                </div>
                <div className="card_trip">
                  <img src="assets/destinations/send 2.svg" alt="" className="trip_image" />
                  <span>10 days trip</span>
                </div>
              </div>
            </a>
          </div>
          <div className="card_wrapper">
            <a href="" className="card">
              <img src="assets/destinations/london.jpg" alt="" className="des_image" />
              <div className="card_info">
                <div className="card_loc_peice">
                  <span>London, UK</span>
                  <span>$4.2k</span>
                </div>
                <div className="card_trip">
                  <img src="assets/destinations/send 2.svg" alt="" className="trip_image" />
                  <span>12 days trip</span>
                </div>
              </div>
            </a>
          </div>
          <div className="card_wrapper">
            <a href="" className="card">
              <img src="assets/destinations/europe.jpg" alt="" className="des_image" />
              <div className="card_info">
                <div className="card_loc_peice">
                  <span>Full Europe</span>
                  <span>$15k</span>
                </div>
                <div className="card_trip">
                  <img src="assets/destinations/send 2.svg" alt="" className="trip_image" />
                  <span>28 days trip</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
