import React, { Component } from "react";
import introcss from "./css/competitionsIntro.module.css";
import down_arrow from "./images/down_arrow.svg";
import { useRef } from "react";
const CompetitionsIntro = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <div className={introcss.container_comp}>
        <div className={introcss.text_comp}>
          <div className={introcss.heading_comp}>COMPETITIONS</div>
          <div className={introcss.description}>
            Alcheringa has many competitions spread across various genres. They
            take place during the three days with the prize distribution on the
            last day. People all over the country participate in these
            competitions to win exciting prizes and goodies and to witness one
            of India's biggest cultural festival.
          </div>
        </div>
        <img
          src={down_arrow}
          onClick={handleClick}
          className={introcss.down_arrow}
        />
      </div>
      <div ref={ref} style={{ marginBottom: "10vw" }}></div>
    </React.Fragment>
  );
};

export default CompetitionsIntro;
