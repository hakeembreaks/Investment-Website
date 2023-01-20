import React from "react";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <img className="logo" src="/img/logo.png" alt="logos" />
      <ul>
        <li>Home</li>
        <li className="invest">Invest</li>
        <li className="how">How it works</li>
      </ul>
      <button className="btn">Get Funding</button>
    </nav>
  );
}
