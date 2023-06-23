import React from "react";
import teambox from "../components/css/teamboxcss.module.css";
import TeamsOneBox from "./teamsOneBox";

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
        <h1>Public Relations & Branding</h1>
        <div className={teambox.pr}>{getBoxes(3)}</div>
        <h1>Corporate Relations & Marketing</h1>
        <div className={teambox.pr}>{getBoxes(4)}</div>
        <h1>Events</h1>
        <div className={teambox.pr}>{getBoxes(3)}</div>
        <h1>Creatives</h1>
        <div className={teambox.pr}>{getBoxes(3)}</div>
        <h1>IITG MUN</h1>
        <div className={teambox.pr}>{getBoxes(2)}</div>
        <h1 className={teambox.pr}>
          <div className={teambox.for2heading}>Web Ops</div>
          <div className={teambox.for2heading}>App Ops</div>
        </h1>
        <div className={teambox.pr}>{getBoxes(2)}</div>
        <h1 className={teambox.pr}>
          <div className={teambox.for2heading}>Convener</div>
          <div className={teambox.for2heading}>Finance head</div>
        </h1>
        <div className={teambox.pr}>{getBoxes(2)}</div>
      </main>
    </>
  );
};

export default TeamBoxes;
