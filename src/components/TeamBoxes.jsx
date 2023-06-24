import React from "react";
import teambox from "../components/css/teamboxcss.module.css";
import TeamsOneBox from "./teamsOneBox";
import teams_r1 from "./images/teams_rectangle1.svg";
import teams_r2 from "./images/teams_rectangle2.svg";
import teams_r3 from "./images/teams_rectangle3.svg";
import teams_r4 from "./images/teams_rectangle4.svg";
import teams_r5 from "./images/teams_rectangle5.svg";
import teams_ptt from "./images/teams_pattern.svg";

function getBoxes(num) {
  const array = [];

  for (var i = 1; i <= num; i++) {
    array.push(
      <TeamsOneBox
        link="https://images.unsplash.com/photo-1512546148165-e50d714a565a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
        name="Bas hogaya"
        designation="yes"
        number="+-1231231"
        email="asdasd@gmail.com"
      />
    );
  }

  return array;
}
const TeamBoxes = () => {
  return (
    <>
      <main>
        <h1 className={teambox.hed}>Public Relations & Branding</h1>
        <div className={teambox.pr}>
          <img src={teams_r1} className={teambox.tr1} alt="" />
          <img src={teams_ptt} className={teambox.teams_ptt1} alt="" />
          {getBoxes(3)}
        </div>
        <h1 className={teambox.hed}>Corporate Relations & Marketing</h1>
        <div className={teambox.pr}>
          <img src={teams_r2} className={teambox.tr2} alt="" />
          <img src={teams_ptt} className={teambox.teams_ptt2} alt="" />
          {getBoxes(4)}
        </div>
        <h1 className={teambox.hed}>Events</h1>
        <div className={teambox.pr}>
          <img src={teams_r3} className={teambox.tr3} alt="" />
          <img src={teams_ptt} className={teambox.teams_ptt3} alt="" />
          {getBoxes(3)}
        </div>
        <h1 className={teambox.hed}>Creatives</h1>
        <div className={teambox.pr}>
          <img src={teams_r4} className={teambox.tr4} alt="" />
          <img src={teams_ptt} className={teambox.teams_ptt4} alt="" />
          {getBoxes(3)}
        </div>
        <h1 className={teambox.hed}>IITG MUN</h1>
        <div className={teambox.pr}>
          <img src={teams_ptt} className={teambox.teams_ptt5} alt="" />
          {getBoxes(2)}
        </div>
        <h1 className={teambox.hed}>
          <div className={teambox.for2heading}>Web Ops</div>
          <div className={teambox.for2heading}>App Ops</div>
        </h1>
        <div className={teambox.pr}>
          <img src={teams_r5} className={teambox.tr5} alt="" />
          {getBoxes(2)}
        </div>
        <h1 className={teambox.hed}>
          <div className={teambox.for2heading}>Convener</div>
          <div className={teambox.for2heading}>Finance head</div>
        </h1>
        <div className={teambox.pr}>
          <img src={teams_ptt} className={teambox.teams_ptt6} alt="" />
          <img src={teams_ptt} className={teambox.teams_ptt7} alt="" />
          {getBoxes(2)}
        </div>
      </main>
    </>
  );
};

export default TeamBoxes;
