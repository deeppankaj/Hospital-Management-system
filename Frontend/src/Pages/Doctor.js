import React from "react";
import Sidebar from "../components/doctor-dash/Sidebar";
import { Route, Routes } from "react-router-dom";
import {
  Appointment,
  Chat,
  Dashboard,
  DocProfile,
  DocfileSetting,
  Invoices,
  Messages,
  PatientReview,
  Patients,
  Shedule,
} from "../components/doctor-dash";

const Doctor = () => {
  return (
    <>
      <section className="py-3 ">
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <Routes className="hi">
              <Route path="*" element={<Dashboard />} />
              <Route path="appointment" element={<Appointment />} />
              <Route path="schedule" element={<Shedule />} />
              <Route path="invoices" element={<Invoices />} />
              <Route path="message" element={<Messages />} />
              <Route path="profile" element={<DocProfile />} />
              <Route path="profile-setting" element={<DocfileSetting />} />
              <Route path="patients" element={<Patients />} />
              <Route path="patient-review" element={<PatientReview />} />
              <Route path="chat" element={<Chat />} />
            </Routes>
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctor;
