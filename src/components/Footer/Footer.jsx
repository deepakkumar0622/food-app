import { assets } from "../../assets/frontend_assets/assets";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            debitis, culpa molestiae accusantium nulla, temporibus, consectetur
            cum dolor natus similique aliquid. Quo esse fugit ratione, nesciunt
            cupiditate repellendus debitis libero.
          </p>
          <div className="social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+91 9943564534</li>
            <li>abc@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Copyright 2024 &#169; Tomato.com - All Rights Reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
