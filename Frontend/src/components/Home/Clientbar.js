import React from 'react';
import client from "../../assests/images/client.png"

const Clientbar = () => {
  return (
    <section className="py-4 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img src={client} className="avatar avatar-client" alt="" />
          </div>
          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img src={client} className="avatar avatar-client" alt="" />
          </div>
          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img src={client} className="avatar avatar-client" alt="" />
          </div>
          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img src={client} className="avatar avatar-client" alt="" />
          </div>
          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img src={client} className="avatar avatar-client" alt="" />
          </div>
          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img src={client} className="avatar avatar-client" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientbar;
