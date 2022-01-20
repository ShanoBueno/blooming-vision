import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/main/1.png"
import image2 from "../../assets/main/2.png"
import image3 from "../../assets/main/3.png"
import image4 from "../../assets/main/4.png";
import image5 from "../../assets/main/5.png";
import image6 from "../../assets/main/6.png";
import image7 from "../../assets/main/7.png";
import image8 from "../../assets/main/8.png";



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
        <div>
          <img src={image4} />
        </div>
        <div>
          <img src={image5} />
        </div>
        <div>
          <img src={image6} />
        </div>
        <div>
          <img src={image7} />
        </div>
        <div>
          <img src={image8} />
        </div>
      </Carousel>
    </section>
  );

}

export default MainCarousel; 