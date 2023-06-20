import React, { Component } from "react";
import "./css/eventsComponent.css";
import Carousel from "./Carousel";
import triangle from "./images/purple_triangle.svg";
import scissors from "./images/events_component_scissors.svg";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const onClickUrl = (url) => {
  console.log(url);
  return () => openInNewTab(url.link);
};

const EventsComponent = ({ images, title, link }) => {
  return (
    <div className="one_section" onClick={onClickUrl({ link })}>
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
