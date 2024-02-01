import React from "react";
import "./Avatar.css";
import CardContainer from "./CardContainer";

const Avatar = ({datas,title}) => {
  return (
    <div className="container">
      <div className="full">
        <div className="header">
            {title}
          <h1>satisfied customers</h1>
        </div>
        <div className="medium">
            {datas.map((data,index) => (

              <CardContainer
                imageSrc={data.imageSrc}
                userImageSrc={data.userImageSrc}
                content={data.content}
              />

            ))}
        </div>
      </div>
    </div>
   
   
  );
};

export default Avatar;
