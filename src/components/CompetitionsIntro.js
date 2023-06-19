import React, { Component } from "react";
import introcss from './competitionsIntro.module.css';
import down_arrow from "../assets/down_arrow.svg";
import Navbar from './Navbar.js'
const CompetitionsIntro = () =>{
    return (
        <>
      <div className={introcss.container}>
        <div className={introcss.text}>
          <div className={introcss.heading}>COMPETITIONS</div>
          <div className={introcss.description}>
          Alcheringa hosts several campaigns under Initiatives for cultural development and the betterment of society. These campaigns are conducted round the year to serve the mankind.
          </div>
        </div>
        <img src={down_arrow} className={introcss.downarrow }/>
      </div>
      </>
    );
  
}

export default CompetitionsIntro;



