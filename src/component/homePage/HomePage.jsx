import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Booking } from "../booking/Booking";
import { Category } from "../category/Category";
import { Destinations } from "../destinations/Destinations";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Hero } from "../hero/Hero";
import { Logos } from "../logos/Logos";
import { Subscribe } from "../subscribe/Subscribe";
import { Testimonials } from "../testimonials/Testimonials";
import "./homePage.css";

export const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Hero/>
      <Category/>
      <Destinations/>
      <Booking/>
      <Logos/>
      <Subscribe/>
      <Footer/>
    </Fragment>
  );
};
