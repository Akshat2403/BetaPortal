import alcherlogo from "../Images/Frame.png";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.mainnavclass}>
      <div className={styles.leftside}>
        <img src={alcherlogo} style={{ width: "3vw", height: "3vw" }} alt="" />
        <a href="/"
          style={{
            fontFamily: "Montserrat",
            color: "white",
            textDecoration: "none",
            paddingLeft: "1vw",
            fontSize: "2vw",
          }}
        >
          ALCHERINGA
        </a>
      </div>
      <div className={styles.rightside}>
        <a href="/"
          className={styles.individual1}
          style={{
            color: "white",
            fontSize: "1.4vw",
            textDecoration: "underline",
            textDecorationColor: "white",
            textDecorationThickness: "0.2vw",
          }}
        >
          Home
        </a>
        <a href="/events/"
          className={styles.individual}
          style={{ color: "white", textDecoration: "none", fontSize: "1.4vw" }}
        >
          Events
        </a>
        <a href="/initiatives/"
          className={styles.individual}
          style={{ color: "white", textDecoration: "none", fontSize: "1.4vw" }}
        >
          Initiatives
        </a>
        <a href="/teams/"
          className={styles.individual}
          style={{ color: "white", textDecoration: "none", fontSize: "1.4vw" }}
        >
          Team
        </a>
        <a href="/competitions/"
          className={styles.individual}
          style={{ color: "white", textDecoration: "none", fontSize: "1.4vw" }}
        >
          Competitions
        </a>
      </div>
    </div>
  );
};

export default Navbar;
