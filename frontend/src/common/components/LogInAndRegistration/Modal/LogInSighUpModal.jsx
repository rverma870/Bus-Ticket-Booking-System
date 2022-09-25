import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpModal from "../Registration/SignUpModal";
import LoginModal from "../Login/LoginModal";

const LogInSighUpModal = () => {
  const [toggleModalContent, setToggleModalContent] = useState(true);

  const UserDetailsInitialState = {
    name: "",
    email: "",
    password: "",
    phonenumber: "",
  };

  const [UserDetailsEntered, setUserDetailsEntered] = useState(
    () => UserDetailsInitialState
  );

  const clearState = () => {
    setUserDetailsEntered({ ...UserDetailsInitialState });
  };

  const [message, setmessage] = useState({
    msg: "",
    error: false,
    termConditioncheck: false,
    rememberMeCheck: false,
    isLoggedin: false,
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "termConditioncheck") {
      if (e.target.checked) {
        setmessage({ ...message, termConditioncheck: true });
      } else {
        setmessage({ ...message, termConditioncheck: false });
      }
    } else if (name === "rememberMeCheck") {
      if (e.target.checked) {
        setmessage({ ...message, rememberMeCheck: true });
      } else {
        setmessage({ ...message, rememberMeCheck: false });
      }
    } else {
      const newdata = { ...UserDetailsEntered };
      newdata[name] = value;
      setUserDetailsEntered(newdata);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="modal"
      tabIndex="-1"
      id="LoginModal"
      aria-labelledby="modal-title"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            {toggleModalContent ? (
              <h3 className="modal-title ms-auto">Login</h3>
            ) : (
              <h3 className="modal-title ms-auto">Sign Up</h3>
            )}

            <button
              type="button"
              className="btn-close"
              id="modalCloseButton"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setToggleModalContent(true);
                clearState();
              }}
            ></button>
          </div>
          <div className="modal-body">
            {toggleModalContent ? (
              <LoginModal
                UserDetailsEntered={UserDetailsEntered}
                message={message}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
              />
            ) : (
              <SignUpModal
                UserDetailsEntered={UserDetailsEntered}
                message={message}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
          <div className="modal-footer">
            {toggleModalContent ? (
              <>
                <div className="mx-auto">
                  <span className="me-1">Don't have an account?</span>
                  <Link
                    className="link-danger text-decoration-none"
                    onClick={() => {
                      setToggleModalContent((prev) => !prev);
                    }}
                  >
                    Register
                  </Link>
                </div>
                <div className="me-5">
                  <Link className="link-primary text-decoration-none">
                    Forgot your password?
                  </Link>
                </div>
              </>
            ) : (
              <div className="mx-auto">
                <span className="me-1">Already have an account?</span>
                <Link
                  to="#"
                  className="link-success text-decoration-none"
                  onClick={() => {
                    setToggleModalContent((prev) => !prev);
                  }}
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInSighUpModal;
