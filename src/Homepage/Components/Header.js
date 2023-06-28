import alcher2023 from "../Images/ALCHER20232.jpg";
import alcher2022 from "../Images/alcher2022.jpg";
// import alcher2021 from "../Images/alcher2021.jpg";
import alcher2020 from "../Images/alcher2020.jpg";
import alcher2019 from "../Images/alcher2019.jpg";

import WordingsImage from "./Wordingimage";
import styles from "./Header.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Header = () => {
  return (
    <div>
      <div className={styles.positionwords}>
        <WordingsImage></WordingsImage>
      </div>
      <div style={{ zIndex: "-1" }}>
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          interval={4000} // Adjust the interval (in milliseconds) as per your preference
        >
          <div
            className={styles.bgd}
            style={{ backgroundImage: `url(${alcher2023})` }}
          ></div>
          <div
            className={styles.bgd}
            style={{ backgroundImage: `url(${alcher2022})` }}
          ></div>
          <div
            className={styles.bgd}
            style={{ backgroundImage: `url(${alcher2020})` }}
          ></div>
          {/* <div
            className={styles.bgd}
            style={{ backgroundImage: `url(${alcher2020})` }}
          ></div> */}
          <div
            className={styles.bgd}
            style={{ backgroundImage: `url(${alcher2019})` }}
          ></div>
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
