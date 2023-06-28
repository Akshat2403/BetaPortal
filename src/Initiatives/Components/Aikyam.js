import styles from "./Aikyam.module.css";
import pic1 from "../../Homepage/Images/Rectangle5.png";
import pic2 from "../../Homepage/Images/Rectangle5.png";
import pic3 from "../../Homepage/Images/Rectangle5.png";
import prithvi1 from "../Images/prithvi1.jpg";
import prithvi2 from "../Images/prithvi2.jpg";
import prithvi3 from "../Images/prithvi3.jpg";
import aikyam1 from "../Images/aikyam1.jpg";
import aikyam2 from "../Images/aikyam2.jpg";
import aikyam3 from "../Images/aikyam3.jpg";
import udaan1 from "../Images/udaan1.jpg";
import udaan2 from "../Images/udaan2.jpg";
import udaan3 from "../Images/udaan3.jpg";
import NEU1 from "../Images/NEU1.png";
import NEU2 from "../Images/NEU2.png";
import NEU3 from "../Images/NEU3.png";

const Aikyam = ({ name }) => {
  console.log(name);
  const content = {
    Aikyam: [
      "Alcheringa hosts several campaigns under Initiatives for cultural\
        development and the betterment of society. These campaigns are\
        conducted round the year to serve the mankind.",
      [aikyam1, aikyam2, aikyam3],
    ],
    SAFHER: [
      "Alcheringa hosts several campaigns under Initiatives for cultural\
          development and the betterment of society. These campaigns are\
          conducted round the year to serve the mankind.",
      [prithvi1, prithvi2, prithvi3],
    ],
    MANSHAKTI: [
      "Alcheringa hosts several campaigns under Initiatives for cultural\
          development and the betterment of society. These campaigns are\
          conducted round the year to serve the mankind.",
      [prithvi1, prithvi2, prithvi3],
    ],
    UDAAN: [
      "Alcheringa hosts several campaigns under Initiatives for cultural\
          development and the betterment of society. These campaigns are\
          conducted round the year to serve the mankind.",
      [udaan1, udaan2, udaan3],
    ],
    Prithvi: [
      "Alcheringa hosts several campaigns under Initiatives for cultural\
            development and the betterment of society. These campaigns are\
            conducted round the year to serve the mankind.",
      [udaan1, udaan2, udaan3],
    ],
    "NORTH-EAST UNVIELD": [
      "Alcheringa hosts several campaigns under Initiatives for cultural\
          development and the betterment of society. These campaigns are\
          conducted round the year to serve the mankind.",
      [NEU3, NEU2, NEU1],
    ],
  };
  return (
    <div>
      <div className={styles.heading}>{name}</div>
      <div className={styles.bodypart}>
        <div className={styles.leftpart}>{content[name][0]}</div>
        <div className={styles.rightpart}>
          <img
            src={content[name][1][0]}
            alt=""
            style={{
              objectFit: "cover",
              height: "20vw",
              width: "46vw",
              overflow: "hidden",
              borderTopRightRadius: "5vw",
              borderBottomLeftRadius: "5vw",
            }}
          />
          <div style={{ display: "flex" }}>
            <img
              src={content[name][1][1]}
              alt=""
              style={{
                objectFit: "cover",

                height: "15vw",
                width: "23vw",
                overflow: "hidden",
                borderTopRightRadius: "5vw",
                borderBottomLeftRadius: "5vw",
                marginTop: "2vw",
                marginRight: "1vw",
              }}
            />
            <img
              src={content[name][1][2]}
              alt=""
              style={{
                objectFit: "cover",

                height: "15vw",
                width: "22vw",
                marginTop: "2vw",
                marginLeft: "1vw",
                overflow: "hidden",
                borderTopRightRadius: "5vw",
                borderBottomLeftRadius: "5vw",
              }}
            />
          </div>
        </div>
        <div className={styles.bgdclass}>
          <div className={styles.colorbgd}></div>
          <div className={styles.dotsgreen}></div>
          <div className={styles.rectgreen}></div>
        </div>
      </div>
    </div>
  );
};

export default Aikyam;
