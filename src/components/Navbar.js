import styles from "./css/nav.module.css";
import logo from "./images/Frame.png";
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native-web";

const Navbar = (ind) => {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.leftsidenav}>
          <img className={styles.imgdeco} src={logo} alt="" />
          <a
            className={styles.alcherhead}
            style={{
              fontFamily: "Montserrat",
              color: "white",
              textDecoration: "none",
            }}
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
        </div>
      </div>
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
