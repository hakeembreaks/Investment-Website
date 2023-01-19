import React from "react";

import "./Stray.css";

export default function Stray() {
  return (
    <div className="stray">
      <img className="stray-1" src="/img/Rectangle 17.png" alt="stray" />
      <img className="stray-2" src="/img/Rectangle 18.png" alt="stray" />
      <img className="stray-3" src="/img/Rectangle 19.png" alt="stray" />
      <h1>Stray</h1>
      <h4>
        Shop City is an e-commerce platform that offers various products and
        services for customers <br />
        to use. The platform allows same day delivery of items. Customers can
        pay in full &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; pay <br />
        instalments using any preferred payment option and this is exceptional
        because in the market <br />
        now it is very hard to get a platform that gives one all these
        functions...
      </h4>
      <h2 className="amount-requested"> Amount Requested </h2>
      <p className="amount-requested-figure">$100,000.00</p>
      <h2 className="channels"> Channels </h2>
      <p className="mobile">Mobile App, Website</p>
      <h2 className="amount-raised"> Amount Raised </h2>
      <p className="amount-figure">$55,000.00</p>
      <h2 className="days"> Days Remaining </h2>
      <p className="days-figure">10 days</p>
      <h2 className="shop-city">www.shopcity.com</h2>
      <button className="view-details">View Details</button>
      <button className="donate">Donate</button>
    </div>
  );
}
