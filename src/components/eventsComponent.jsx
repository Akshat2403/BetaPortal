import React, { Component } from "react";
import comp from "./css/eventsComponent.module.css";
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
    <div className={comp.one_section} onClick={onClickUrl({ link })}>
      <div className={comp.text_crsl}>
        <img src={scissors} className={comp.scissors} />
        <img src={triangle} className={comp.purple_tri} />
        <div className={comp.text_sub}>
          <div className={comp.heading_carousel}>{title}</div>
          <div className={comp.desc}>COLLECT YOUR TICKET FROM HERE</div>
        </div>

        <img src={triangle} className={`${comp.purple_tri} ${comp.pt_left}`} />
      </div>
      <Carousel images={images} />
    </div>
  );
};

export default EventsComponent;
