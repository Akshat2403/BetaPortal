import React from 'react'
import teambox from '../components/teamboxcss.module.css'
const TeamBoxes = () => {
  return (
    <>
    <main>
        <h1>Public Relations & Branding</h1>
        <div className={teambox.pr}>
        <div className={teambox.box}></div>
        <div className={teambox.box}></div>
        <div className={teambox.box}></div>
        </div>
        <h1>Corporate Relations & Marketing</h1>
        <div className={teambox.crm}>
        <div className={teambox.box}></div>
        <div className={teambox.box}></div>
        <div className={teambox.box}></div>
        <div className={teambox.box}></div>
        </div>
        <h1>Events</h1>
        <div className={teambox.pr}>
        <div className={teambox.box}></div>
        <div className={teambox.box}></div>
        <div className={teambox.box}></div>
        </div>
        <h1>Creatives</h1>
        <div className={teambox.pr}>
        <div className={teambox.box}></div>
        <div className={teambox.box}></div>
        <div className={teambox.box}></div>
        </div>
        <h1>IITG MUN</h1>
        <div className={teambox.mun}>
        <div className={teambox.box}></div>
        <div className={teambox.box}></div>
        </div>
        
    </main>

    </>
  )
}

export default TeamBoxes