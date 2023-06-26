import React from "react";
import Main from "./components/Main.js";
import CompetitionsIntro from "./components/CompetitionsIntro";
import Footer from "./components/footer.jsx";
import Navbar from "./components/Navbar.js";
const ind = 4;
const Competitions = () => {
  return (
    <>
      <Navbar ind={4}></Navbar>
      <CompetitionsIntro />
      <Main />
      <Footer />
    </>
  );
};

export default Competitions;
