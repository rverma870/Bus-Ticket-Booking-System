import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaMobile } from "react-icons/fa";
import { GoKey } from "react-icons/go";
function SignUpModal({
  UserDetailsEntered,
  message,
  handleInput,
  handleSubmit,
}) {
  const { email, password, name, phonenumber } = UserDetailsEntered;
  const { termConditioncheck, error } = message;
  return (
    <div>
      <div className="ms-3 my-2">
        Create Your Account. Its free and only takes a minute.
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text my-2">
                    <FaUser fontSize="1.5em" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control my-2"
                  name="name"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={handleInput}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-addon">
                  <span className="input-group-text my-2">
                    <FaEnvelope fontSize="1.5em" />
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control my-2"
                  name="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={handleInput}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text my-2">
                    <GoKey fontSize="1.5em" />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control my-2"
                  name="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  placeholder="Password"
                  value={password}
                  onChange={handleInput}
                />
              </div>

              <div className="input-group form-group">
                <div className="input-group-addon">
                  <span className="input-group-text my-2 px-3">
                    <FaMobile fontSize="1.5em" />
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control my-2"
                  name="phonenumber"
                  placeholder="Enter Mobile No."
                  value={phonenumber}
                  onChange={handleInput}
                />
              </div>

              <div className=" my-1">
                <input
                  type="checkbox"
                  className="m-2"
                  name="termConditioncheck"
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
                I accept the
                <Link to="#">Terms of Use</Link> &
                <Link to="#">Privacy Policy</Link>.
              </div>
              <div className="form-group ">
                <button
                  type="submit"
                  className="btn btn-success float-right my-2"
                  disabled={
                    !name ||
                    !email ||
                    !password ||
                    !phonenumber ||
                    !termConditioncheck
                  }
                >
                  Sign Up
                </button>
              </div>
              <div>
                <i className="text-danger">
                  {error ? "***User already present!" : ""}
                </i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
