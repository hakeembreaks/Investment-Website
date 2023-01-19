import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Copyright @ Mindfully 2023. All Rights Reserved
      </p>
      <div className="image">
        <img className="social-1" src="/img/Vector (1).png" alt="socials" />
        <img className="social-2" src="/img/Vector (2).png" alt="socials" />
        <img className="social-3" src="/img/Vector (3).png" alt="socials" />
        <img className="social-4" src="/img/Vector (4).png" alt="socials" />
      </div>
    </footer>
  );
}
