import React, { Component } from "react";
import EventsComponent from "./components/eventsComponent";
import EventsIntro from "./components/eventsIntro";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import cd1 from "./components/images/cd1.jpg";
import cd2 from "./components/images/cd2.jpg";
import cc1 from "./components/images/cc1.jpg";
import cc2 from "./components/images/cc2.jpg";
import cc3 from "./components/images/cc3.jpg";
import pro1 from "./components/images/pro1.jpg";
import nite1 from "./components/images/nite1.jpg";
import nite2 from "./components/images/nite2.jpg";
import nite3 from "./components/images/nite3.jpg";
import nite4 from "./components/images/nite4.jpg";
import nite5 from "./components/images/nite5.jpg";
import nite6 from "./components/images/nite6.jpg";
import informals from "./components/images/informals.jpg";

const images1 = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  pro1,
];
const images2 = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  nite1,
  nite2,
  nite3,
  nite4,
  nite5,
  nite6,
];
const images3 = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  cc1,
  cc2,
  cc3,
];
const images4 = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  cd1,
  cd2,
];
const images5 = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  informals,
];
const title1 = "Proshows";
const title2 = "pronites";
const title3 = "creators-camp";
const title4 = "critical-damage";
const title5 = "informals";

class EventsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar ind={1}></Navbar>
        <EventsIntro />
        <div>
          <EventsComponent images={images1} title={title1} />
          <EventsComponent images={images2} title={title2} />
          <EventsComponent images={images3} title={title3} />
          <EventsComponent images={images4} title={title4} />
          <EventsComponent images={images5} title={title5} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default EventsPage;
