import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_wrapper">
          <div className="footer_col heading_col">
            <h1 className="footer_logo">KAJI.</h1>
            <p>
              Book your trip in minute, get full
              <br />
              control for much longer.
            </p>
          </div>
          <div className="footer_col">
            <h1>Company</h1>
            <div className="footer_nav_links">
              <a href="" className="footer_link">
                About
              </a>
              <a href="" className="footer_link">
                Careers
              </a>
              <a href="" className="footer_link">
                Mobile
              </a>
            </div>
          </div>
          <div className="footer_col">
            <h1>Contact</h1>
            <div className="footer_nav_links">
              <a href="" className="footer_link">
                Help / FAQ
              </a>
              <a href="" className="footer_link">
                Press
              </a>
              <a href="" className="footer_link">
                Affiliates
              </a>
            </div>
          </div>
          <div className="footer_col">
            <h1>More</h1>
            <div className="footer_nav_links">
              <a href="" className="footer_link">
                Airline fees
              </a>
              <a href="" className="footer_link">
                Airline
              </a>
              <a href="" className="footer_link">
                Low fare tips
              </a>
            </div>
          </div>
          <div className="footer_col contact">
            <div className="social_links">
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaTwitter />
              </a>
            </div>
            <p className="discover">Discover our app</p>
            <div className="store">
              <img src="assets/footer/gitItOn.svg" alt="" />
              <img src="assets/footer/appStore.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="footer_rights">All rights reserved@jadoo.co</div>
      </div>
    </div>
  );
};
