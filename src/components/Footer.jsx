import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3 bg-dark text-white">
        © {new Date().getFullYear()} Contact Manager. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
