import React, { useState } from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LogIn = () => {
  const data = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(
      "http://localhost:8000/user/login",
      loginData
    );
    if (data.data === "invalid") {
      toast.error("Entered crenditial is wrong ");
    } else if (data.data.status === "ok") {
      toast.success("Logged in sucessfully");
      localStorage.setItem('token',data.data.token);
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 500);
    }
  };
  const [loginData, setloginData] = useState(data);

  return (
    <>
      <section className=" d-flex bg-light align-items-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <img
                src="../assets/images/logo-dark.png"
                height="22"
                className="mx-auto d-block"
                alt=""
              />
              <div className="card login-page shadow mt-4 rounded border-0">
                <div className="card-body">
                  <h4 className="text-center">Sign In</h4>
                  <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="login-form mt-4"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            autoComplete="username"
                            onChange={(e) => {
                              setloginData({
                                ...loginData,
                                email: e.target.value,
                              });
                            }}
                            required=""
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            autoComplete="current-password"
                            required=""
                            onChange={(e) => {
                              setloginData({
                                ...loginData,
                                password: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="d-flex justify-content-between">
                          <div className="mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input align-middle"
                                type="checkbox"
                                value=""
                                id="remember-check"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="remember-check"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <a
                            href="forgot-password.html"
                            className="text-dark h6 mb-0"
                          >
                            Forgot password ?
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-0">
                        <div className="d-grid">
                          <button type="submit" className="btn btn-primary">
                            Sign in
                          </button>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3 text-center">
                        <h6 className="text-muted">Or</h6>
                      </div>

                      <div className="col-6 mt-3">
                        <div className="d-grid">
                          <button className="btn bg-soft-primary">
                            <BsFacebook /> Facebook
                          </button>
                        </div>
                      </div>

                      <div className="col-6 mt-3">
                        <div className="d-grid">
                          <button className="btn bg-soft-primary">
                            <BsGoogle /> Google
                          </button>
                        </div>
                      </div>

                      <div className="col-12 text-center">
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">
                            Don't have an account ?
                          </small>{" "}
                          <Link to={"/signup"} className="text-dark fw-bold">
                            Sign Up
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;
