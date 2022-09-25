import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApiStatus } from "../../../core/base/enums";
import BusModel from "./BusModel/BusModel";
const Listing = () => {
  const busesListStatus = useSelector((state) => state.busesList.status);
  const data = useSelector((state) => state.busesList.data);

  const isLoading = busesListStatus === ApiStatus.LOADING;
  const availableBusCount = data.length;
  const showBuses = availableBusCount > 0;
  return isLoading ? (
    <div>Loading</div>
  ) : (
    showBuses && (
      <div className="bus-listing border p-2 mt-3">
        <h3 className="p-3">Available Buses ({availableBusCount})</h3>
        <div className="container">
          {data.map((bus) => (
            <BusModel bus={bus} />
          ))}
        </div>
      </div>
    )
  );
};

export default Listing;
