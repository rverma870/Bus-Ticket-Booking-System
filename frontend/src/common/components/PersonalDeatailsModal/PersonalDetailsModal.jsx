import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBooking } from "../../../core/entities/BookingDetails/bookingDetails.slice";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { ApiStatus } from "../../../core/base/enums";

const PersonalDetailsModal = ({ id, price }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UserDetailsInitialState = {
    username: "",
    email: "",
  };
  const [userDetailsEntered, setUserDetailsEntered] = useState(
    UserDetailsInitialState
  );
  const clearState = () => {
    setUserDetailsEntered({ ...UserDetailsInitialState });
  };

  const booking = useSelector((state) => state.busBooking);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    const newdata = { ...userDetailsEntered };
    newdata[name] = value;
    setUserDetailsEntered(newdata);
  };

  useEffect(() => {
    if (booking.status === ApiStatus.SUCCESS) {
      document.getElementById("detailsModalCloseButton").click();
      navigate("/confirmation");
    }
  }, [booking]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { id: id, price: price, ...userDetailsEntered };
    dispatch(setBooking(payload));
    clearState();
  };

  return (
    <>
      <div
        className="modal"
        tabIndex="-1"
        id="personalDetailsModal"
        aria-labelledby="modal-title"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title ms-auto">
                Enter Your Personal Details
              </h3>
              <button
                type="button"
                className="btn-close"
                id="detailsModalCloseButton"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="personal-detail-form container ">
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
                          placeholder="Enter Full Name"
                          name="username"
                          value={userDetailsEntered.username}
                          onChange={handleInput}
                        />
                      </div>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text my-2">
                            <FaEnvelope fontSize="1.5em" />
                          </span>
                        </div>
                        <input
                          type="email"
                          className="form-control my-2"
                          name="email"
                          value={userDetailsEntered.email}
                          onChange={handleInput}
                          placeholder="Enter Email"
                        />
                      </div>
                      <div className="form-group ">
                        <button type="submit" className="btn btn-success mt-2">
                          {booking.status === ApiStatus.LOADING
                            ? "Loading"
                            : "Book"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetailsModal;
