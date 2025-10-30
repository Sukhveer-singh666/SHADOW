import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <p>© {new Date().getFullYear()} MyShop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
