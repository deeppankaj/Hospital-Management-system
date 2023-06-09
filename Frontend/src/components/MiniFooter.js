import React from "react";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const MiniFooter = () => {
  return (
    <footer className="py-4">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="text-sm-start text-center">
              <p className="mb-0">
                <script
                  type="text/javascript"
                  id="www-widgetapi-script"
                  src="https://www.youtube.com/s/player/bbe1b497/www-widgetapi.vflset/www-widgetapi.js"
                  async=""
                ></script>
                <script
                  id="iframe_api"
                  src="https://www.youtube.com/iframe_api"
                ></script>
                {new Date().getFullYear()} © Doctris. Design with{" "}
                <FiHeart fill="red" color="red" /> by{" "}
                <Link
                  to="/"
                  target="_blank"
                  className="text-reset text-decoration-none"
                >
                  DeepNapSoftTech Project
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="col-sm-6 mt-4 mt-sm-0">
            <ul className="list-unstyled footer-list text-sm-end text-center mb-0">
              <li className="list-inline-item">
                <Link to="/" className="text-foot me-2">
                  Terms
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/" className="text-foot me-2">
                  Privacy
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/" className="text-foot me-2">
                  About
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/" className="text-foot me-2">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MiniFooter;
