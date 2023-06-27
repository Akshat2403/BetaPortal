import styles from "./Aikyam.module.css";
import pic1 from "../../Homepage/Images/Rectangle5.png";
import pic2 from "../../Homepage/Images/Rectangle5.png";
import pic3 from "../../Homepage/Images/Rectangle5.png";
const Aikyam = (props) => {
  const { children } = props;
  return (
    <div>
      <div className={styles.heading}>{children}</div>
      <div className={styles.bodypart}>
        <div className={styles.leftpart}>
          Alcheringa hosts several campaigns under Initiatives for cultural
          development and the betterment of society. These campaigns are
          conducted round the year to serve the mankind.
        </div>
        <div className={styles.rightpart}>
          <img
            src={pic1}
            alt=""
            style={{
              height: "20vw",
              width: "46vw",
              overflow: "hidden",
              borderTopRightRadius: "5vw",
              borderBottomLeftRadius: "5vw",
            }}
          />
          <div style={{ display: "flex" }}>
            <img
              src={pic2}
              alt=""
              style={{
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
              src={pic3}
              alt=""
              style={{
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
