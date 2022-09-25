import React from "react";
import { FaUser, FaFacebook } from "react-icons/fa";
import { GoKey } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
function LoginModal({
  UserDetailsEntered,
  message,
  handleInput,
  handleSubmit,
}) {
  const { email, password } = UserDetailsEntered;
  return (
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
                type="email"
                className="form-control my-2"
                placeholder="Email"
                name="email"
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
                value={password}
                onChange={handleInput}
                placeholder="Password "
              />
            </div>
            <div className="remember my-1">
              <input
                type="checkbox"
                className="m-1"
                name="rememberMeCheck"
                onChange={(e) => {
                  handleInput(e);
                }}
              />
              Remember Me
            </div>
            <div className="form-group ">
              <button
                type="submit"
                id="LoginButton"
                className="btn btn-success float-right my-2"
                disabled={!email || !password}
              >
                Login
              </button>
            </div>
            <div>
              <i className="text-danger">{message.error ? message.msg : ""}</i>
            </div>
          </form>
        </div>

        <div className="card-footer">
          <div className="">
            <span>Or Sign-In With</span>{" "}
            <button type="button" className="btn btn-floating mx-1">
              <FcGoogle fontSize="1.5em" />
            </button>
            <button type="button" className="btn btn-floating mx-1">
              <FaFacebook fontSize="1.5em" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
