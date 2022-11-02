import React from "react";

import Footer from "../Components/Footer";

const Coc = () => {
  document.title = "D C 9 1 1 1 | Code Of Conduct";

  return (
    <>
      <div className="page-content">
        <h1 className="title">
          Code of Conduct <br />
          ---
        </h1>
        <p className="section-text">
          At the event, you are most welcome to participate in every sort of
          activity stated that it doesn’t cause any ruckus. <br />
          <br /> Your radical viewpoint and questioning attitude will be highly
          appreciated. <br />
          <br />
          We DO NOT condone harassment against ANY participant, for ANY reason.
          <br />
          <br />
          Harassment includes deliberate intimidation and targeting individuals
          in a manner that makes them feel uncomfortable, unwelcomed, or afraid.
          <br />
          <br />
          Participants asked to stop any harassing behavior are expected to
          comply immediately. <br />
          <br /> We (The Team) and the venue security will respond to harassment
          in the manner we deem appropriate, including but not limited to
          expulsion from the event with the surety that you don’t show up at any
          following events we conduct. <br />
          <br /> This Code of Conduct applies to everyone participating at DEF
          CON Delhi Group (DC9111) events - from attendees and exhibitors to
          speakers, press & volunteers (Goons). <br />
          <br /> Anyone can report harassment. If you are being harassed, notice
          that someone else is being harassed, or have any other concerns, you
          can contact a Goon, go to the registration desk, or info booth. <br />
          <br />
        </p>
        <hr />
        <h1 className="title f">
          TX <br /> Team Lead <br /> DEF CON Delhi Group (DC9111)
        </h1>
        <p className="subtitle">
          Excerpts from DEF CON Conference Code of Conduct
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Coc;
