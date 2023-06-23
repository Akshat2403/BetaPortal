import React, { Component } from "react";
import styles from "./css/teamsOneBox.module.css";

const TeamsOneBox = ({ link, name, designation, number, email }) => {
  return (
    <div className={styles.box}>
      <div
        className={styles.photo}
        style={{ backgroundImage: `url(${link})` }}
      ></div>
      <div className={styles.name}>{name}</div>
      <div className={styles.designation}>{designation}</div>
      <div className={styles.number}>{number}</div>
      <div className={styles.email}>{email}</div>
    </div>
  );
};

export default TeamsOneBox;
