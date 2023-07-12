import React, { Component } from "react";
import styles from "./css/menu.module.css";
const Menu = (ind) => {
  return (
    <div
      className={`${styles.Menu} ${
        ind.ind == 0
          ? styles.head_home
          : ind.ind == 1
          ? styles.head_events
          : ind.ind == 2
          ? styles.head_initiatives
          : ind.ind == 3
          ? styles.head_teams
          : styles.head_competitions
      }`}
    >
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
          ind.ind == 4 ? styles.active : styles.inactive
        }`}
        // style={ind == 4 ? stylesheet.active : stylesheet.inactive}
        href="/competitions/"
      >
        Competitions
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
    </div>
  );
};

export default Menu;
