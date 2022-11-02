import React from "react";
import { FaTimes } from "react-icons/fa";

const ImageViewer = ({ props, setShowImg }) => {
  const { imgURL, name } = { ...props };
  const handleClick = (e) => {
    if (
      !e.target.classList.contains("img-container") &&
      !e.target.classList.contains("big-img")
    ) {
      setShowImg({ show: false });
    }
  };

  return (
    <div className="image-viewer" style={{ top: `${window.scrollY}` }}>
      <div className="overlay" onClick={handleClick}>
        <FaTimes className="menu-icon" onClick={handleClick} />

        <div className="img-container pulse">
          <img src={imgURL} alt="img" className="big-img" />
        </div>

        <p className="title pulse">{name}</p>
      </div>
    </div>
  );
};

export default ImageViewer;
