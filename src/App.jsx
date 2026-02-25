import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./Componets/Navbar";
import Hero from "./Sections/Hero";
// import About from "./Sections/About"; 
import Gallery from "./Sections/Gallery";
import Collection from "./Sections/Collection";
import Contact from "./Sections/Contact";
import Footer from "./Componets/Footer";

function App() {
  return (
    <div className="scroll-smooth"> 
      <Menu />
      <section id="home"><Hero /></section>
      {/* <section id="about" className="py-20 bg-white"></section> */}
      <section id="gallery"><Gallery /></section>
      <section id="Collection"><Collection /></section>
      <section id="Contact"><Contact /></section>
      <Footer />
    </div>
  );
}
export default App;