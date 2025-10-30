import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">MyShop</h1>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#cart">Cart</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
