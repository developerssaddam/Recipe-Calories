import "./App.css";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container mx-auto">
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>

      <main>
        <SectionTitle></SectionTitle>
        <Main></Main>
      </main>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
