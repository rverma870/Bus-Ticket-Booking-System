import { all } from "redux-saga/effects";
import { getBusesSaga as getBuses } from "../entities/buses/buses.saga";
import { bookBusSaga } from "../entities/BookingDetails/bookingDetails.saga";
export default function* rootSaga() {
  yield all([getBuses(), bookBusSaga()]);
}
