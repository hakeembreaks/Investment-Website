import React from "react";

import "./Hero.css";

export default function Hero() {
  return (
    <div className="main">
      <div className="main-hero">
        <section className="hero">
          <h1 className="text">Invest in Highly Vetted Business.</h1>
          <p>
            Access highly vetted investment opportunities in start ups <br />
            and brands who needs to raise funds for projects.
          </p>
          <button className="btn">Read More</button>
          <div className="p-images">
            <div className="images">
              <img className="pics1" src="/img/Ellipse 2.png" alt="pict" />
              <img className="pics2" src="/img/Ellipse 3.png" alt="pict" />
              <img className="pics3" src="/img/Ellipse 4.png" alt="pict" />
            </div>
            <h5> 100+ Investors </h5>
          </div>
          <div className="man-picture">
            <img className="human-top" src="/img/pngegg.png" alt="humans" />
            <img className="human" src="/img/man.png" alt="humanss" />
          </div>
        </section>
      </div>
    </div>
  );
}
