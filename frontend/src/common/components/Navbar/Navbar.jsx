import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TbBus } from "react-icons/tb";
import LogginLogoutButton from "../LogInAndRegistration/Button/LogginLogoutButton";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <TbBus size={"3rem"} color={"white"} />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <LogginLogoutButton />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
