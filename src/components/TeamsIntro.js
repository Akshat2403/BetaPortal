import React from "react";
import teamcss from "../components/css/team.module.css";
import down_arrow from "./images/down_arrow.svg";
import { useRef } from "react";
const TeamsIntro = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <div className={teamcss.container_comp}>
        <div className={teamcss.text_comp}>
          <div className={teamcss.heading_comp}>TEAM</div>
          <div className={teamcss.description}>
            All students, from the fourth year mentors to the first-year
            freshers, play an active role in actualising the four days of
            Alcher. Alcheringa is the most significant cultural festival in the
            northeast and is build by the yearlong efforts of all the students
            involved in making their vision of Alcher come to life..
          </div>
        </div>
        <img
          src={down_arrow}
          onClick={handleClick}
          className={teamcss.down_arrow}
        />
      </div>
      <div ref={ref} style={{ marginBottom: "10vw" }}></div>
    </React.Fragment>
  );
};

export default TeamsIntro;
