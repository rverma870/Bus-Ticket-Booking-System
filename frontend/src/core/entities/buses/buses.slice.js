import { createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../base/enums";
import { initialState } from "./buses.state";
const buses = createSlice({
  name: "busesList",
  initialState: initialState,
  reducers: {
    fetchBuses(state, action) {
      state.status = ApiStatus.LOADING;
    },
    fetchBusesSuccess(state, action) {
      state.data = action.payload;
      state.status = ApiStatus.SUCCESS;
    },
    fetchBusesFailure(state) {
      state.status = ApiStatus.ERROR;
    },
    resetBusesState(state) {
      state.status = ApiStatus.DEFAULT;
      state.data = initialState;
    },
  },
});

export const {
  fetchBuses,
  fetchBusesSuccess,
  fetchBusesFailure,
  resetBusesState,
} = buses.actions;
export default buses.reducer;
