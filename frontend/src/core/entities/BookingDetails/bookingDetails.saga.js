import { put, takeLatest } from "redux-saga/effects";
import { bookBusApi } from "./api";
import {
  setBooking,
  setBookingFailure,
  setBookingSuccess,
} from "./bookingDetails.slice";

function* bookingBus(action) {
  const { data, hasError } = yield bookBusApi(action.payload);
  if (hasError) {
    yield put(setBookingFailure());
  } else {
    yield put(setBookingSuccess(data));
  }
}

export const bookBusSaga = function* () {
  yield takeLatest(setBooking, bookingBus);
};
