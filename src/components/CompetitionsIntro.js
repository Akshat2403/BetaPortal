import React, { Component } from "react";
import introcss from "./css/competitionsIntro.module.css";
import down_arrow from "./images/down_arrow.svg";
import Navbar from "./Navbar.js";
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
            Alcheringa hosts several campaigns under Initiatives for cultural
            development and the betterment of society. These campaigns are
            conducted round the year to serve the mankind.
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
