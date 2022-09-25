import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBuses } from "../../../core/entities/buses/buses.slice";
import "./FilterBus.css";

function FilterBus() {
  const dispatch = useDispatch();
  const searchInitialState = {
    from: "",
    to: "",
    date: "",
  };
  const [searchState, setSearchState] = useState(searchInitialState);

  const clearState = () => {
    setSearchState(searchInitialState);
  };

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    const newdata = { ...searchState };
    newdata[name] = value;
    setSearchState(newdata);
  };

  const handleClick = () => {
    dispatch(fetchBuses(searchState));
    clearState();
  };
  return (
    <div className="container-fluid bus-filter">
      <div className="row p-2">
        <div className="col">
          <input
            type="text"
            name="from"
            className="form-control"
            placeholder="FROM"
            value={searchState.from}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="to"
            className="form-control"
            placeholder="TO"
            value={searchState.to}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <input
            type="date"
            name="date"
            className="form-control"
            placeholder="DATE"
            value={searchState.date}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClick}
          >
            Search Buses
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterBus;
