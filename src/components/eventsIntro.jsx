import React, { Component } from "react";
import "./css/eventsIntro.css";
import down_arrow from "./images/down_arrow.svg";

class EventsIntro extends Component {
  render() {
    return (
      <div className="container">
        <div className="text">
          <div className="heading">EVENTS</div>
          <div className="description">
            Alcheringa has more than 80 events spread across various genres like
            fashion, music, art, sports, etc. They take place during the three
            days with the prize distribution on the last day. People from all
            over the country participate in these events to win exciting prizes
            and goodies.
          </div>
        </div>
        <img src={down_arrow} className="down-arrow" />
      </div>
    );
  }
}

export default EventsIntro;
