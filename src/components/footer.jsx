import React, { Component } from "react";
import "./css/footer.css";
import youtubep from "./images/youtube.svg";
import instagramp from "./images/instagram.svg";
import facebookp from "./images/facebook.svg";
import twitterp from "./images/twitter.svg";
import footer_logo from "./images/Footer_logo.svg";
import linkedinp from "./images/linkedin.svg";
import threads from "./images/threads.png";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        ></link>
        <footer
          className="px-7 pt-20 md:px-10 lg:px-14"
          style={{
            width: "100%",
            background: "#2E3451",
            marginTop: 90,
            color: "white",
          }}
        >
          <div className="flex flex-row justify-between footer-items dm-sans">
            <div style={{ width: "33%" }}>
              Anurag <br /> PR Head
              <br />
              +91-70615-20276
              <br />
              <br />
              Ankit Kumar <br /> PR Head
              <br />
              +91-83403-49585
              <br />
              <br />
            </div>
            <div
              className="footer-img-1"
              style={{ width: "15%", marginTop: "auto", paddingTop: "2vw" }}
            >
              <img src={footer_logo} style={{ width: "13vw" }} />
            </div>
            <div className="flex flex-col items-end footer-right dm-sans">
              <div>For business- related </div>
              <div>queries, contact</div>
              <div>
                alcheringa@iitg.ac.in
                <br />
                <br />
              </div>
              <div className="flex flex-row items-center icons-all">
                <div className="mx-2 social-icons flex justify-between">
                  <a
                    href="https://www.threads.net/@alcheringaiitg"
                    target="_blank"
                  >
                    <img src={threads} style={{ height: 35 }} />
                  </a>
                </div>
                <div className="mx-2 social-icons flex justify-between">
                  <a
                    href="https://www.instagram.com/alcheringaiitg/"
                    target="_blank"
                  >
                    <img src={instagramp} style={{ height: 35 }} />
                  </a>
                </div>
                <div className="mx-2 social-icons">
                  <a
                    href="https://www.facebook.com/alcheringaiitg"
                    target="_blank"
                  >
                    <img src={facebookp} style={{ height: 30 }} />
                  </a>
                </div>
                <div className="mx-2 social-icons">
                  <a
                    href="https://www.youtube.com/c/AlcheringaIITG"
                    target="_blank"
                  >
                    <img src={youtubep} style={{ height: 30 }} />
                  </a>
                </div>
                <div className="mx-2 social-icons">
                  <a
                    href="https://www.linkedin.com/company/alcheringaiitguwahati/mycompany/"
                    target="_blank"
                  >
                    <img src={linkedinp} style={{ height: 30 }} />
                  </a>
                </div>
                <div className="ml-2 social-icons">
                  <a href="https://twitter.com/alcheringaiitg" target="_blank">
                    <img src={twitterp} style={{ height: 30 }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <center>
            <div
              style={{ width: "13%", marginTop: 30 }}
              className="footer-img-2"
            >
              <img src={footer_logo} style={{ width: "12vw" }} />
            </div>
          </center>
          <div
            className="text-center mt-4 Heading-pro"
            style={{
              fontSize: "6vw",
              transform: "translate(0,12px)",
              paddingTop: "2vw",
            }}
          >
            IIT GUWAHATI'S
          </div>
          <div
            className="text-center bottom-tag dm-sans"
            style={{ fontWeight: "700" }}
          >
            ALCHERINGA
          </div>
        </footer>

        <script src="https://cdn.tailwindcss.com"></script>
      </React.Fragment>
    );
  }
}

export default Footer;
