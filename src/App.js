import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Competitions from "./Competitions";
import Navbar from "./components/Navbar.js";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/competitions/" element={<Competitions/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
