import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Shopslider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div
            className="bg-half-170 d-table align-items-center w-100 py-5"
            style={{
              background:
                "url('https://shreethemes.in/doctris/layouts/assets/images/bg/pharm02.jpg') center center",
            }}
          >
            <div className="bg-overlay bg-overlay-dark"></div>
            <div className="container">
              <div className="row mt-5">
                <div className="col-lg-12">
                  <div className="heading-title">
                    <h1 className="fw-bold mb-4">
                      Doctors Prescribe <br /> Meko Products
                    </h1>
                    <p className="para-desc mb-0">
                      Great doctor if you need your family member to get
                      effective immediate assistance, emergency treatment or a
                      simple consultation.
                    </p>

                    <div className="mt-4 pt-2">
                      <Link to={"/shop"} className="btn btn-primary">
                        Shop now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="bg-half-170 d-table align-items-center w-100 p-5"
            style={{
              background:
                "url('https://shreethemes.in/doctris/layouts/assets/images/bg/pharm01.jpg') center center",
            }}
          >
            <div className="bg-overlay bg-overlay-dark"></div>
            <div className="container">
              <div className="row mt-5">
                <div className="col-lg-12">
                  <div className="heading-title">
                    <h1 className="fw-bold mb-4">
                      Virus Protection <br /> Gears @15% Off
                    </h1>
                    <p className="para-desc mb-0">
                      Great doctor if you need your family member to get
                      effective immediate assistance, emergency treatment or a
                      simple consultation.
                    </p>

                    <div className="mt-4 pt-2">
                      <Link to={"/shop"} className="btn btn-primary">
                        Shop now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="bg-half-170 d-table align-items-center w-100 p-5"
            style={{
              background:
                "url('https://shreethemes.in/doctris/layouts/assets/images/bg/pharm03.jpg') center center",
            }}
          >
            <div className="bg-overlay bg-overlay-dark"></div>
            <div className="container">
              <div className="row mt-5">
                <div className="col-lg-12">
                  <div className="heading-title">
                    <h1 className="fw-bold mb-4">
                      Virus Protection <br /> Gears @15% Off
                    </h1>
                    <p className="para-desc mb-0">
                      Great doctor if you need your family member to get
                      effective immediate assistance, emergency treatment or a
                      simple consultation.
                    </p>

                    <div className="mt-4 pt-2">
                      <Link to={"/shop"} className="btn btn-primary">
                        Shop now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Shopslider
