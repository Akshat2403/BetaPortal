import React from "react";
import maincss from "./css/main.module.css";
import fc1 from "./images/fc1.jpg";
import fc2 from "./images/fc2.jpg";
import fc3 from "./images/fc3.jpg";
import fc4 from "./images/fc4.jpg";
import fc5 from "./images/fc5.jpg";
import c1 from "./images/c1.jpg";
import c2 from "./images/c2.jpg";
import c3 from "./images/c3.jpg";
import c4 from "./images/c4.jpg";
import c5 from "./images/c5.jpg";
import c6 from "./images/c6.jpg";
import c7 from "./images/c7.jpg";
import c8 from "./images/c8.jpg";
import c9 from "./images/art.jpg";
import c10 from "./images/dd.jpg";
import c11 from "./images/c11.jpg";
import c12 from "./images/lca.jpg";

const Main = () => {
  return (
    <>
      <div className={maincss.main}>
        <h1 className={maincss.hed}>Featured Competitions</h1>
        <div className={maincss.boxes}>
          <div
            className={`${maincss.item} ${maincss.item1}`}
            style={{
              backgroundImage: `url(${fc1})`,
            }}
          >
            <div className={maincss.box_text}>Football</div>
          </div>
          <div
            className={`${maincss.item} ${maincss.itemspan2}`}
            style={{
              backgroundImage: `url(${fc3})`,
            }}
          >
            <div className={maincss.box_text}>Quiz</div>
          </div>
          <div
            className={`${maincss.item} ${maincss.item3}`}
            style={{
              backgroundImage: `url(${fc4})`,
            }}
          >
            <div className={maincss.box_text}>
              Critical<br></br> Damage
            </div>
          </div>
          <div
            className={`${maincss.item} ${maincss.item4}`}
            style={{
              backgroundImage: `url(${fc2})`,
            }}
          >
            <div className={maincss.box_text}>Electric Heels</div>
          </div>
          <div
            className={`${maincss.item} ${maincss.item5}`}
            style={{
              backgroundImage: `url(${fc5})`,
            }}
          >
            <div className={maincss.box_text}>Haute Couture</div>
          </div>
        </div>
        <h1 className={maincss.hed}>Modules</h1>
        <div className={maincss.boxes2}>
          <div
            className={`${maincss.box} ${maincss.item5}`}
            style={{
              backgroundImage: `url(${c1})`,
            }}
          >
            <div className={maincss.box_text}>Vogue Nation</div>
          </div>
          <div
            className={`${maincss.box} ${maincss.item3}`}
            style={{
              backgroundImage: `url(${c2})`,
            }}
          >
            <div className={maincss.box_text}>Class Apart</div>
          </div>
          <div
            className={`${maincss.box} ${maincss.item3}`}
            style={{
              backgroundImage: `url(${c3})`,
            }}
          >
            <div className={maincss.box_text}>Sports</div>
          </div>
          <div
            className={`${maincss.box} ${maincss.item3}`}
            style={{
              backgroundImage: `url(${c4})`,
            }}
          >
            <div className={maincss.box_text}>Music</div>
          </div>
          <div
            className={`${maincss.box} ${maincss.item3}`}
            style={{
              backgroundImage: `url(${c5})`,
            }}
          >
            <div className={maincss.box_text}>Dance</div>
          </div>
          <div
            className={`${maincss.box} ${maincss.item3}`}
            style={{
              backgroundImage: `url(${c6})`,
            }}
          >
            <div className={maincss.box_text}>Quiz</div>
          </div>
          <div
            className={`${maincss.box} ${maincss.item3}`}
            style={{
              backgroundImage: `url(${c7})`,
            }}
          >
            <div className={maincss.box_text}>Drama</div>
          </div>
          <div
            className={`${maincss.box} ${maincss.item5}`}
            style={{
              backgroundImage: `url(${c8})`,
            }}
          >
            <div className={maincss.box_text}>Literary</div>
          </div>
          <div
            className={`${maincss.box} ${maincss.item5}`}
            style={{
              backgroundImage: `url(${c9})`,
            }}
          >
            <div className={maincss.box_text}>Art Talkies</div>
          </div>
          <div
            className={`${maincss.box} ${maincss.item3}`}
            style={{
              backgroundImage: `url(${c10})`,
            }}
          >
            <div className={maincss.box_text}>Digital Dexterity</div>
          </div>
          <div
            className={`${maincss.box} ${maincss.item3}`}
            style={{
              backgroundImage: `url(${c11})`,
            }}
          >
            <div className={maincss.box_text}>Critical Damage</div>
          </div>
          <div
            className={`${maincss.box} ${maincss.item3}`}
            style={{
              backgroundImage: `url(${c12})`,
            }}
          >
            <div className={maincss.box_text}>Lights Camera Action</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
