import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
// import Header from './Homepage/Components/Header';
// import Navbar from './Homepage/Components/Navbar';
// import Contents from './Homepage/Components/Contents';
import Header from './Initiatives/Components/Header';
import Middlepart from './Initiatives/Components/Middlepart';

function App() {
  const middlePartRef = useRef(null);
  return (
    <div style={{overflow:"hidden"}}>
      
      {/* <Navbar style={{position:'absolute',top:'1vw'}}></Navbar>
      <Header style={{position:'relative'}}></Header>
      <Contents style={{marginBottom:'-2vw'}}></Contents> */}
      <Header></Header>
      <Middlepart ref={middlePartRef}></Middlepart>
      {/* <div><p></p></div> */}
    </div>
  );
}

export default App;
