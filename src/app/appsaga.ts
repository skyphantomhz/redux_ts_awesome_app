import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeEvery, take } from "redux-saga/effects";
import counterSaga from "../feature/counter/countetrSaga";
import { increment } from "../feature/counter/counterSlice";
import newArrivalSaga from "../feature/onboarding/homepage/NewArrivalsSaga";

export default function* rootSaga() {
  yield all([helloSaga(), counterSaga(), newArrivalSaga()]);
}

function* takeSaga() {
  console.log("Hello takeSaga");
}

function* helloSaga() {
  console.log("Hello saga!");
  yield takeEvery(increment().type, log);
}

export function* log(action: PayloadAction) {
  console.log(action);
}
