import React from "react";

import Footer from "../Components/Footer";

import t from "../assets/shop/tshirt.jpeg";

const Shop = () => {
  document.title = "D C 9 1 1 1 | Shop";

  return (
    <>
      <div className="page-content shop ">
        <div className="item-container ">
          <img src={t} alt="" className="product-img" />
          <h1 class="title shop-coming-soon">
            <span className="accent">OFFICIAL</span> MERCH <br />
            COMING <span className="accent">SOON!</span>
          </h1>
        </div>
        <hr />
      </div>
      <Footer />
    </>
  );
};

export default Shop;
