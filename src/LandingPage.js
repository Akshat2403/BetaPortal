import Header from "./Homepage/Components/Header";
import Navbar from "./Homepage/Components/Navbar";
import Contents from "./Homepage/Components/Contents";
import Footer from "./components/footer";
const LandingPage = () => {
    return ( 
    <div style={{overflow:"hidden"}}>
        <Navbar style={{position:'absolute',top:'1vw'}}></Navbar>
      <Header style={{position:'relative'}}></Header>
      <Contents style={{marginBottom:'-2vw'}}></Contents>
      <Footer></Footer>
    </div> );
}
 
export default LandingPage;