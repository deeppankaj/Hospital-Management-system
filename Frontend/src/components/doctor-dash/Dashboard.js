import React from "react";
import { Link } from "react-router-dom";
import user from "../../assests/images/user.png";
import { BsArrowRightShort,BsHeart,BsEnvelopePlus } from "react-icons/bs";
import { TbBrandTelegram ,TbHourglass} from "react-icons/tb";
import ReactApexChart from "react-apexcharts";

const Dashboard = () => {
  const patients = [
    {
      name: "Pankaj Kumar",
      img: "user",
      time: "",
    },
    {
      name: "Pankaj Kumar",
      img: "user",
      time: "",
    },
    {
      name: "Pankaj Kumar",
      img: "user",
      time: "",
    },
    {
      name: "Pankaj Kumar",
      img: "user",
      time: "",
    },
  ];
  const upcomingpatients = [
    {
      name: "Pankaj Kumar",
      img: "user",
      time: "",
    },
    {
      name: "Pankaj Kumar",
      img: "user",
      time: "",
    },
    {
      name: "Pankaj Kumar",
      img: "user",
      time: "",
    },
    {
      name: "Pankaj Kumar",
      img: "user",
      time: "",
    },
  ];
  const chart1 = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#3f71f0"],
      xaxis: {
        labels: {
          show: false, // Set to false to hide x-axis labels
        },
      },
      yaxis: {
        labels: {
          show: false, // Set to false to hide y-axis labels
        },
    },}
  };
  const chart2 = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["green"],
      xaxis: {
        labels: {
          show: false, // Set to false to hide x-axis labels
        },
      },
      yaxis: {
        labels: {
          show: false, // Set to false to hide y-axis labels
        },
    },
    },
  };
  const chart3 = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["orange"],
      xaxis: {
        labels: {
          show: false, // Set to false to hide x-axis labels
        },
      },
      yaxis: {
        labels: {
          show: false, // Set to false to hide y-axis labels
        },
    },
    },
  };
  const chart4 = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["red"],
      xaxis: {
        labels: {
          show: false, // Set to false to hide x-axis labels
        },
      },
      yaxis: {
        labels: {
          show: false, // Set to false to hide y-axis labels
        },
    },
    },
  };
  const shortcuts= [
    {
      title:"New Messages",
      icon:<TbBrandTelegram/>,
      text:" Due to its widespread use as filler text",
    },
    {
      title:"Latest Proposals",
      icon:<BsEnvelopePlus/>,
      text:" Due to its widespread use as filler text",
    },
    {
      title:"Package Expiry",
      icon:<TbHourglass/>,
      text:" Due to its widespread use as filler text",
    },
    {
      title:"Saved Items",
      icon:<BsHeart/>,
      text:" Due to its widespread use as filler text",
    }
  ]

  return (
    <>
      <div className="col-xl-9 col-lg-8 col-md-7 mt-4 mt-sm-0">
        <h5 className="mb-0">Dashboard</h5>
        <div className="row">
          <div className="col-xl-3 col-lg-6 mt-4">
            <div className="card shadow border-0 pt-4 px-2 pb-0">
              <div className="d-flex justify-content-between mb-3">
                <h6 className="align-items-center mb-0">
                  Appointment{" "}
                  <span className="badge rounded-pill bg-soft-primary ms-1">
                    +15%
                  </span>
                </h6>
                <p className="mb-0 text-muted">220+ Week</p>
              </div>
              <div id="chart-1" style={{ minHeight: "90px" }}>
                <ReactApexChart
                  options={chart1.options}
                  series={chart1.series}
                  type="area"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 mt-4">
            <div className="card shadow border-0 pt-4 px-2 pb-0">
              <div className="d-flex justify-content-between mb-3">
                <h6 className="align-items-center mb-0">
                  Patients <br />
                  <span className="badge rounded-pill bg-soft-primary ms-1">
                    +15%
                  </span>
                </h6>
                <p className="mb-0 text-muted">
                  220+ <br /> Week
                </p>
              </div>
              <div id="chart-1" style={{ minHeight: "90px" }}>
                <ReactApexChart
                  options={chart2.options}
                  series={chart2.series}
                  type="area"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 mt-4">
            <div className="card shadow border-0 pt-4 px-2 pb-0">
              <div className="d-flex justify-content-between mb-3">
                <h6 className="align-items-center mb-0">
                  Urgent <br />{" "}
                  <span className="badge rounded-pill bg-soft-primary ms-1">
                    +15%
                  </span>
                </h6>
                <p className="mb-0 text-muted">
                  220+ <br /> Week
                </p>
              </div>
              <div id="chart-1" style={{ minHeight: "90px" }}>
                <ReactApexChart
                  options={chart3.options}
                  series={chart3.series}
                  type="area"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 mt-4">
            <div className="card shadow border-0 pt-4 px-2 pb-0">
              <div className="d-flex justify-content-between mb-3">
                <h6 className="align-items-center mb-0">
                  Cancelled <br />{" "}
                  <span className="badge rounded-pill bg-soft-primary ms-1">
                    +15%
                  </span>
                </h6>
                <p className="mb-0 text-muted">
                  220+ <br /> Week
                </p>
              </div>
              <div id="chart-1" style={{ minHeight: "90px" }}>
                <ReactApexChart
                  options={chart4.options}
                  series={chart4.series}
                  type="area"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-lg-6 mt-4">
            <div className="card border-0 shadow rounded">
              <div className="d-flex justify-content-between p-4 border-bottom">
                <h6 className="mb-0 text-md-start">
                  <i className="uil uil-calender text-primary me-1 h5"></i>{" "}
                  Latest Appointment
                </h6>
                <h6 className="text-muted mb-0">{patients.length} Patients</h6>
              </div>

              <div className="mb-0 p-4">
                {patients.length === 0 ? (
                  <></>
                ) : (
                  <>
                    {patients.map((patient, i) => {
                      return (
                        <Link key={i} to="">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-inline-flex">
                              <img
                                src={user}
                                width="35px"
                                height="35px"
                                className="rounded-circle border shadow"
                                alt=""
                              />
                              <div className="ms-3">
                                <h6 className="text-dark mb-0 d-block">
                                {patient.name}
                                </h6>
                                <small className="text-muted text-sm">
                                  Booking on {patient.time}
                                </small>
                              </div>
                            </div>
                            <BsArrowRightShort size={30} />
                          </div>
                          <hr />
                        </Link>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 mt-4">
            <div className="card border-0 shadow rounded">
              <div className="d-flex justify-content-between p-4 border-bottom">
                <h6 className="mb-0 ">
                  Upcoming Appointment
                </h6>
                <h6 className="text-muted mb-0">
                  {upcomingpatients.length} Patients
                </h6>
              </div>
              <div className="mb-0 p-4">
                {upcomingpatients.length === 0 ? (
                  <></>
                ) : (
                  <>
                    {upcomingpatients.map((patient, i) => {
                      return (
                        <Link key={i} to="">
                          <div  className="d-flex align-items-center justify-content-between">
                            <div className="d-inline-flex">
                              <img
                                src={user}
                                width="35px"
                                height="35px"
                                className="rounded-circle border shadow"
                                alt=""
                              />
                              <div className="ms-3">
                                <h6 className="text-dark mb-0 d-block">
                                  {patient.name}
                                </h6>
                                <small className="text-muted">
                                  Booking on {patient.time}
                                </small>
                              </div>
                            </div>
                            <BsArrowRightShort size={30} />
                          </div>
                          <hr />
                        </Link>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-12 mt-4">
            <div className="card border-0 shadow rounded">
              <div className="p-4 border-bottom">
                <h6 className="mb-0">Patient's Review</h6>
              </div>

              {/* <div className="p-4">
                <div className="tns-outer" id="tns1-ow">
                  <div
                    className="tns-liveregion tns-visually-hidden"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    slide <span className="current">5</span> of 6
                  </div>
                  <div id="tns1-mw" className="tns-ovh">
                    <div className="tns-inner" id="tns1-iw">
                      <div
                        className="client-review-slider tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                        id="tns1"
                        style={{
                          transform: "translate3d(-66.6667%, 0px, 0px)",
                        }}
                      >
                        <div
                          className="tiny-slide tns-item"
                          id="tns1-item0"
                          aria-hidden="true"
                          tabindex="-1"
                        >
                          <p className="text-muted fst-italic">
                            " It seems that only melodies in order to have a
                            'ready-made' text to sing with the melody of the
                            originalthe 'Lorem Ipsum', which is said to have
                            originated century. "
                          </p>

                          <div className="d-inline-flex align-items-center">
                            <img
                              src="../assets/images/client/01.jpg"
                              className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                              alt=""
                            />
                            <div className="ms-3">
                              <ul className="list-unstyled d-block mb-0">
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                              </ul>
                              <h6 className="text-primary">
                                - Thomas Israel{" "}
                                <small className="text-muted">C.E.O</small>
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tiny-slide tns-item"
                          id="tns1-item1"
                          aria-hidden="true"
                          tabindex="-1"
                        >
                          <p className="text-muted fst-italic">
                            " The advantage of its writing melodies in order to
                            have a 'ready-made' text to sing with the melody and
                            the to itself or distract the viewer's attention
                            from the layout. "
                          </p>

                          <div className="d-inline-flex align-items-center">
                            <img
                              src="../assets/images/client/02.jpg"
                              className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                              alt=""
                            />
                            <div className="ms-3">
                              <ul className="list-unstyled d-block mb-0">
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                              </ul>
                              <h6 className="text-primary">
                                - Carl Oliver{" "}
                                <small className="text-muted">P.A</small>
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tiny-slide tns-item"
                          id="tns1-item2"
                          aria-hidden="true"
                          tabindex="-1"
                        >
                          <p className="text-muted fst-italic">
                            " There is now an in order to have a 'ready-made'
                            text to sing with the melody alternatives to the
                            classic Lorem Ipsum texts are amusing. "
                          </p>

                          <div className="d-inline-flex align-items-center">
                            <img
                              src="../assets/images/client/03.jpg"
                              className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                              alt=""
                            />
                            <div className="ms-3">
                              <ul className="list-unstyled d-block mb-0">
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                              </ul>
                              <h6 className="text-primary">
                                - Barbara McIntosh{" "}
                                <small className="text-muted">M.D</small>
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tiny-slide tns-item"
                          id="tns1-item3"
                          aria-hidden="true"
                          tabindex="-1"
                        >
                          <p className="text-muted fst-italic">
                            " According to most sources in order to have a
                            'ready-made' text to sing with the melody the origin
                            of the text by compiling all the instances. "
                          </p>

                          <div className="d-inline-flex align-items-center">
                            <img
                              src="../assets/images/client/04.jpg"
                              className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                              alt=""
                            />
                            <div className="ms-3">
                              <ul className="list-unstyled d-block mb-0">
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                              </ul>
                              <h6 className="text-primary">
                                - Christa Smith{" "}
                                <small className="text-muted">Manager</small>
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tiny-slide tns-item tns-slide-active"
                          id="tns1-item4"
                        >
                          <p className="text-muted fst-italic">
                            " It seems that only in order to have a 'ready-made'
                            text to sing with the melody 'Lorem Ipsum', which is
                            said to have originated 16th century. "
                          </p>

                          <div className="d-inline-flex align-items-center">
                            <img
                              src="../assets/images/client/05.jpg"
                              className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                              alt=""
                            />
                            <div className="ms-3">
                              <ul className="list-unstyled d-block mb-0">
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                              </ul>
                              <h6 className="text-primary">
                                - Dean Tolle{" "}
                                <small className="text-muted">Developer</small>
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tiny-slide tns-item"
                          id="tns1-item5"
                          aria-hidden="true"
                          tabindex="-1"
                        >
                          <p className="text-muted fst-italic">
                            " It seems that only lyrics when writing melodies in
                            order to have a 'ready-made' text to sing with the
                            melody of time certain letters were added or deleted
                            at the text. "
                          </p>

                          <div className="d-inline-flex align-items-center">
                            <img
                              src="../assets/images/client/06.jpg"
                              className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                              alt=""
                            />
                            <div className="ms-3">
                              <ul className="list-unstyled d-block mb-0">
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning"></i>
                                </li>
                              </ul>
                              <h6 className="text-primary">
                                - Jill Webb{" "}
                                <small className="text-muted">Designer</small>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center mt-3">
                    <div className="col-md col-6 text-center pt-3">
                      <img
                        src="../assets/images/client/amazon.png"
                        className="avatar avatar-client"
                        alt=""
                      />
                    </div>

                    <div className="col-md col-6 text-center pt-3">
                      <img
                        src="../assets/images/client/google.png"
                        className="avatar avatar-client"
                        alt=""
                      />
                    </div>

                    <div className="col-md col-6 text-center pt-3">
                      <img
                        src="../assets/images/client/lenovo.png"
                        className="avatar avatar-client"
                        alt=""
                      />
                    </div>

                    <div className="col-md col-6 text-center pt-3">
                      <img
                        src="../assets/images/client/paypal.png"
                        className="avatar avatar-client"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="row">
          {shortcuts.map((short,i)=>{
            return(
              <div key={i} className="col-xl-3 col-md-6 mt-4 py-5 shortcut">
            <div className="card text-center border-0 p-4 rounded shadow">
              <div className="icon text-center rounded-lg mx-auto">
                {short.icon}
              </div>
              <div className="card-body p-0 mt-3">
                <Link to="/" className="title text-dark h5">
                  {short.title}
                </Link>
                <p className="text-muted my-2">
                  {short.text}
                </p>
                <Link to="/" className="link">
                  Read more <BsArrowRightShort/>
                </Link>
              </div>
            </div>
          </div>
            )
          })}
          {/* end col */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
