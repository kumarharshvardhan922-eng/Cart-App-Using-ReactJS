import React from "react";

export default function Footer() {
  return (
    <footer className="app-footer mt-5">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-3">
            <h6>Get to Know Us</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#about">About Apna Cart</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press Releases</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Connect with Us</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#instagram">Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Make Money with Us</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#sell">Sell on Apna Cart</a></li>
              <li><a href="#affiliate">Affiliate Program</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Let Us Help You</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#account">Your Account</a></li>
              <li><a href="#returns">Returns Centre</a></li>
              <li><a href="#help">Help</a></li>
            </ul>
          </div>
        </div>
        <hr className="footer-divider" />
        <p className="text-center mb-0 footer-copy">
          © {new Date().getFullYear()} Apna Cart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
