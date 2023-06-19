import React, { Component } from "react";
import "./css/eventsIntro.css";
import down_arrow from "./images/down_arrow.svg";
import { useRef } from "react";

function EventsIntro() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <div className="container-comp">
        <div className="text-comp">
          <div className="heading-comp">EVENTS</div>
          <div className="description">
            Alcheringa has more than 80 events spread across various genres like
            fashion, music, art, sports, etc. They take place during the three
            days with the prize distribution on the last day. People from all
            over the country participate in these events to win exciting prizes
            and goodies.
          </div>
        </div>
        <img src={down_arrow} onClick={handleClick} className="down-arrow" />
      </div>
      <div ref={ref} style={{ marginBottom: "10vw" }}></div>
    </React.Fragment>
  );
}

export default EventsIntro;
