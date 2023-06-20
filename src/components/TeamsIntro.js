import React from 'react'
import teamcss from '../components/team.module.css'
import down_arrow from "../assets/down_arrow.svg";
const TeamsIntro = () => {
  return (
    <>
    <div className={teamcss.container}>
      <div className={teamcss.text}>
        <div className={teamcss.heading}>TEAM</div>
        <div className={teamcss.description}>
        All students, from the fourth year mentors to the first-year freshers, play an active role in actualising the four days of Alcher. Alcheringa is the most significant cultural festival in the northeast and is build by the yearlong efforts of all the students involved in making their vision of Alcher come to life..
        </div>
      </div>
      <img src={down_arrow} className={teamcss.downarrow }/>
    </div>
    </>
  )
}

export default TeamsIntro;