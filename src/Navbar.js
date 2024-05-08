import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
     <h1>Zetflix</h1>
     
      {/* <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      /> */}
      <ul className="nav-links">
        <li className="nav-link">Home</li>
        <li className="nav-link">TV Shows</li>
        <li className="nav-link">Movies</li>
        <li className="nav-link">New & Popular</li>
        <li className="nav-link">My List</li>
      </ul>
    </div>
  );
};

export default Navbar;
