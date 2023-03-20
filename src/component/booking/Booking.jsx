import React from "react";
import "./booking.css";

export const Booking = () => {
  return (
    <div className="booking" id="booking">
      <div className="booking_wrapper">
        <div className="book_left">
          <div className="heading_2">
            <span>Easy and Fast</span>
            <h1>
              Book your Next Trip
              <br /> in 3 Easy steps
            </h1>
          </div>
          <div className="book_item_wrapper">
            <div className="book_item">
              <img src="assets/booking/booking_item_1.svg" alt="" />
              <div className="booking_desc">
                <h1>Choose Destination</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
          </div>
          <div className="book_item_wrapper">
            <div className="book_item">
              <img src="assets/booking/booking_item_2.svg" alt="" />
              <div className="booking_desc">
                <h1>Make Payment</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
          </div>
          <div className="book_item_wrapper">
            <div className="book_item">
              <img src="assets/booking/booking_item_3.svg" alt="" />
              <div className="booking_desc">
                <h1>Reach Airport on Selected Date</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="book_right">
          <div className="small_image">
            <img src="assets/booking/book_small_image.png" alt="" />
          </div>
          <div className="big_image">
            <img src="assets/booking/book_big_image.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
