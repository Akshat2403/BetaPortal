import styles from "./Middlepart.module.css";
import Button from "./Button";
import Aikyam from "./Aikyam";
import React, { useState, useEffect, forwardRef } from "react";
import diamondbg from "../Images/diamondbgd.png";

const vwToPx = (vw) => {
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  return (vw * viewportWidth) / 100;
};

const Middlepart = ({ setScrollRef }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hovered) => {
    setIsHovered(hovered);
  };
  // const [bgdcolor, setBgdcolor] = useState('#138542');

  // useEffect(() => {
  //   var element = document.getElementsByClassName('animationElement')[0]; // Assuming there's only one element with the 'animationElement' class
  //   var computedStyle = window.getComputedStyle(element);
  //   var marginTop = computedStyle.getPropertyValue('margin-top');

  //   if (marginTop === '2vw') {
  //     setBgdcolor('#F26A25');
  //   }
  // }, []);
  const [bgdcolor1, setBgdcolor1] = useState("#138542");
  const [bgdcolor2, setBgdcolor2] = useState("#138542");
  const [bgdcolor3, setBgdcolor3] = useState("#138542");
  const [bgdcolor4, setBgdcolor4] = useState("#138542");
  const [bgdcolor5, setBgdcolor5] = useState("#138542");
  const [bgdcolor6, setBgdcolor6] = useState("#138542");
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000); // Run every second (1000 milliseconds)

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);
  useEffect(() => {
    var element1 = document.getElementById("anim1");
    var computedStyle1 = window.getComputedStyle(element1);
    var marginTop1 = computedStyle1.getPropertyValue("margin-top");
    console.log(marginTop1);
    var comp = vwToPx(2);
    var comp1 = vwToPx(-50);
    var comp2 = vwToPx(-90);
    var comp3 = vwToPx(-140);
    var comp4 = vwToPx(-200);
    var comp5 = vwToPx(-245);
    var tonum = marginTop1.substring(0, marginTop1.length - 2);
    var numcomp = parseFloat(tonum);

    if (numcomp < comp && numcomp > comp1) {
      setBgdcolor1("#0B5429");
    } else {
      setBgdcolor1("#138542");
    }
    if (numcomp < comp1 && numcomp > comp2) {
      setBgdcolor2("#0B5429");
    } else {
      setBgdcolor2("#138542");
    }
    if (numcomp < comp2 && numcomp > comp3) {
      setBgdcolor3("#0B5429");
    } else {
      setBgdcolor3("#138542");
    }
    if (numcomp < comp3 && numcomp > comp4) {
      setBgdcolor4("#0B5429");
    } else {
      setBgdcolor4("#138542");
    }
    if (numcomp < comp4 && numcomp > comp5) {
      setBgdcolor5("#0B5429");
    } else {
      setBgdcolor5("#138542");
    }
    if (numcomp < comp5) {
      setBgdcolor6("#0B5429");
    } else {
      setBgdcolor6("#138542");
    }
  }, [timer]);
  return (
    <div>
      <div>
        <div className={styles.bgdanimate1} id="anime">
        </div>
        {/* <img src={diamondbg} style={{zIndex:'-1',width:'100vw',height:'100vw'}} alt="" /> */}
        <div className={styles.bgdanimate2}></div>
      </div>

      <div className={styles.heading}>
        <p>Kartavya</p>
      </div>
      <div className={styles.subheading}>
        <p>All our campaigns comes under the roof of our “Kartavya”</p>
        <div className={styles.thickline}></div>
      </div>
      <div className={styles.buttonsdiv}>
        <div className={styles.row1}>
          <Button
            width="12vw"
            backgroundColor={bgdcolor1}
            className={styles.b1}
          >
            Aikyam
          </Button>
          <Button
            width="14vw"
            backgroundColor={bgdcolor2}
            className={styles.b2}
          >
            Manshakti
          </Button>
          <Button
            width="12vw"
            backgroundColor={bgdcolor3}
            className={styles.b3}
          >
            Safher
          </Button>
        </div>
        <div className={styles.row2}>
          <Button
            width="14vw"
            backgroundColor={bgdcolor4}
            className={styles.b4}
          >
            Prithvi
          </Button>
          <Button
            width="30vw"
            backgroundColor={bgdcolor5}
            className={styles.b5}
          >
            North-East Unvield
          </Button>
          <Button
            width="12vw"
            backgroundColor={bgdcolor6}
            className={styles.b6}
          >
            Udaan
          </Button>
        </div>
      </div>
      <div id="anim" className={styles.animate}>
        <div className={styles.first}>
          <div
            id="anim"
            className={`${styles.animationElement} ${
              isHovered ? styles.paused : ""
            }`}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <Aikyam>AIKYAM</Aikyam>
          </div>
        </div>
        <div className={styles.second}>
          <div
            id="anim1"
            className={`${styles.animationElement} ${
              isHovered ? styles.paused : ""
            }`}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <Aikyam>MANSHAKTI</Aikyam>
          </div>
        </div>
        <div className={styles.third}>
          <div
            id="anim2"
            className={`${styles.animationElement} ${
              isHovered ? styles.paused : ""
            }`}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <Aikyam>SAFHER</Aikyam>
          </div>
        </div>
        <div className={styles.fourth}>
          <div
            id="anim3"
            className={`${styles.animationElement} ${
              isHovered ? styles.paused : ""
            }`}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <Aikyam>PRITHVI</Aikyam>
          </div>
        </div>
        <div className={styles.fifth}>
          <div
            id="anim4"
            className={`${styles.animationElement} ${
              isHovered ? styles.paused : ""
            }`}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <Aikyam>NORTH-EAST UNVIELD</Aikyam>
          </div>
        </div>
        <div className={styles.sixth}>
          <div
            id="anim5"
            className={`${styles.animationElement} ${
              isHovered ? styles.paused : ""
            }`}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <Aikyam>UDAAN</Aikyam>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Middlepart);
