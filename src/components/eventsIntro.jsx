import React, { Component } from "react";
import styles from "./css/eventsIntro.module.css";
import down_arrow from "./images/down_arrow.svg";
import { useRef } from "react";

function EventsIntro() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <div className={styles.container_comp}>
        <div className={styles.text_comp}>
          <div className={styles.heading_comp}>EVENTS</div>
          <div className={styles.description}>
            Alcheringa has more than 80 events spread across various genres like
            fashion, music, art, sports, etc. They take place during the three
            days in which many events take place which includes panel
            discussions with various famous creators, informal activities like
            hot air balloon, ATV rides, paint ball shoot etc.
          </div>
        </div>
        <img
          src={down_arrow}
          onClick={handleClick}
          className={styles.down_arrow}
        />
      </div>
      <div ref={ref} style={{ marginBottom: "10vw" }}></div>
    </React.Fragment>
  );
}

export default EventsIntro;
