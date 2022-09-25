import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import PersonalDetailsModal from "../../PersonalDeatailsModal/PersonalDetailsModal";

const BusModel = ({ bus }) => {
  const { id, name, origin, destination, schedule_date, price } = bus;
  const date = new Date(schedule_date).toDateString();

  return (
    <div
      className="row mb-2 p-2 border border-1 border-dark d-flex"
      key={`${id}${name}`}
    >
      <div className="col-2 d-flex flex-column justify-content-start align-items-start">
        <h1 className="fs-3">{name}</h1>
        <h6 className="fs-6 text-muted">NON Ac Seater/Sleeper 2+1</h6>
      </div>
      <div className="col-2 d-flex flex-column justify-content-center align-items-center">
        <div>
          <h4 className="fs-6 ">Departure Date</h4>
        </div>
        <div className="text-center">
          <i>{date}</i>
        </div>
      </div>
      <div className="col-2 d-flex flex-column justify-content-center align-items-center">
        <div>
          <h4 className="fs-6 ">From</h4>
        </div>
        <div className="text-center">
          <i>{origin}</i>
        </div>
      </div>
      <div className="col-2 d-flex flex-column justify-content-center align-items-center">
        <div>
          <h4 className="fs-6 ">To</h4>
        </div>
        <div className="text-center">
          <i>{destination}</i>
        </div>
      </div>
      <div className="col-2 d-flex flex-column justify-content-center align-items-center">
        <div>
          <h4 className="fs-6 ">Price</h4>
        </div>
        <div className="text-center">
          <div className="fs-6 fw-bold">
            <FaRupeeSign /> {price}
          </div>
        </div>
      </div>
      <div className="col-2 d-flex flex-column justify-content-center align-items-center">
        <button
          className="btn btn-success "
          type="button"
          data-bs-toggle={"modal"}
          data-bs-target="#personalDetailsModal"
        >
          Book Now
        </button>
      </div>
      <PersonalDetailsModal id={id} price={price} />
    </div>
  );
};
export default BusModel;
