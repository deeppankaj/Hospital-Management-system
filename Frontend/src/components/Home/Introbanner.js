import React from "react";
import { CgEditFlipH } from "react-icons/cg";
import { FiAirplay } from "react-icons/fi";
import { BiBriefcaseAlt2 } from "react-icons/bi";

const Introbanner = () => {
  return (
    <section className="cta-section my-5">
      <div className="bg-overlay" style={{ opacity: 0.3 }}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-7 col-md-7 offset-md-5">
            <div className=" d-flex cta-card card flex-row p-4 rounded-md shadow position-relative overflow-hidden">
              <BiBriefcaseAlt2 className="cta-icon" />
              <div className="ms-3">
                <h5 className="titles">Our Mission</h5>
                <p className="text-muted para mb-0 cta-para">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated in the 16th century.
                </p>
              </div>
              <div className="big-icon">
              <BiBriefcaseAlt2  />

                <i className="uil uil-briefcase"></i>
              </div>
            </div>

            <div className=" d-flex cta-card card flex-row p-4 rounded-md shadow position-relative overflow-hidden mt-4">
              <FiAirplay className="cta-icon" />
              <div className="ms-3">
                <h5 className="titles font-weight-bold">Our Vision</h5>
                <p className="text-muted para mb-0 cta-para">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated in the 16th century.
                </p>
              </div>
              <div className="big-icon">
              <FiAirplay />
              </div>
            </div>

            <div className=" d-flex cta-card card flex-row p-4 rounded-md shadow position-relative overflow-hidden mt-4">
              <CgEditFlipH className="cta-icon" />
              <div className="ms-3">
                <h5 className="titles">Who We Are?</h5>
                <p className="text-muted para mb-0 cta-para">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated in the 16th century.
                </p>
              </div>
              <div className="big-icon">
              <CgEditFlipH  />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introbanner;
