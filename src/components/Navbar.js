import React,{useState} from 'react'
import navbarcss from './navbar.module.css'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.svg"
import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();
  return (
    <div className={navbarcss.container}>
    <nav className={navbarcss.navbar}>
      <div className={navbarcss.logo}>
        <img src={logo} alt="Logo" />
        <span>Alcheringa</span>
      </div>
      <div className={navbarcss.navlinks}>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/initiatives">Initiatives</Link>
        <Link to="/team">Team</Link>
        <Link to="/competitions">Competitions</Link>
      </div>
      
      <div className={navbarcss.hamburger}>
         <Link>
         <GiHamburgerMenu/>
         </Link>
        </div>
    </nav>
    </div>
  )
}

export default Navbar