import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { RxCheckCircled, RxCrossCircled } from "react-icons/rx";
import AppointmentForm from "../forms/AppointmentForm";

function CenteredModal(props) {
  const [size, setSize] = useState("md");
  useEffect(() => {
    if(props.data==="form"){
      setSize("lg")
    }
  }, [props.data])
  
  return (
    <Modal
      {...props}
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.heading && (
        <>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.heading}
            </Modal.Title>
          </Modal.Header>
        </>
      )}
      <Modal.Body>
        {props?.data?.name && (
          <>
            <div className="p-3 pt-4">
              <div className="d-flex align-items-center">
                <img
                  src="../assets/images/client/01.jpg"
                  className="rounded-pill"
                  width="40px"
                  height="40px"
                  alt=""
                />
                <h5 className="mb-0 ms-3">{props?.data?.name}</h5>
              </div>
              <ul className="list-unstyled mb-0 d-md-flex justify-content-between mt-4">
                <li>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex">
                      <h6>Age:</h6>
                      <p className="text-muted ms-2">
                        {props?.data?.age} year old
                      </p>
                    </li>
                    <li className="d-flex">
                      <h6>Gender:</h6>
                      <p className="text-muted ms-2">{props?.data?.gender}</p>
                    </li>
                    <li className="d-flex">
                      <h6 className="mb-0">Department:</h6>
                      <p className="text-muted ms-2 mb-0">
                        {props?.data?.depatment}
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex">
                      <h6>Date:</h6>
                      <p className="text-muted ms-2">{props?.data?.date}</p>
                    </li>
                    <li className="d-flex">
                      <h6>Time:</h6>
                      <p className="text-muted ms-2">{props?.data?.time}</p>
                    </li>
                    <li className="d-flex">
                      <h6 className="mb-0">Doctor:</h6>
                      <p className="text-muted ms-2 mb-0">
                        {props?.data?.doctorName}
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </>
        )}
        {props?.data === "appointment" && (
          <>
            <div className="text-center my-5">
              <div
                className="icon d-flex align-items-center justify-content-center bg-soft-success rounded-circle mx-auto"
                style={{ height: "95px", width: "95px" }}
              >
                <span className="mb-0">
                  <RxCheckCircled fontSize={40} />
                </span>
              </div>
              <div className="mt-4">
                <h4>Accept Appointment</h4>
                <p className="para-desc mx-auto text-muted mb-0">
                  Great doctor if you need your family member to get immediate
                  assistance, emergency treatment.
                </p>
                <div className="mt-4">
                  <button className="btn bg-soft-success">Accept</button>
                </div>
              </div>
            </div>
          </>
        )}
        {props.data === "not-accepted" && (
          <>
            <div className="text-center my-5">
              <div
                className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto"
                style={{ height: "95px", width: "95px" }}
              >
                <span className="mb-0">
                <RxCrossCircled fontSize={40} />

                </span>
              </div>
              <div className="mt-4">
                <h4>Cancel Appointment</h4>
                <p className="para-desc mx-auto text-muted mb-0">
                  Great doctor if you need your family member to get immediate
                  assistance, emergency treatment.
                </p>
                <div className="mt-4">
                  <button className="btn bg-soft-danger">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        {props.data === "form"&&(<>
          <AppointmentForm/>
        </>)}
      </Modal.Body>
    </Modal>
  );
}

export default CenteredModal;
