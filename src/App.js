import React from "react";
import Carousel from "./components/Carousel";
import "./App.css";

// const App = () => {
//   const images = [
//     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
//     "https://images.unsplash.com/photo-1686476020928-1834ccef445b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
//     "https://images.unsplash.com/photo-1686318591060-c9ea73937b1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
//     "https://images.unsplash.com/photo-1672243776119-6e2ce94c6258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
//   ];

//   return (
//     <div className="App">
//       <Carousel images={images} />
//     </div>
//   );
// };
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Competitions from "./Competitions";
import Navbar from "./components/Navbar.js";
import Teams from "./Teams.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/competitions/" element={<Competitions />} />
        <Route path="/teams/" element={<Teams />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
