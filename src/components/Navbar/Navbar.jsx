import React from "react";
import Image from "next/image";
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <img src="/logo.jpeg" alt="img" className="logo" />
      </div>
      <div className="right-nav">
        <img src="/prme.jpeg" alt="img" className="prme-pic" />
        <img src="/accredit.jpeg" alt="img" className="accredit-pic" />
      </div>
    </div>
  );
};

export default Navbar;
