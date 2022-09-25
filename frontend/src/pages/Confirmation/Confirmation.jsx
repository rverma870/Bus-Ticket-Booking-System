import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { FaRupeeSign } from "react-icons/fa";
import { resetBookingState } from "../../core/entities/BookingDetails/bookingDetails.slice";

function Confirmation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bookingData = useSelector((state) => state.busBooking.data);
  const { username, email, price } = bookingData;

  const handleGoHome = () => {
    dispatch(resetBookingState());
    navigate("/");
  };
  return (
    <div className="border border-2 m-3 p-3">
      <div className="fs-3">Hi {username}</div>
      <div className="d-flex">
        <div className="fs-3 mt-1">Booking Confirm</div>
        <div>
          <TiTick size={"3rem"} color={"green"} className="p-0 m-0" />
        </div>
      </div>
      <h4 className="mt-3">Thank you for Booking</h4>
      <h6 className="mb-5">A mail will be sent to your email - {email}</h6>
      <span className="">Payment Summary</span>
      <div className="mb-3">
        <hr className="new1" />
      </div>
      <div className="d-flex justify-content-between">
        <span className="font-weight-bold">No of Ticket Booked</span>
        <span className="text-muted">1</span>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <span className="fw-bold font-weight-bold fs-5">Total</span>
        <span className="font-weight-bold text-danger fs-5 fw-bold">
          <FaRupeeSign />
          {price && price.toFixed(2)}
        </span>
      </div>
      <button
        type="button"
        className="btn btn-secondary mt-4"
        onClick={handleGoHome}
      >
        Home
      </button>
    </div>
  );
}

export default Confirmation;
