import React from "react";
import About from "./components/About"
import Header from "./components/Header"
import MainCarousel from "./components/Main-Carousel";
import Blurb from "./components/Blurb";
import "./App.css";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="container">
      <Header></Header>

      <main>
        <MainCarousel></MainCarousel>
        <About></About>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
