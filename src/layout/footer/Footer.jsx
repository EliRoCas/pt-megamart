import { WhatsappLogo, Phone } from "@phosphor-icons/react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h2 className="footer-title">MegaMart</h2>
        <div className="contact-info">
          <p>
            <WhatsappLogo size={16} /> WhatsApp
            <br />
            <span>+1 202-918-2132</span>
          </p>
          <p>
            <Phone size={16} /> Call Us
            <br />
            <span>+1 202-918-2132</span>
          </p>
        </div>
        <p>Download app</p>
        <div className="app-download">
          <img
            className="app-store"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Pre-order_on_the_Mac_App_Store_Badge_ESMX_RGB_blk.svg"
            alt="App Store"
          />

          <img
            className="google-play"
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
          />
        </div>
      </div>

      <div className="footer-popular">
        <h4 className="section-title">Most Popular Categories</h4>
        <ul>
          <li>Staples</li>
          <li>Beverages</li>
          <li>Personal Care</li>
          <li>Home Care</li>
          <li>Baby Care</li>
          <li>Vegetables & Fruits</li>
          <li>Snacks & Foods</li>
          <li>Dairy & Bakery</li>
        </ul>
      </div>

      <div className="footer-customer">
        <h4 className="section-title">Customer Services</h4>
        <ul>
          <li>About Us</li>
          <li>Terms & Conditions</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
          <li>E-waste Policy</li>
          <li>Cancellation & Return Policy</li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
