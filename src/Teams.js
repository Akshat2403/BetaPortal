import React from "react";
import TeamsIntro from "./components/TeamsIntro.js";
import TeamBoxes from "./components/TeamBoxes.jsx";
import Footer from "./components/footer.jsx";
import Navbar from "./components/Navbar.js";
const Teams = () => {
  return (
    <>
      <Navbar ind={3}></Navbar>
      <TeamsIntro />
      <TeamBoxes />
      <Footer />
    </>
  );
};

export default Teams;
