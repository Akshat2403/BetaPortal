import Animations from "./Animations";
import styles from "./Wordingimage.module.css";
const WordingsImage = () => {

  return (
    <div className={styles.maindiv}>
      <div className={styles.submain}>
        <div
          className={styles.givefont}
          style={{
            color: "white",
            fontFamily: "Montserrat",
            fontWeight: "700",
          }}
        >
          IIT GUWAHATI'S
        </div>
        <div className={styles.alch}>ALCHERINGA</div>
        <div
          className={styles.givefont1}
          style={{ color: "white", fontFamily: "Montserrat" }}
        >
          The Largest Cultural Fest of
          <br /> North-East India
        </div>
      </div>
      <div className={styles.animesdiv}>
        <Animations></Animations>
      </div>
    </div>
  );
};

export default WordingsImage;
