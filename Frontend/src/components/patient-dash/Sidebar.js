import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import "./patientdash.css"
// Import your custom Avatar component

const SidebarPatient = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-5 col-12 mb-4 position-lg-fixed">
      <div className="card border-0 p-4 rounded shadow overflow-hidden sticky-bar">
        <div className="d-md-flex text-center text-md-start align-items-center">
          <Avatar src="../assets/images/client/09.jpg" size="md-md" roundedCircle border shadow alt="" />
          <div className="ms-md-3 mt-3 mt-sm-0">
            <h5 className="d-block mb-1 mb-sm-0">Christopher Burrell</h5>
            <small className="text-muted">25 Years old</small>
          </div>
        </div>

        <span className="bg-soft-success p-2 rounded-pill text-center h6 mb-0 mt-4">
          Healthy
        </span>

        <div className="row">
          <div className="col-4 mt-4">
            <div className="text-center">
              <span className="h6 text-muted">Blood</span>
              <h6 className="mb-0 fw-normal">B +</h6>
            </div>
          </div>
          <div className="col-4 mt-4">
            <div className="text-center">
              <span className="h6 text-muted">Height</span>
              <h6 className="mb-0 fw-normal">175cm</h6>
            </div>
          </div>
          <div className="col-4 mt-4">
            <div className="text-center">
              <span className="h6 text-muted">Weight</span>
              <h6 className="mb-0 fw-normal">64k.g</h6>
            </div>
          </div>
        </div>

        <h6 className="mt-4 mb-0">Doctors:</h6>
        <ul className="list-unstyled mb-0 mt-4">
          <li className="list-inline-item">
            <Link to="/"><Avatar src="../assets/images/doctors/01.jpg" size="md-sm" roundedCircle shadow alt="" /></Link>
          </li>
          <li className="list-inline-item">
            <Link to="/"><Avatar src="../assets/images/doctors/02.jpg" size="md-sm" roundedCircle shadow alt="" /></Link>
          </li>
          <li className="list-inline-item">
            <Link to="/"><Avatar src="../assets/images/doctors/03.jpg" size="md-sm" roundedCircle shadow alt="" /></Link>
          </li>
          <li className="list-inline-item">
            <Link to="/"><Avatar src="../assets/images/doctors/04.jpg" size="md-sm" roundedCircle shadow alt="" /></Link>
          </li>
          <li className="list-inline-item">
            <Link to="/"><Avatar src="../assets/images/doctors/05.jpg" size="md-sm" roundedCircle shadow alt="" /></Link>
          </li>
        </ul>

        <h6 className="mt-4 mb-0">Payments:</h6>
        <ul className="list-unstyled mb-0 mt-4">
          <li className="d-flex align-items-center">
            <img src="../assets/images/payment/mastercard.png" height="40px" width="40px" className='border rounded' alt="" />
            <div className="flex-1 ms-3">
              <p className="mb-0">Mastercard <span className="ms-2">•••• 4584</span></p>
              <p className="text-muted mb-0">Expires 12/22</p>
            </div>
          </li>
          <li className="d-flex align-items-center mt-3">
            <img src="../assets/images/payment/discover.png" height="40px" width="40px" className='border rounded' alt="" />
            <div className="flex-1 ms-3">
              <p className="mb-0">Discover <span className="ms-2">•••• 5796</span></p>
              <p className="text-muted mb-0">Expires 12/22</p>
            </div>
          </li>
          <li className="d-flex align-items-center mt-3">
            <img src="../assets/images/payment/rupay.png" height="40px" width="40px" className='border rounded' alt="" />
            <div className="flex-1 ms-3">
              <p className="mb-0">Rupay <span className="ms-2">•••• 4645</span></p>
              <p className="text-muted mb-0">Expires 12/22</p>
            </div>
          </li>
          <li className="d-flex align-items-center mt-3">
            <img src="../assets/images/payment/american.png" height="40px" width="40px" className='border rounded' alt="" />
            <div className="flex-1 ms-3">
              <p className="mb-0">American <span className="ms-2">•••• 4875</span></p>
              <p className="text-muted mb-0">Expires 12/22</p>
            </div>
          </li>
        </ul>

        <div className="mt-4">
          <div className="d-grid">
            <Link to="/" className="btn bg-soft-primary">View Profile</Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default SidebarPatient;
