import styles from "./css/nav.module.css";
import logo from "./images/Frame.png";
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native-web";
import Menu from "./Menu";
import hamburger from "./images/hamburger.svg";
import { useState } from "react";

const Navbar = (ind) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div
        className={`${styles.navbar} ${
          count % 2 == 1 ? styles.navFixed : styles.Navbar
        }`}
      >
        <div className={styles.leftsidenav}>
          <img className={styles.imgdeco} src={logo} alt="" />
          <a
            className={styles.alcherhead}
            // style={{
            //   fontFamily: "Montserrat",
            //   color: "white",
            //   textDecoration: "none",
            //   fontWeight: "bolder",
            // }}
            href="#"
          >
            ALCHERINGA
          </a>
        </div>
        <div className={styles.rightsidenav}>
          <a
            className={`${styles.individual} ${
              ind.ind == 0 ? styles.active : styles.inactive
            }`}
            // style={ind == 0 ? stylesheet.active : stylesheet.inactive}
            href="/"
          >
            Home
          </a>
          <a
            className={`${styles.individual} ${
              ind.ind == 1 ? styles.active : styles.inactive
            }`}
            // style={ind == 1 ? stylesheet.active : stylesheet.inactive}
            href="/events/"
          >
            Events
          </a>
          <a
            className={`${styles.individual} ${
              ind.ind == 2 ? styles.active : styles.inactive
            }`}
            // style={ind == 2 ? stylesheet.active : stylesheet.inactive}
            href="/initiatives/"
          >
            Initiatives
          </a>
          <a
            className={`${styles.individual} ${
              ind.ind == 3 ? styles.active : styles.inactive
            }`}
            // style={ind == 3 ? stylesheet.active : stylesheet.inactive}
            href="/teams/"
          >
            Team
          </a>
          <a
            className={`${styles.individual} ${
              ind.ind == 4 ? styles.active : styles.inactive
            }`}
            // style={ind == 4 ? stylesheet.active : stylesheet.inactive}
            href="/competitions/"
          >
            Competitions
          </a>
          <div onClick={() => setCount(count + 1)}>
            <img src={hamburger} className={styles.hamburger}></img>
          </div>
        </div>
      </div>
      {count % 2 == 1 && <Menu ind={ind.ind}></Menu>}
    </div>
  );
};

const stylesheet = StyleSheet.create({
  active: {
    color: "white",
    textDecoration: "none",
    textDecoration: "underline",
    textDecorationColor: "white",
    textDecorationThickness: "0.2vw",
  },
  inactive: {
    color: "white",
    textDecoration: "none",
  },
});
export default Navbar;
