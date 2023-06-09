import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Home/Home.css";
import { FiSearch } from "react-icons/fi";
import { BiCart, BiUser } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineLogout } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { toast } from "react-toastify";


const Header = ({ user }) => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate()
  const [usertogglestyle, setusertogglestyle] = useState({
    maxWidth: "300px",
    zIndex: "99",
    top: "60px",
    right: "-100%",
    transition: "right .2s ease-in-out",
  });
  const usertoggle = () => {
    if (usertogglestyle.right === "0%") {
      setusertogglestyle({ ...usertogglestyle, right: "-100%" });
    } else {
      setusertogglestyle({ ...usertogglestyle, right: "0%" });
    }
  };
  const logOut = async ()=>{
    localStorage.setItem('token',"");
    window.location.reload();
    usertoggle();
    toast.info("Logout Sucessfully")
    setTimeout(()=>{
      navigate("/login")
    },600)
  }

  return (
    <>
      <div className="col-12 shadow position-fixed header-nav">
        <nav className="container ">
          <div className="right d-flex col-6 gap-4 align-content-center">
            <div>
              {!toggle && (
                <FaBars
                  fontSize={22}
                  className="d-md-none"
                  onClick={() => setToggle(true)}
                />
              )}
              {toggle && (
                <RxCross2
                  fontSize={22}
                  className="d-md-none"
                  onClick={() => setToggle(false)}
                />
              )}
            </div>
            <div className="logo-container">
              <h4 className="mb-0">Doctor</h4>
            </div>

            <div className="d-md-flex d-none gap-4 text-muted ">
              <NavLink className="nav-option" to="/">
                Home
              </NavLink>
              <NavLink className="nav-option" to="/doctor">
                Doctor
              </NavLink>
              <NavLink className="nav-option" to="/patient">
                Patient
              </NavLink>
              <NavLink className="nav-option" to="/shop">
                Shop
              </NavLink>
            </div>
          </div>
          <div className="left col-6 row gap-2 justify-content-end">
            <div
              className="nav-btn nav-icon"
              style={{ width: "35px", height: "35px" }}
            >
              <FiSearch />
            </div>
            <Link
              to={"/cart"}
              className="nav-btn nav-icon"
              style={{ width: "35px", height: "35px" }}
            >
              <BiCart />
            </Link>
            {!user.image && <Link to={"/login"} style={{width:"60px"}} className="btn bg-soft-primary flex rounded-md">Login</Link>}
            {user.image && (
              <div
                className="nav-btn nav-icon overflow-hidden rounded-circle flex"
                style={{ width: "35px", height: "35px" }}
                onClick={() => usertoggle()}
              >
                {user.image === "" && <BiUser />}
                {user.image && <img alt="user" src={user.image} width="100%" />}
              </div>
            )}
            <div
              className="usertoggle position-fixed col-12 p-0 me-4 rounded-lg"
              style={usertogglestyle}
            >
              <div className="text-muted bg-white flex flex-column col-12 p-4 shadow">
                <div
                  className="position-absolute"
                  style={{ right: "24px", top: "27px" ,cursor:"pointer"}}
                  onClick={logOut}
                >
                  <AiOutlineLogout color="red" fontSize={25} />
                </div>
                <div className="flex">
                  <img
                    src={user.image}
                    alt=""
                    className="rounded-circle"
                    width="70px"
                    height="70px"
                  />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center gap-2">
                  <p className="p-0 m-0">
                    {user.firstname} {user.lastname}
                  </p>
                  <BsPencilSquare />
                </div>
              </div>
            </div>
          </div>
          {toggle && (
            <>
              <div className="mobile-menu d-md-none text-muted position-absolute col-12 bg-white d-flex flex-column col-12 gap-4 align-content-center p-4 shadow">
                <NavLink onClick={() => setToggle(false)} to="/">
                  Home
                </NavLink>
                <NavLink onClick={() => setToggle(false)} to="/doctor">
                  Doctor
                </NavLink>
                <NavLink onClick={() => setToggle(false)} to="/patient">
                  Patient
                </NavLink>
                <NavLink onClick={() => setToggle(false)} to="/shop">
                  Shop
                </NavLink>
              </div>
            </>
          )}
        </nav>
      </div>
      <div className="col-12" style={{ height: "60px" }}></div>
    </>
  );
};

export default Header;
