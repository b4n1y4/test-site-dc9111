import React, { useState } from "react";
import volunteers from "../assets/data/volunteerList";
import team from "../assets/data/team";
import Footer from "../Components/Footer";
import ImageViewer from "../Components/ImageViewer";
import Card from "./Card";

const Team = () => {
  document.title = "D C 9 1 1 1 | Volunteers";

  const [showImg, setShowImg] = useState({ imgURL: "", name: "", show: false });

  if (!showImg.show) {
    document.getElementById("root").style.overflowY = "scroll";
  } else {
    document.getElementById("root").style.overflowY = "hidden";
  }

  const newVolunteers = volunteers.sort((a, b) => {
    let x = a.name.toLowerCase(),
      y = b.name.toLowerCase();
    if (x > y) {
      return 1;
    }
    if (x < y) {
      return -1;
    }
    return 0;
  });

  return (
    <>
      {showImg.show ? (
        <ImageViewer props={showImg} setShowImg={setShowImg} />
      ) : (
        ""
      )}
      <div className="page-content volunteers">
        <h1 className="title">
          Organizing Team
          <br />
          ---
        </h1>
        <div className="vol-container">
          {team.map((member) => {
            return <Card {...member} setShowImg={setShowImg} />;
          })}
          {newVolunteers.map((volunteer) => {
            return <Card {...volunteer} setShowImg={setShowImg} />;
          })}
        </div>
        <hr />
      </div>
      <Footer />
    </>
  );
};

export default Team;
