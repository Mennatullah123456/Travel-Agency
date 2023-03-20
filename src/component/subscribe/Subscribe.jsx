import React from "react";
import "./subscribe.css";

export const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe_wrapper">
        <div className="subscribe_pane">
          <img src="assets/subscribe/subs_send_icon.png" className="send_image" alt="" />
          <img src="assets/subscribe/subs_bg.svg" className="plus_image" alt="" />
          <div className="subscribe_pannel">
            <div className="pannel_top">
              <h1>
                Subscribe to get information,
                latest news and other<br /> interesting
                
                offers about Cobham
              </h1>
            </div>
            <div className="pannel_bottom">
              <form action="" method="POST">
                <div className="email_input">
                  <img src="assets/subscribe/subs_email.svg" alt="" />
                  <input type="email" name="email" id="email" />
                </div>
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
