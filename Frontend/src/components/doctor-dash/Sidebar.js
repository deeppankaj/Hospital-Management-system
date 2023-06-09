import React from 'react';
import { Link } from 'react-router-dom';
import { FiAirplay ,FiUser,} from 'react-icons/fi'
import { BsCalendarCheck ,} from 'react-icons/bs'
import { RxEnvelopeClosed,RxReload} from 'react-icons/rx'
import { RiUserHeartLine ,} from 'react-icons/ri'
import { BsChat ,BsChatText} from 'react-icons/bs'
import { AiOutlineLogin} from 'react-icons/ai'
import { BiEnvelope} from 'react-icons/bi'
import { TfiTimer} from 'react-icons/tfi'
import { RiUserSettingsLine} from 'react-icons/ri'
import "./Doctor.css"


const Sidebar = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-5 col-12">
      <div className="rounded shadow overflow-hidden sticky-bar">
        <div className="card border-0">
          <img src="../assets/images/doctors/profile-bg.jpg" className="img-fluid" alt="" />
        </div>

        <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
          <img src="../assets/images/doctors/01.jpg" className="rounded-circle shadow-md avatar avatar-md-md" alt="" />
          <h5 className="mt-3 mb-1">Dr. Calvin Carlo</h5>
          <p className="text-muted mb-0">Orthopedic</p>
        </div>

        <ul className="list-unstyled sidebar-nav mb-0">
          <li className="navbar-item active">
            <Link to="/doctor" className="navbar-link">
            <FiAirplay/> Dashboard
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/doctor/appointment" className="navbar-link">
              <BsCalendarCheck /> Appointment
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/doctor/schedule" className="navbar-link">
              <TfiTimer /> ScheduleTiming
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/doctor/invoices" className="navbar-link">
              <RxEnvelopeClosed /> Invoices
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/doctor/message" className="navbar-link">
              <BiEnvelope/> Messages
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/doctor/profile" className="navbar-link">
              <FiUser /> Profile
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/doctor/profile-setting" className="navbar-link">
              <RiUserSettingsLine /> Profile Settings
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/doctor/patients" className="navbar-link">
              <RiUserHeartLine /> Patients
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/doctor/patient-review" className="navbar-link">
              <BsChat /> Patients Review
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/doctor/chat" className="navbar-link">
              <BsChatText/> Chat
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/doctor/login" className="navbar-link">
              <AiOutlineLogin/> Login
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/doctor/forgot" className="navbar-link">
              <RxReload/> Forgot Password
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
