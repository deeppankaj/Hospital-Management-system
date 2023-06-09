import React from 'react';
import { AiOutlineArrowRight ,AiOutlineUser} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { RiCapsuleLine } from "react-icons/ri"
import { BiShieldPlus } from "react-icons/bi"
import { TbAmbulance ,TbMicroscope } from "react-icons/tb";
import about from "../../assests/images/about.png"

const Explore = () => {
  return (
    <section className="explore-section">
      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <h4 className="title mb-4 font-weight-bold">Explore By Categories</h4>
              <p className="mx-auto mb-0 col-lg-8 col-12 text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl col-md-4 col-12 mt-4 pt-2">
            <div className="card features feature-primary border-0 p-4 rounded-md shadow">
              <div className="flex explore-icon">
                <AiOutlineUser/>
              </div>
              <div className="card-body p-0 mt-3">
                <p className="title text-dark h5">Doctors</p>
                <p className="text-muted mt-3">Due to its wide spread use as filler text</p>
                <Link to="/" className="link">Find here <AiOutlineArrowRight/></Link>
              </div>
            </div>
          </div>

          <div className="col-xl col-md-4 col-12 mt-4 pt-2">
            <div className="card features feature-primary border-0 p-4 rounded-md shadow">
              <div className="flex explore-icon">
                <RiCapsuleLine />
              </div>
              <div className="card-body p-0 mt-3">
                <p className="title text-dark h5">Clinics</p>
                <p className="text-muted mt-3">Due to its wide spread use as filler text</p>
                <Link to="/" className="link">Find here <AiOutlineArrowRight/></Link>
              </div>
            </div>
          </div>

          <div className="col-xl col-md-4 col-12 mt-4 pt-2">
            <div className="card features feature-primary border-0 p-4 rounded-md shadow">
              <div className="flex explore-icon">
                <TbMicroscope />
              </div>
              <div className="card-body p-0 mt-3">
                <p className="title text-dark h5">Labs</p>
                <p className="text-muted mt-3">Due to its wide spread use as filler text</p>
                <Link to="/" className="link">Find here <AiOutlineArrowRight/></Link>
              </div>
            </div>
          </div>

          <div className="col-xl col-md-4 col-12 mt-4 pt-2">
            <div className="card features feature-primary border-0 p-4 rounded-md shadow">
              <div className="flex explore-icon">
                <TbAmbulance/>
              </div>
              <div className="card-body p-0 mt-3">
                <p className="title text-dark h5">Emergency</p>
                <p className="text-muted mt-3">Due to its wide spread use as filler text</p>
                <Link to="/" className="link">Find Here <AiOutlineArrowRight/></Link>
              </div>
            </div>
          </div>

          <div className="col-xl col-md-4 col-12 mt-4 pt-2">
            <div className="card features feature-primary border-0 p-4 rounded-md shadow">
              <div className="flex explore-icon">
                <BiShieldPlus/>
              </div>
              <div className="card-body p-0 mt-3">
                <p className="title text-dark h5">Insurance</p>
                <p className="text-muted mt-3">Due to its wide spread use as filler text</p>
                <Link to="/" className="link">Find Here <AiOutlineArrowRight/></Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container about">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-6">
            <div className="section-title me-lg-5">
              <p className="badge rounded-pill ">About Doctris</p>
              <h4 className="title mt-3 mb-4 font-weight-bold text-xl">Good Services And Better <br /> Health By Our Specialists</h4>
              <p className="para-desc text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
              <p className="para-desc text-muted">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
              <div className="mt-4">
                <Link to="/about" className="btn ">Read More</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="position-relative">
              <img src={about} className="img-fluid" alt="" />
              {/* <div className="play-icon">
                <a to="" data-type="youtube" data-id="yba7hPeTSjk" className="play-btn lightbox video-play-icon">
                  <i className="mdi mdi-play text-primary rounded-circle shadow"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Explore;
