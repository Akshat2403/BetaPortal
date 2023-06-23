import React from "react";
import maincss from "./css/main.module.css";
const img =
  "https://images.unsplash.com/photo-1625637870692-ddd9cd870757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
const Main = () => {
  return (
    <>
      <div className={maincss.main}>
        <h1>Featured Components</h1>
        <div className={maincss.boxes}>
          <div
            className={`${maincss.item} ${maincss.item1}`}
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <div className={maincss.box_text}>asasd</div>
          </div>
          <div
            className={`${maincss.item} ${maincss.itemspan2}`}
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <div className={maincss.box_text}>asasd</div>
          </div>
          <div
            className={`${maincss.item} ${maincss.item3}`}
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <div className={maincss.box_text}>asasd</div>
          </div>
          <div
            className={`${maincss.item} ${maincss.item4}`}
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <div className={maincss.box_text}>asasd</div>
          </div>
          <div
            className={`${maincss.item} ${maincss.item5}`}
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <div className={maincss.box_text}>asasd</div>
          </div>
        </div>
        <h1>Modules</h1>
        <div className={maincss.boxes2}>
          <div
            className={`${maincss.box} ${maincss.item5}`}
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <div className={maincss.box_text}>asasd</div>
          </div>
          <div className={`${maincss.box} ${maincss.item5}`}>
            <div className={maincss.box_text}>asasd</div>
          </div>
          <div className={`${maincss.box} ${maincss.item5}`}>
            <div className={maincss.box_text}>asasd</div>
          </div>
          <div className={`${maincss.box} ${maincss.item5}`}>
            <div className={maincss.box_text}>asasd</div>
          </div>
          <div className={`${maincss.box} ${maincss.item5}`}>
            <div className={maincss.box_text}>asasd</div>
          </div>
          <div className={`${maincss.box} ${maincss.item5}`}>
            <div className={maincss.box_text}>asasd</div>
          </div>
          <div className={`${maincss.box} ${maincss.item5}`}>
            <div className={maincss.box_text}>asasd</div>
          </div>
          <div className={`${maincss.box} ${maincss.item5}`}>
            <div className={maincss.box_text}>asasd</div>
          </div>
          <div className={`${maincss.box} ${maincss.item5}`}>
            <div className={maincss.box_text}>asasd</div>
          </div>
          <div className={`${maincss.box} ${maincss.item5}`}>
            <div className={maincss.box_text}>asasd</div>
          </div>
          <div className={`${maincss.box} ${maincss.item5}`}>
            <div className={maincss.box_text}>asasd</div>
          </div>
          <div className={`${maincss.box} ${maincss.item5}`}>
            <div className={maincss.box_text}>asasd</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
