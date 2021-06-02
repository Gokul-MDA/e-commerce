import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingOutlinedCart from "@material-ui/icons/ShoppingCartOutlined";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <MenuIcon />
        <a href="amazon.com">
          <h2>E-Commerce</h2>
        </a>
      </div>
      <div className="header__searchBox">
        <div className="header__input">
          <input type="text" placeholder="Search" />
        </div>
        <button className="header__searchButton" type="submit">
          <SearchIcon />
        </button>
      </div>
      <div className="header__menu">
        <a href="#" className="header__menuItem">
          <PersonOutlinedIcon className="header__icons" />
          <h4>Account</h4>
        </a>
        <a href="#" className="header__menuItem">
          <FavoriteBorderOutlinedIcon className="header__icons" />
          <h4>My Items</h4>
        </a>
        <a href="#" className="header__menuItem">
          <ShoppingOutlinedCart />
        </a>
      </div>
    </div>
  );
};

export default Header;
