import React from "react";

const Info = ({ infoStatus }) => {
  return (
    <div className={`info ${infoStatus ? "active-info" : ""}`}>
      <h2 className="info-title">About</h2>
      <img
        src="https://i.pinimg.com/236x/eb/54/f5/eb54f5c89710718346f02e24c18334cd--nujabes-graffiti-art.jpg"
        alt="Nujabes"
      />
      <h3 className="info-about">This is my tribute to the late</h3>
      <h3 className="info-about">and great Nujabes.</h3>
      <h3 className="rest">Rest in beats.</h3>
      <h4 className="credit">Made by Alex Dang</h4>
    </div>
  );
};

export default Info;
