import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import style from "./footer.module.css";
function Footer(props) {
  return (
    <Router>
      <div className={style.footer}>
        <div className={style.footerMain}>
          <div className={style.mainLeft}>
            <Link to="/home" className="urlLeft">
              <img
                src={require("../../assets/img/logo-white.svg")}
                alt="our logo in white"
              />
            </Link>
            <ul className={style.leftList}>
              <li className={style.listUrl}>
                <Link to="/" className={style.urlFooter}>
                  Book Ticket
                </Link>
              </li>
              <li className={style.listUrl}>
                <Link to="/about-us" className={style.urlFooter}>
                  About Us
                </Link>
              </li>
              <li className={style.listUrl}>
                <Link to="/#contact-us" className={style.urlFooter}>
                  Contact Us
                </Link>
              </li>
              <li className={style.listUrl}>
                <Link to="/#how" className={style.urlFooter}>
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.downloadInfo}>
            <h5 className={style.downloadHeader}>
              GET THE APP FROM YOUR FAVOURITE APP STORE
            </h5>
            <div className={style.store}>
              <Link to="" className={style.storeUrl}>
                <img
                  src={require("../../assets/img/google-play-download-android-app (1).svg")}
                  alt=""
                  className={style.storeImg}
                />
              </Link>
              <Link
                to=""
                className={style.storeUrl}
                style={{ marginLeft: " -9em" }}
              >
                <img
                  src={require("../../assets/img/aivalable-on-the-app-store-2 (1).svg")}
                  alt=""
                  className={style.storeImg}
                  style={{ width: "50%" }}
                />
              </Link>{" "}
            </div>
          </div>
        </div>
        <div className={style.footerSub}>
          <p className={style.sub}>
            Copyright &copy; 2020. Safaripass Ltd. All Rights Reserved.
          </p>
          <p className={style.sub}>Terms and Conditions|Privacy Policy</p>
        </div>
      </div>
    </Router>
  );
}

Footer.propTypes = {};

export default Footer;
