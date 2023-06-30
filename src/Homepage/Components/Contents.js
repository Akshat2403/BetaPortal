import styles from "./Contents.module.css";
import swan1 from "../Images/Rectangle1.png";
import swan2 from "../Images/Rectangle2.png";
import dotbgd from "../Images/bgd.jpg";
import sqbgd from "../Images/Rectanglebgd.png";
import swan5 from "../Images/Rectangle5.png";
import swan6 from "../Images/Rectangle6.png";
import swan7 from "../Images/Rectangle7.png";
import pro from "../Images/pro.jpg";
import cc from "../Images/cc.jpg";
import cd from "../Images/cd.jpg";
import show from "../Images/show.jpg";
import informals from "../Images/informals.jpg";

const Contents = () => {
  return (
    <div
      style={{ paddingLeft: "6vw", paddingRight: "2vw", marginBottom: "-52vw" }}
    >
      <div className={styles.heading}>About Us</div>
      <div className={styles.body}>
        <span
          style={{
            width: "95vw",
            display: "flex",
            flexWrap: "wrap",
            fontSize: "2vw",
            textAlign: "left",
            fontWeight: "400",
            marginTop: "2vw",
            marginBottom: "2vw",
          }}
        >
          Alcheringa is the annual cultural festival of the Indian Institute of
          Technology (IIT), Guwahati. Started in 1996 by a group of students,
          Alcheringa, IIT Guwahati has become one of Asia’s most significant
          college-level cultural events. Spread over three days and four nights,
          Alcheringa attracts people from all over the world with its
          spectacular events and competitions.
        </span>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2vw",
          }}
        >
          <div style={{ paddingBottom: "1vw" }}>
            <a href="/competitions/" className={styles.button1}>
              Competitions
            </a>
          </div>
          <div>
            <a href="/teams/" className={styles.button2}>
              Meet the Team
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2vw",
            marginLeft: "3vw",
          }}
        >
          <div style={{ paddingBottom: "1vw" }}>
            <a href="/events/" className={styles.button3}>
              Events
            </a>
          </div>
          <div>
            <a href="/initiatives/" className={styles.button4}>
              Initiatives
            </a>
          </div>
        </div>
      </div>
      <div className={styles.heading}>Featured Events</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginBottom: "-35vw",
          alignItems: "center",
          overflowX: "hidden",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className={styles.div1bgd}
            style={{
              width: "45vw",
              height: "20vw",
              marginBottom: "0.6vw",
              borderTopRightRadius: "5vw",
              borderBottomLeftRadius: "5vw",
              overflow: "hidden",
            }}
          >
            {/* <img src={swan5}   alt="" /> */}
            <div className={styles.ontopwords}>Pronites</div>
          </div>
          <div
            className={styles.div2bgd}
            style={{
              width: "45vw",
              height: "20vw",
              marginTop: "0.6vw",
              overflow: "hidden",
              borderBottomRightRadius: "5vw",
              borderTopLeftRadius: "5vw",
            }}
          >
            {/* <img src={swan2}  alt="" /> */}
            <div className={styles.ontopwords}>Creator's Camp</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "1vw",
            marginRight: "1vw",
          }}
        >
          <div
            className={styles.div3bgd}
            style={{
              width: "20vw",
              height: "40vw",
              overflow: "hidden",
              borderBottomLeftRadius: "5vw",
              borderTopRightRadius: "5vw",
              backgroundColor: "grey",
            }}
          >
            {/* <img src={swan6}  alt="" /> */}
            <div className={styles.ontopwords1} style={{ textAlign: "center" }}>
              Critical<br></br> Damage
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className={styles.div4bgd}
            style={{
              width: "20vw",
              height: "20vw",
              marginBottom: "0.6vw",
              borderTopLeftRadius: "5vw",
              borderBottomRightRadius: "5vw",
              overflow: "hidden",
              backgroundColor: "grey",
            }}
          >
            {/* <img src={swan7}  alt="" /> */}

            <div className={styles.ontopwords}>Informals</div>
          </div>
          <div
            className={styles.div5bgd}
            style={{
              width: "20vw",
              height: "20vw",
              marginBottom: "0.6vw",
              borderTopRightRadius: "5vw",
              borderBottomLeftRadius: "5vw",
              overflow: "hidden",
              backgroundColor: "grey",
            }}
          >
            {/* <img src={swan1}  alt="" /> */}

            <div className={styles.ontopwords}>Proshows</div>
          </div>
        </div>
      </div>
      <div className={styles.bgddesign}></div>
      <div className={styles.bgddesign1}></div>
      <div className={styles.dot1}></div>
      <div className={styles.dot2}></div>
      <div className={styles.sq1}></div>
      <div className={styles.sq2}></div>
    </div>
  );
};

export default Contents;
