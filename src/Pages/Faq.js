import React from "react";

import faqs from "../assets/data/faqs";
import Footer from "../Components/Footer";

const Faq = () => {
  document.title = "D C 9 1 1 1 | FAQ";

  return (
    <>
      <div className="page-content">
        <h1 className="title">
          FAQ <br />
          <p className="subtitle">A list of Frequently Asked Questions</p>
          ---
        </h1>
        {faqs.map((faq) => {
          return (
            <section className="page-section" key={faq.id}>
              <h1 className="title">{faq.q}</h1>
              <p className="section-text">{faq.a}</p>
            </section>
          );
        })}
        <hr />
      </div>
      <Footer />
    </>
  );
};

export default Faq;
