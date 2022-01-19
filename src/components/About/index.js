import React from 'react';

import { BsFlower1 } from "react-icons/bs";
import { GiLovers } from "react-icons/gi";
import { GiSpade } from "react-icons/gi";

function About() {
  return (
    <section className="my-5">
      <div className="icons">
        <BsFlower1 size={50} /> <GiLovers size={50} /> <GiSpade size={50} />
      </div>
      <section className="blurb">
        <h2>     About     </h2>
        <p>
          A labor of love, Bronte and Zeb have are passionate about bringing
          custom and eyecatching features to homes, weddings, and events for
          over five years now. Whether you are looking for floral installations,
          landscaping enhancement, or floral arragements, Blooming Visions will
          cater to your needs, with negotiable pricing, and stellar
          communication.{" "}
        </p>
      </section>
    </section>
  );
}

export default About; 