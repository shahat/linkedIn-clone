import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="./images/linkedin.png" alt />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
