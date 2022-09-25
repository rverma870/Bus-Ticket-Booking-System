import { put, takeLatest } from "redux-saga/effects";
import { fetchBusesApi } from "./api";
import {
  fetchBuses,
  fetchBusesSuccess,
  fetchBusesFailure,
} from "./buses.slice";

function* getBuses(action) {
  const { data, hasError } = yield fetchBusesApi(action.payload);
  if (hasError) {
    yield put(fetchBusesFailure());
  } else {
    yield put(fetchBusesSuccess(data));
  }
}

export const getBusesSaga = function* () {
  yield takeLatest(fetchBuses, getBuses);
};
