import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li>Conditions of Use</li>
          <li>Privacy Notice</li>
          <li>Interest-Based Ads</li>
          <li>
            © {new Date().getFullYear()} zetflix.com, Inc. or its affiliates
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
