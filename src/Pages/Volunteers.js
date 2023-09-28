import React, { useState } from "react";
import volunteers from "../assets/data/volunteerList";
import Footer from "../Components/Footer";
import ImageViewer from "../Components/ImageViewer";

const Volunteers = () => {
  document.title = "D C 9 1 1 1 | Volunteers";

  const [showImg, setShowImg] = useState({ imgURL: "", name: "", show: false });

  if (!showImg.show) {
    document.getElementById("root").style.overflowY = "scroll";
  } else {
    document.getElementById("root").style.overflowY = "hidden";
  }

  const handleClick = (obj) => {
    setShowImg({ ...obj });
  };

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
          Volunteers <br />
          ---
        </h1>
        <div className="vol-container">
          {newVolunteers.length === 0 ? (
            <h1 className="section-title title">
              New Volunteer List COMING SOON!
            </h1>
          ) : (
            newVolunteers.map((volunteer) => {
              return (
                <div
                  className="card volunteer"
                  key={volunteer.name}
                  onClick={() => handleClick({ ...volunteer, show: true })}
                >
                  <div className="avatar-container">
                    <img
                      src={volunteer.imgURL}
                      alt={volunteer.name}
                      className="avatar"
                    />
                  </div>
                  <p className="name">{volunteer.name}</p>
                </div>
              );
            })
          )}
        </div>
        <hr />
      </div>
      <Footer />
    </>
  );
};

export default Volunteers;
