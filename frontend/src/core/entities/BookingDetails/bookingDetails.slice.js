import { createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../base/enums";
import { initialState } from "./bookingDetails.state";
const booking = createSlice({
  name: "booking",
  initialState: initialState,
  reducers: {
    setBooking(state) {
      state.status = ApiStatus.LOADING;
    },
    setBookingSuccess(state, action) {
      state.data = action.payload;
      state.status = ApiStatus.SUCCESS;
    },
    setBookingFailure(state) {
      state.status = ApiStatus.ERROR;
    },
    resetBookingState(state) {
      state.status = ApiStatus.DEFAULT;
      state.data = initialState;
    },
  },
});

export const {
  setBooking,
  setBookingSuccess,
  setBookingFailure,
  resetBookingState,
} = booking.actions;
export default booking.reducer;
