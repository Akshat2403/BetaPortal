import alcherimg from "../Images/alcher_image.png";
import WordingsImage from "./Wordingimage";
import styles from "./Header.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Header = () => {
  return (
    // <div>
    //   <div
    //     id="carouselExampleIndicators"
    //     class="carousel slide"
    //     style={{ position: "relative" }}
    //   >
    //     <div
    //       class="carousel-indicators"
    //       style={{
    //         display: "flex",
    //         position: "absolute",
    //         bottom: "3vw",
    //         padding: "1vw",
    //         marginBottom: "2vw",
    //       }}
    //     >
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="0"
    //         class="active"
    //         aria-current="true"
    //         aria-label="Slide 1"
    //         fdprocessedid="9vddhq"
    //         style={{
    //           borderRadius: "100%",
    //           width: "1vw",
    //           height: "1vw",
    //           marginLeft: "1vw",
    //           marginRight: "1vw",
    //         }}
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="1"
    //         aria-label="Slide 2"
    //         fdprocessedid="ghkrc"
    //         style={{
    //           borderRadius: "100%",
    //           width: "1vw",
    //           height: "1vw",
    //           marginLeft: "1vw",
    //           marginRight: "1vw",
    //         }}
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="2"
    //         aria-label="Slide 3"
    //         fdprocessedid="5anvz7"
    //         style={{
    //           borderRadius: "100%",
    //           width: "1vw",
    //           height: "1vw",
    //           marginLeft: "1vw",
    //           marginRight: "1vw",
    //         }}
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="3"
    //         aria-label="Slide 3"
    //         fdprocessedid="5anvz7"
    //         style={{
    //           borderRadius: "100%",
    //           width: "1vw",
    //           height: "1vw",
    //           marginLeft: "1vw",
    //           marginRight: "1vw",
    //         }}
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="4"
    //         aria-label="Slide 3"
    //         fdprocessedid="5anvz7"
    //         style={{
    //           borderRadius: "100%",
    //           width: "1vw",
    //           height: "1vw",
    //           marginLeft: "1vw",
    //           marginRight: "1vw",
    //         }}
    //       ></button>
    //     </div>
    //     <div class="carousel-inner">
    //       <div class="carousel-item active">
    //         {/* <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg> */}
    //         <img
    //           src={alcherimg}
    //           style={{ width: "100vw", height: "100vh" }}
    //           alt=""
    //         />
    //         <div style={{ position: "absolute", right: "1vw", top: "3vw" }}>
    //           <WordingsImage></WordingsImage>
    //         </div>
    //       </div>
    //       <div class="carousel-item">
    //         <img
    //           src={alcherimg}
    //           style={{ width: "100vw", height: "100vh" }}
    //           alt=""
    //         />
    //         <div style={{ position: "absolute", right: "1vw", top: "2vw" }}>
    //           <WordingsImage></WordingsImage>
    //         </div>
    //         {/* <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg> */}
    //       </div>
    //       <div class="carousel-item">
    //         <img
    //           src={alcherimg}
    //           style={{ width: "100vw", height: "100vh" }}
    //           alt=""
    //         />
    //         <div style={{ position: "absolute", right: "1vw", top: "2vw" }}>
    //           <WordingsImage></WordingsImage>
    //         </div>

    //         {/* <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg> */}
    //       </div>
    //       <div class="carousel-item">
    //         <img
    //           src={alcherimg}
    //           style={{ width: "100vw", height: "100vh", position: "relative" }}
    //           alt=""
    //         />
    //         <div style={{ position: "absolute", right: "1vw", top: "2vw" }}>
    //           <WordingsImage></WordingsImage>
    //         </div>
    //         {/* <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg> */}
    //       </div>
    //       <div class="carousel-item">
    //         <img
    //           src={alcherimg}
    //           style={{ width: "100vw", height: "100vh" }}
    //           alt=""
    //         />
    //         <div style={{ position: "absolute", right: "1vw", top: "2vw" }}>
    //           <WordingsImage></WordingsImage>
    //         </div>
    //         {/* <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg> */}
    //       </div>
    //     </div>
    //     <button
    //       class="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide="prev"
    //       fdprocessedid="l35zrl"
    //     >
    //       {/* <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> --> */}
    //       <span class="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       class="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide="next"
    //       fdprocessedid="91sk1"
    //     >
    //       {/* <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> --> */}
    //       <span class="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>

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
          <div className={styles.bgd}>
            {/* <img style={{zIndex:'-1'}} src={alcherimg} alt="Image 1" /> */}
            {/* <WordingsImage></WordingsImage> */}
          </div>
          <div className={styles.bgd}>
            {/* <img src={alcherimg} alt="Image 2" /> */}
            {/* <WordingsImage></WordingsImage> */}
          </div>
          <div className={styles.bgd}>
            {/* <img src={alcherimg} alt="Image 3" /> */}
            {/* <WordingsImage></WordingsImage> */}
          </div>
          <div className={styles.bgd}>
            {/* <img src={alcherimg} alt="Image 4" /> */}
            {/* <WordingsImage></WordingsImage> */}
          </div>
          <div className={styles.bgd}>
            {/* <img src={alcherimg} alt="Image 5" /> */}
            {/* <WordingsImage></WordingsImage> */}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
