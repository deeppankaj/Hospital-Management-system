import React from "react";
import Dashboard from "../components/patient-dash/Dashboard";
import SidebarPatient from "../components/patient-dash/Sidebar";

const PatientPage = () => {
  return (
    <>
      <section className="py-3 ">
        <div className="container-fluid">
          <div className="row">
            <SidebarPatient />
            <Dashboard/>
          </div>
        </div>
      </section>
    </>
  );
};

export default PatientPage;
