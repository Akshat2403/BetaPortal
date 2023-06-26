import Header from "./Initiatives/Components/Header";
import Middlepart from "./Initiatives/Components/Middlepart";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
const InitiativesPage = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar ind={2}></Navbar>
      <Header></Header>
      <Middlepart></Middlepart>
      <Footer></Footer>
    </div>
  );
};

export default InitiativesPage;
