import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/main/1.png"
import image2 from "../../assets/main/2.png"
import image3 from "../../assets/main/3.png"

function MainCarousel(){
  return (
    <section>
      <Carousel>
        <div>
          <img src={image1} />
         
        </div>
        <div>
          <img src={image2} />
         
        </div>
        <div>
          <img src={image3} />
        
        </div>
      </Carousel>
      
    </section>
  );

}

export default MainCarousel; 