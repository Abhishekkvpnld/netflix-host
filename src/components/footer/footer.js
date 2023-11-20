import React from 'react';
import '../footer/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__column">
          <h4>Questions?</h4>
          <ul>
            <li><a href="/">Help Center</a></li>
            <li><a href="/">Terms of Use</a></li>
            <li><a href="/">Privacy</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Account</h4>
          <ul>
            <li><a href="/">Account</a></li>
            <li><a href="/">Redeem Gift Cards</a></li>
            <li><a href="/">Privacy</a></li>
            <li><a href="/">Speed Test</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Media Center</h4>
          <ul>
            <li><a href="/">contact Us</a></li>
            <li><a href="/">jobs</a></li>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Legal Notices</a></li>
          </ul>
        </div>

      </div>
      <div className="footer__bottom">
        <p>&copy; 2023 Netflix company</p>
      </div>
    </div>
  );
};
export default Footer;
