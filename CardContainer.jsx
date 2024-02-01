import React from "react";
import datas from "./../../utils/data.js";
import "./Avatar.css";

const CardContainer = ({ imageSrc, userImageSrc, content }) => {
  return (
    <div className="Avatar-card">
      <img src={imageSrc} alt="" />
      <div className="avatar-side">
        <img src={userImageSrc} alt="" />
      </div>
      <div className="avatar-bot">{content}</div>
    </div>
  );
};

export default CardContainer;
