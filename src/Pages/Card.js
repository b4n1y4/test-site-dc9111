import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Card = ({ name, role, id, imgURL, linkedin, setShowImg }) => {
  const handleClick = (obj) => {
    setShowImg({ ...obj });
  };
  return (
    <div className="card volunteer" key={id}>
      <img
        src={imgURL}
        alt={id}
        className="avatar"
        onClick={() =>
          handleClick({ name, role, id, imgURL, linkedin, show: true })
        }
      />
      <div className="card-text">
        <p className="name">{name}</p>
        {role ? <p className="role">[{role}]</p> : ""}

        <a
          className="linkedin"
          href={linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Card;
