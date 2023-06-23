import React from "react";
import maincss from "./css/main.module.css";
const Main = () => {
  return (
    <>
      <div className={maincss.main}>
        <h1>Featured Components</h1>
        <div className={maincss.boxes}>
          <div className={`${maincss.item} ${maincss.item1}`}>1</div>
          <div className={`${maincss.item} ${maincss.itemspan2}`}>2</div>
          <div className={`${maincss.item} ${maincss.item3}`}>3</div>
          <div className={`${maincss.item} ${maincss.item4}`}>4</div>
          <div className={`${maincss.item} ${maincss.item5}`}>5</div>
        </div>
        <h1>Modules</h1>
        <div className={maincss.boxes2}>
          <div className={`${maincss.box} ${maincss.item5}`}></div>
          <div className={`${maincss.box} ${maincss.item5}`}></div>
          <div className={`${maincss.box} ${maincss.item5}`}></div>
          <div className={`${maincss.box} ${maincss.item5}`}></div>
          <div className={`${maincss.box} ${maincss.item5}`}></div>
          <div className={`${maincss.box} ${maincss.item5}`}></div>
          <div className={`${maincss.box} ${maincss.item5}`}></div>
          <div className={`${maincss.box} ${maincss.item5}`}></div>
          <div className={`${maincss.box} ${maincss.item5}`}></div>
          <div className={`${maincss.box} ${maincss.item5}`}></div>
          <div className={`${maincss.box} ${maincss.item5}`}></div>
          <div className={`${maincss.box} ${maincss.item5}`}></div>
        </div>
      </div>
    </>
  );
};

export default Main;
