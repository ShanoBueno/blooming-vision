import React from "react";
import About from "./components/About"
import Header from "./components/Header"
import MainCarousel from "./components/Main-Carousel";
import Blurb from "./components/Blurb";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header></Header>

      <main>
        <MainCarousel></MainCarousel>
        <About></About>
        
      </main>
    </div>
  );
}

export default App;
