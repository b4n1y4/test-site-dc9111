import React, { useState } from "react";

import { FaEnvelope, FaTwitter, FaFacebookMessenger } from "react-icons/fa";

import team from "../assets/data/team";
import Footer from "../Components/Footer";
// import Banner from "../assets/banners/event-banner.jpeg";
import ImageViewer from "../Components/ImageViewer";

const Home = () => {
  document.title = "D C 9 1 1 1";

  const [showImg, setShowImg] = useState({ show: false });

  const handleClick = (obj) => {
    setShowImg({ ...obj });
    if (!showImg.show) {
      document.getElementById("root").style.overflowY = "scroll";
    } else {
      document.getElementById("root").style.overflowY = "hidden";
    }
  };

  return (
    <>
      {showImg.show ? (
        <ImageViewer props={showImg} setShowImg={setShowImg} />
      ) : (
        ""
      )}
      <div className="page-content">
        <h1 className="title">
          DC9111 <br /> ---
        </h1>
        <h2 className="subtitle">For the Hackers, By the Hackers</h2>
        <section className="page-section">
          <h1 className="section-title title">DEF CON Delhi Group</h1>
          <p className="section-text">
            DEF CON Delhi Group a.k.a <strong>DC9111</strong> is the local
            chapter of DEF CON Conference held every year in Las Vegas. We are
            based in the country capital New Delhi. We highly endorse
            programmers, hackers, techies and all sort of tech related people
            and encourage them to come up and showcase what they've got! So,
            let's meet soon!
          </p>
        </section>
        <section className="page-section">
          <h1 className="section-title title">0x06</h1>
          {/* <img
            src={Banner}
            alt=""
            className="page-banner"
            style={{ zIndex: "1" }}
          /> */}
          <p className="section-text">
            DEF CON Delhi Group happens to be hosting India's biggest non profit
            <strong> FREE FOR ALL</strong> hacker events each year. This year in
            the DC9111 <strong>0x06</strong> offline event, the audience will
            get to level up yet again and that too in person! Listen to the top
            notch speakers speak on some of the hottest topics in the Cyber
            Security domain, enjoy FREE trainings and the CTF hosted by us. This
            year our main goal will be to provide that in person hacker meetup
            experience to all those who haven't yet experienced the same before.
          </p>
        </section>

        <hr />

        <section className="page-section teams">
          <h1 className="title">Team</h1>
          <div className="slider-container">
            <div className="team-slider">
              {team.map((member) => {
                return (
                  <div
                    className="card team"
                    key={member.id}
                    onClick={() => handleClick({ ...member, show: true })}
                  >
                    <img
                      src={member.imgURL}
                      alt={member.id}
                      className="avatar"
                    />
                    <p className="name">{member.name}</p>
                    <p className="role">[{member.role}]</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <hr />

        <section className="page-section contact">
          <h1 className="title">Contact Us</h1>
          <ul className="section-text">
            <li>
              <a
                href="mailto:mail@defcon9111.org"
                className="nav-link contact-link"
              >
                <FaEnvelope /> Write us an email
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/intent/tweet?screen_name=dc_9111"
                className="nav-link contact-link"
              >
                <FaTwitter /> Tweet us on Twitter
              </a>
            </li>
            <li>
              <a href="https://m.me/dc_9111" className="nav-link contact-link">
                <FaFacebookMessenger /> Ping us on Messenger
              </a>
            </li>
          </ul>
        </section>

        <hr />
      </div>
      <Footer />
    </>
  );
};

export default Home;
