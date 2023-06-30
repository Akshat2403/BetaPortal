import React from "react";
import teambox from "../components/css/teamboxcss.module.css";
import TeamsOneBox from "./teamsOneBox";
import teams_r1 from "./images/teams_rectangle1.svg";
import teams_r2 from "./images/teams_rectangle2.svg";
import teams_r3 from "./images/teams_rectangle3.svg";
import teams_r4 from "./images/teams_rectangle4.svg";
import teams_r5 from "./images/teams_rectangle5.svg";
import teams_ptt from "./images/teams_pattern.svg";
import conv from "./images/conv.jpg";
import fh from "./images/Sabir.jpg";
import abhinav from "./images/Abhinav.jpg";
import Sushant from "./images/Sushant.jpg";
import virat from "./images/Virat.jpg";
import swapnil from "./images/Swapnil.jpg";
import ankit from "./images/ankit.jpg";
import shanta from "./images/Shantanu.jpg";
import priya from "./images/Priyanshu.jpg";
import prath from "./images/Pratham.jpg";
import rachit from "./images/rachit.png";

// import akshat from "./images/akshat.jpg";
function getBoxesEvents(num) {
  const array = [];

  array.push(
    <TeamsOneBox
      link={abhinav}
      name="Abhinav Pratap Singh "
      designation="Events Head"
      number="+-1231231"
      email="asdasd@gmail.com"
    />
  );
  array.push(
    <TeamsOneBox
      link={priya}
      name="Priyanshu Sinha "
      designation="Pro-nites Coordinator"
      number="+-1231231"
      email="asdasd@gmail.com"
    />
  );
  array.push(
    <TeamsOneBox
      link="https://images.unsplash.com/photo-1512546148165-e50d714a565a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      name="Rahul Singh "
      designation="Campaigns Head"
      number="+-1231231"
      email="asdasd@gmail.com"
    />
  );

  return array;
}
function getBoxesCreatives(num) {
  const array = [];

  array.push(
    <TeamsOneBox
      link={Sushant}
      name="Sushant Sawant "
      designation="Creatives Head"
      number="+-1231231"
      email="asdasd@gmail.com"
    />
  );
  array.push(
    <TeamsOneBox
      link={swapnil}
      name="Swapnil Banerjee"
      designation="Web-Design Head"
      number="+-1231231"
      email="asdasd@gmail.com"
    />
  );
  array.push(
    <TeamsOneBox
      link={virat}
      name="Virat Dubey "
      designation="Digital Media Head"
      number="+919322603447"
      email="asdasd@gmail.com"
    />
  );

  return array;
}
function getBoxesPRB(num) {
  const array = [];

  array.push(
    <TeamsOneBox
      link="https://images.unsplash.com/photo-1512546148165-e50d714a565a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      name="Anurag Sharma"
      designation="PR Head"
      number="+-1231231"
      email="asdasd@gmail.com"
    />
  );
  array.push(
    <TeamsOneBox
      link={ankit}
      name="Ankit Das"
      designation="PR Head"
      number="+-1231231"
      email="asdasd@gmail.com"
    />
  );
  array.push(
    <TeamsOneBox
      link="https://images.unsplash.com/photo-1512546148165-e50d714a565a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      name="Lakshya Kohli"
      designation="Media & Outreach Head"
      number="+-1231231"
      email="asdasd@gmail.com"
    />
  );

  return array;
}
function getBoxesHead(num) {
  const array = [];

  array.push(
    <TeamsOneBox
      link={conv}
      name="Govind Madhav Vyas"
      designation="Convener"
      number="+918875833508"
      email="webops@alcheringa.in"
    />
  );
  array.push(
    <TeamsOneBox
      link={fh}
      name="Sabir Singh"
      designation="Finance Head"
      number="+-1231231"
      email="webops@alcheringa.in"
    />
  );

  return array;
}
function getBoxesDev(num) {
  const array = [];

  array.push(
    <TeamsOneBox
      link="https://images.unsplash.com/photo-1512546148165-e50d714a565a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      name="Akshat"
      designation="Web-Ops Head"
      number="+918875833508"
      email="webops@alcheringa.in"
    />
  );
  array.push(
    <TeamsOneBox
      link={shanta}
      name="Shantanu Chaudhari "
      designation="App-Ops Head"
      number="+-1231231"
      email="webops@alcheringa.in"
    />
  );

  return array;
}
function getBoxesMUN(num) {
  const array = [];

  array.push(
    <TeamsOneBox
      link="https://images.unsplash.com/photo-1512546148165-e50d714a565a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      name="Samarth Jhunjhunwala"
      designation="Secretary General"
      number="+-1231231"
      email="asdasd@gmail.com"
    />
  );
  array.push(
    <TeamsOneBox
      link={prath}
      name="Pratham Garg"
      designation="Director General"
      number="+-1231231"
      email="asdasd@gmail.com"
    />
  );

  return array;
}
function getBoxesMarky(num) {
  const array = [];

  array.push(
    <TeamsOneBox
      link={rachit}
      name="Rachit Awasthi"
      designation="CRM Head"
      number="+-1231231"
      email="asdasd@gmail.com"
    />
  );
  array.push(
    <TeamsOneBox
      link="https://images.unsplash.com/photo-1512546148165-e50d714a565a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      name="Harshit Garg"
      designation="CRM Head"
      number="+-1231231"
      email="asdasd@gmail.com"
    />
  );
  array.push(
    <TeamsOneBox
      link="https://images.unsplash.com/photo-1512546148165-e50d714a565a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      name="Chakradhar Inaganti"
      designation="CRM Head"
      number="+-1231231"
      email="asdasd@gmail.com"
    />
  );
  array.push(
    <TeamsOneBox
      link="https://images.unsplash.com/photo-1512546148165-e50d714a565a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      name="Kanika Tyagi "
      designation="CRM Head"
      number="+-1231231"
      email="asdasd@gmail.com"
    />
  );

  return array;
}
const TeamBoxes = () => {
  return (
    <>
      <main>
        <h2 className={teambox.hed}>Public Relations & Branding</h2>
        <div className={teambox.pr}>
          <img src={teams_r1} className={teambox.tr1} alt="" />
          <img src={teams_ptt} className={teambox.teams_ptt1} alt="" />
          {getBoxesPRB(3)}
        </div>
        <h2 className={teambox.hed}>Corporate Relations & Marketing</h2>
        <div className={teambox.pr}>
          <img src={teams_r2} className={teambox.tr2} alt="" />
          <img src={teams_ptt} className={teambox.teams_ptt2} alt="" />
          {getBoxesMarky(4)}
        </div>
        <h2 className={teambox.hed}>Events</h2>
        <div className={teambox.pr}>
          <img src={teams_r3} className={teambox.tr3} alt="" />
          <img src={teams_ptt} className={teambox.teams_ptt3} alt="" />
          {getBoxesEvents(3)}
        </div>
        <h2 className={teambox.hed}>Creatives</h2>
        <div className={teambox.pr}>
          <img src={teams_r4} className={teambox.tr4} alt="" />
          <img src={teams_ptt} className={teambox.teams_ptt4} alt="" />
          {getBoxesCreatives(3)}
        </div>
        <h2 className={teambox.hed}>IITG MUN</h2>
        <div className={teambox.pr}>
          <img src={teams_ptt} className={teambox.teams_ptt5} alt="" />
          {getBoxesMUN(2)}
        </div>
        <h2 className={teambox.hed}>
          <div className={teambox.for2heading}>Web Ops</div>
          <div className={teambox.for2heading}>App Ops</div>
        </h2>
        <div className={teambox.pr}>
          <img src={teams_r5} className={teambox.tr5} alt="" />
          {getBoxesDev(2)}
        </div>
        <h2 className={teambox.hed}>
          <div className={teambox.for2heading}>Convener</div>
          <div className={teambox.for2heading}>Finance head</div>
        </h2>
        <div className={teambox.pr}>
          <img src={teams_ptt} className={teambox.teams_ptt6} alt="" />
          <img src={teams_ptt} className={teambox.teams_ptt7} alt="" />
          {getBoxesHead(2)}
        </div>
      </main>
    </>
  );
};

export default TeamBoxes;
