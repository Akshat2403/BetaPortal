import React, { Component } from "react";
import EventsComponent from "./components/eventsComponent";
import EventsIntro from "./components/eventsIntro";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import pro1 from "./components/images/pro1.jpg";
import nite1 from "./components/images/nite1.jpg";
import nite2 from "./components/images/nite2.jpg";

const images1 = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  pro1,
];
const images2 = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  nite1,
  nite2,
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
          <EventsComponent images={images1} title={title3} />
          <EventsComponent images={images1} title={title4} />
          <EventsComponent images={images1} title={title5} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default EventsPage;
