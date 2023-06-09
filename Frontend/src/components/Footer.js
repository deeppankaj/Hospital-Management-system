import React from "react";
import { Link } from "react-router-dom";
import {BsEnvelope,BsTelephone } from "react-icons/bs";
import { FiLinkedin ,FiTwitter,FiInstagram,FiFacebook,FiHeart ,FiMapPin,FiChevronRight }from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-4 mb-0 mb-md-4 pb-0 pb-md-2">
            <Link to="/" className="logo-footer">
              <img src="../assets/images/logo-light.png" height="22" alt="" />
            </Link>
            <p className="mt-4 me-xl-5">
              Great doctor if you need your family member to get effective
              immediate assistance, emergency treatment or a simple
              consultation.
            </p>
          </div>
          <div className="col-xl-7 col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 className="footer-head">Company</h5>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <Link to="/" className="text-foot">
                      <FiChevronRight /> About us
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-foot">
                      <FiChevronRight /> Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-foot">
                      <FiChevronRight /> Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-foot">
                      <FiChevronRight /> Project
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-foot">
                      <FiChevronRight /> Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-foot">
                      <FiChevronRight /> Login
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 className="footer-head">Departments</h5>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <Link to="/" className="text-foot">
                      <FiChevronRight /> Eye Care
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-foot">
                      <FiChevronRight /> Psychotherapy
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-foot">
                      <FiChevronRight /> Dental Care
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-foot">
                      <FiChevronRight /> Orthopedic
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-foot">
                      <FiChevronRight /> Cardiology
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-foot">
                      <FiChevronRight /> Gynecology
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-foot">
                      <FiChevronRight /> Neurology
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 className="footer-head">Contact us</h5>
                <ul className="list-unstyled footer-list mt-4">
                  <li className="d-flex align-items-center">
                    <a
                      href="mailto:contact@example.com"
                      className="text-foot ms-1"
                    >
                     <BsEnvelope/> contact@example.com
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <a href="tel:+152534-468-854" className="text-foot ms-2">
                    <BsTelephone/> +152 534-468-854
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <Link
                      to="/"
                      className="video-play-icon text-foot ms-2"
                    >
                      <FiMapPin/> on Google map
                    </Link>
                  </li>
                </ul>
                <ul className="list-unstyled social-icon footer-social mb-0 mt-4">
                  <li className="list-inline-item">
                    <FiFacebook/>
                  </li>
                  <li className="list-inline-item">
                    <FiInstagram/>
                  </li>
                  <li className="list-inline-item">
                    <FiTwitter/>
                  </li>
                  <li className="list-inline-item">
                    <FiLinkedin/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="pt-4 footer-bar">
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
                  <FiHeart fill="red" color="red"/> by{" "}
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
      </div>
    </footer>
  );
};

export default Footer;
