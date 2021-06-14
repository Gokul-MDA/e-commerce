import React from "react";
import "./SideMenu.css";

const SideMenu = ({ isOpen, toggle }) => {
  return (
    <div className="sideMenu__Container" isOpen={isOpen} onClick={toggle}>
      <button onClick={toggle}>hi</button>
    </div>
  );
};

export default SideMenu;
