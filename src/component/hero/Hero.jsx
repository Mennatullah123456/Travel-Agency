import React from "react";
import "./hero.css"

export const Hero = () => {
  return (
    <div className="home_page">
      <div className="home_content">
        <div className="home_text">
          <div className="top_text">
            <span>BEST DESTINATIONS AROUND THE WORLD</span>
          </div>
          <h1>
            Travel, <span className="enjoy_word">enjoy</span>
            <br /> and live a new
            <br />
            and full life
          </h1>
          <div className="bottom_text">
            <p>
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
          </div>

          <div className="home_buttons">
            <a href="">Find out more</a>
            <span className="play_demo">
              <img src="assets/home/playBtn.svg" alt="" />
              <a href="">Play Demo</a>
            </span>
          </div>
        </div>
        <div className="home_image">
          <img src="assets/home/home_image.png" alt="" />
        </div>
      </div>
    </div>
  );
};
