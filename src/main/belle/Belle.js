import React from "react";

import "./Belle.css";

export default function Belle() {
  return (
    <div className="belle">
      <h1>Belle</h1>
      <h4>
        Jeetar is an e-commerce platform that offers various products and
        services for customers to <br />
        use. The platform allows same day delivery of items. Customers can pay
        in full pay instalments <br />
        using any preferred payment option and this is exceptional because in
        the market now it is very <br />
        hard to get a platform that gives one all these functions...
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
      <img className="rec-21" src="/img/Rectangle 21.png" alt="phone" />
      <img className="rec-22" src="/img/Rectangle 22.png" alt="phone" />
      <img className="rec-23" src="/img/Rectangle 23.png" alt="phone" />
    </div>
  );
}
