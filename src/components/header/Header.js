import React from "react";

import image from "../../assets/img.png";

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <div className="header-img">
        <img className="image" src={image} alt="" />
      </div>
      <h1 className="title">Check List</h1>
    </header>
  );
};

export default Header;
