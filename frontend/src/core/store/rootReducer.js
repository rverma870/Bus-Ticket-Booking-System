import { combineReducers } from "redux";
import buses from "../entities/buses/buses.slice";
import setbooking from "../entities/BookingDetails/bookingDetails.slice";
const rootReducer = combineReducers({
  busesList: buses,
  busBooking: setbooking,
});

export default rootReducer;
