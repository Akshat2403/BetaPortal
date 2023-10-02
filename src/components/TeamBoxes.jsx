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
import Anurag from "./images/Anurag.jpg";
import akshat from "./images/akshat.jpg";
import chakr from "./images/Chakradhar.jpg";
import rahul from "./images/Rahul.jpg";
import lakshya from "./images/Lakshya.jpg";
import harshit from "./images/Harshit.jpg";
import kanika from "./images/kanika.jpg";
import sam from "./images/samartha.jpg";


function getBoxesEvents(num) {
  const array = [];

  array.push(
    <TeamsOneBox
      link={abhinav}
      name="Abhinav Pratap Singh "
      designation="Events Head"
      number="+91 8299121435"
      email="abhinav@alcheringa.in"
    />
  );
  array.push(
    <TeamsOneBox
      link={priya}
      name="Priyanshu Sinha "
      designation="Pro-nites Coordinator"
      number="+91 9650757099"
      email="priyanshu.s@alcheringa.in"
    />
  );
  array.push(
    <TeamsOneBox
      link={rahul}
      name="Rahul Singh"
      designation="Campaigns Head"
      number="+91 7518509062"
      email="rahul@alcheringa.in"
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
      number="+91 9284802056"
      email="creatives@alcheringa.in"
    />
  );
  array.push(
    <TeamsOneBox
      link={swapnil}
      name="Swapnil Banerjee"
      designation="Web-Design Head"
      number="+91 8478018310"
      email="creatives@alcheringa.in"
    />
  );
  array.push(
    <TeamsOneBox
      link={virat}
      name="Virat Dubey"
      designation="Digital Media Head"
      number="+919322603447"
      email="creatives@alcheringa.in"
    />
  );

  return array;
}
function getBoxesPRB(num) {
  const array = [];

  array.push(
    <TeamsOneBox
      link={Anurag}
      name="Anurag"
      designation="PR Head"
      number="+91 7061520276"
      email="anurag@alcheringa.in"
    />
  );
  array.push(
    <TeamsOneBox
      link={ankit}
      name="Ankit Kumar"
      designation="PR Head"
      number="+91 8340349585"
      email="ankit.k@alcheringa.in"
    />
  );
  array.push(
    <TeamsOneBox
      link={lakshya}
      name="Lakshya Kohli"
      designation="Media & Outreach Head"
      number="+91 7082763383"
      email="lakshya@alcheringa.in"
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
      number="+91 9406871655"
      email="madhav@alcheringa.in"
    />
  );
  array.push(
    <TeamsOneBox
      link={fh}
      name="Sabir Singh"
      designation="Finance Head"
      number="+91 8950314110"
      email="sabir@alcheringa.in"
    />
  );

  return array;
}
function getBoxesDev(num) {
  const array = [];

  array.push(
    <TeamsOneBox
      link={akshat}
      name="Akshat"
      designation="Web-Ops Head"
      number="+91 8875833508"
      email="webops@alcheringa.in"
    />
  );
  array.push(
    <TeamsOneBox
      link={shanta}
      name="Shantanu Chaudhari "
      designation="App-Ops Head"
      number="+91 8275493025"
      email="webops@alcheringa.in"
    />
  );

  return array;
}
function getBoxesMUN(num) {
  const array = [];

  array.push(
    <TeamsOneBox
      link={sam}
      name="Samarth Jhunjhunwala"
      designation="Secretary General"
      number="+91 7981828510"
      email="iitgmun@alcheringa.in"
    />
  );
  array.push(
    <TeamsOneBox
      link={prath}
      name="Pratham Garg"
      designation="Director General"
      number="+91 7011533630"
      email="iitgmun@alcheringa.in"
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
      number="+91 8400000512"
      email="rachit@alcheringa.in"
    />
  );
  array.push(
    <TeamsOneBox
      link={harshit}
      name="Harshit Garg"
      designation="CRM Head"
      number="+91 7014850105"
      email="harshit@alcheringa.in"
    />
  );
  array.push(
    <TeamsOneBox
      link={chakr}
      name="Chakradhar Inaganti"
      designation="CRM Head"
      number="+91 8319837535"
      email="chakradhar@alcheringa.in"
    />
  );
  array.push(
    <TeamsOneBox
      link={kanika}
      name="Kanika Tyagi "
      designation="CRM Head"
      number="+91 9917481718"
      email="kanika@alcheringa.in"
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
