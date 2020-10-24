import React from "react";
import "../css/Footer.css";
import logo from "../images/amazon-logo.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <button
        className="footer__scrollButton btn btn-block btn-secondary rounded-0"
        onClick={scrollToTop}
      >
        Back to top
      </button>

      <div className="footer__quickLinks row d-flex justify-content-center text-white m-0">
        <div className="col-12 col-md-3 p-2 p-md-5">
          <h5>Get To Know Us</h5>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Sustainability</li>
            <li>Press Center</li>
            <li>Investment Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Tours</li>
          </ul>
        </div>
        <div className="col-12 col-md-3 p-2 p-md-5">
          <h5>Make Money With Us</h5>
          <ul>
            <li>Sell Products on Amazon</li>
            <li>Sell Apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self Publish with Us</li>
            <li>Host an Amzon Hub</li>
            <li>See More Make Money with Us</li>
          </ul>
        </div>
        <div className="col-12 col-md-3 p-2 p-md-5">
          <h5>Amazon Payment Products</h5>
          <ul>
            <li>Amazon Rewards Visa Signature Cards</li>
            <li>Amazon.com Store Card</li>
            <li>Amazon Business Card</li>
            <li>Amazon Business Line of Credit</li>
            <li>Shop with Points</li>
            <li>Credit Card Marketplace</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div className="col-12 col-md-3 p-2 p-md-5">
          <h5>Let Us Help You</h5>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Polocies</li>
            <li>Amazon Prime</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Amazon Assistant</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <div className="row border-top border-secondary text-white m-0">
        <div className="footer__statement col-12 d-flex flex-column text-center p-0">
          <img className="m-auto" src={logo} alt="Amazon" />
          <ul className="ml-0 p-0">
            <li className="d-inline-block">Conditions of Use</li>
            <li className="d-inline-block">Privacy Policy</li>
            <li className="text-muted d-inline-block">
              © 1996-2020, Amazon.com, Inc. or its affiliates
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
