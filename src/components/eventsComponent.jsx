import React, { Component } from "react";
import "./css/eventsComponent.css";
import Carousel from "./Carousel";
import triangle from "./images/purple_triangle.svg";
import scissors from "./images/events_component_scissors.svg";

const EventsComponent = ({ images, title }) => {
  return (
    <div className="one_section">
      <div className="text-crsl">
        <img src={scissors} className="scissors" />
        <img src={triangle} className="purple-tri" />
        <div className="text_sub">
          <div className="heading-carousel">{title}</div>
          <div className="desc">COLLECT YOUR TICKET FROM HERE</div>
        </div>

        <img src={triangle} className="purple-tri pt-left" />
      </div>
      <Carousel images={images} />
    </div>
  );
};

export default EventsComponent;
