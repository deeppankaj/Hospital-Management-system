import React from "react";
import ReactStars from "react-stars";
import { TbMapPin } from "react-icons/tb";
import { BiDollarCircle, BiTime } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import vacc from "../../assests/images/vacc.png";
import { Link } from "react-router-dom";

const DoctorInfo = () => {
  const doctors = [
    {
      name: "Calvin carlo",
      spelization: "Eye Care",
      img: "https://shreethemes.in/doctris/layouts/assets/images/doctors/01.jpg",
      rating: 5,
      address: "63,PG Shustoke,UK",
      time: "Mon: 2:00PM - 6:00PM",
      charge: "$ 75 USD / Visit",
    },
    {
      name: "Pankaj Kumar",
      spelization: "Eye Care",
      img: "https://shreethemes.in/doctris/layouts/assets/images/doctors/01.jpg",
      rating: 5,
      address: "63,PG Shustoke,UK",
      time: "Mon: 2:00PM - 6:00PM",
      charge: "$ 75 USD / Visit",
    },
    {
      name: "Sahil Diwakar",
      spelization: "Eye Care",
      img: "https://shreethemes.in/doctris/layouts/assets/images/doctors/01.jpg",
      rating: 5,
      address: "63,PG Shustoke,UK",
      time: "Mon: 2:00PM - 6:00PM",
      charge: "$ 75 USD / Visit",
    },
    {
      name: "Shekhar",
      spelization: "Eye Care",
      img: "https://shreethemes.in/doctris/layouts/assets/images/doctors/01.jpg",
      rating: 3,
      address: "63,PG Shustoke,UK",
      time: "Mon: 2:00PM - 6:00PM",
      charge: "$ 75 USD / Visit",
    },
  ];
  return (
    <section className="section mb-5">
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <span className="badge rounded-pill bg-soft-primary">
                Find Doctors
              </span>
              <h4 className="title mt-3 mb-4">Find Your Specialists</h4>
              <p className="text-muted mx-auto col-lg-8 col-10 mb-0">
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment, or a simple
                consultation.
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          {doctors.map((doctor, i) => {
            return (
              <div
                key={i}
                className="doc-card col-xl-3 col-lg-3 col-md-6 mt-4 pt-2"
              >
                <div className="card team border-0 rounded shadow overflow-hidden">
                  <div className="team-person position-relative overflow-hidden">
                    <img src={doctor.img} className="img-fluid" alt="" />
                  </div>
                  <div>{/* <BiHeart/> */}</div>
                  <div className="card-body">
                    <p className="title text-dark h5 d-block mb-0">
                      {doctor.name}
                    </p>
                    <small className="text-muted speciality">
                      {doctor.spelization}
                    </small>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <ReactStars
                        count={doctor.rating}
                        size={20}
                        color1="#f1b561"
                      />
                      <p className="text-muted mb-0">{doctor.rating} Star</p>
                    </div>
                    <ul className="list-unstyled mt-2 mb-0">
                      <li className="d-flex align-items-center py-1">
                        <TbMapPin color="blue" />
                        <small className="text-muted ms-2">
                          {doctor.address}
                        </small>
                      </li>
                      <li className="d-flex align-items-center py-1">
                        <BiTime color="blue" />
                        <small className="text-muted ms-2">{doctor.time}</small>
                      </li>
                      <li className="d-flex align-items-center py-1">
                        <BiDollarCircle color="blue" />
                        <small className="text-muted ms-2">
                          {doctor.charge}
                        </small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" faq-bar row align-items-center my-5 py-5 col-12">
        <div className="col-md-6 col-12">
          <div className="me-lg-5">
            <img src={vacc} className="img-fluid" alt="" />
          </div>
        </div>

        <div className="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item border rounded">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button border-0 bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How does it work ?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse border-0 collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-muted">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </div>
              </div>
            </div>

            <div className="accordion-item border rounded mt-2">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button border-0 bg-light collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Do I need a designer to use Doctris ?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse border-0 collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-muted">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </div>
              </div>
            </div>

            <div className="accordion-item border rounded mt-2">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button border-0 bg-light collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What do I need to do to start selling ?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse border-0 collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-muted">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </div>
              </div>
            </div>

            <div className="accordion-item border rounded mt-2">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button border-0 bg-light collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  What happens when I receive an order ?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse border-0 collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-muted">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 pt-2 justify-content-center col-12">
        <div className="col-12 text-center">
          <div className="section-title">
            <h4 className="title mb-4  ">Have Question ? Get in touch!</h4>
            <p className="text-muted col-10 col-lg-8 mx-auto">
              Great doctor if you need your family member to get effective
              immediate assistance, emergency treatment or a simple
              consultation.
            </p>
            <Link to="/contact" className="btn btn-primary mt-4 ">
            <BsFillTelephoneFill /> Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorInfo;
