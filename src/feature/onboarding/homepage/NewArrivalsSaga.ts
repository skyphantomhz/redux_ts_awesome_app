import { Action } from "@reduxjs/toolkit";
import Axios, { AxiosResponse } from "axios";
import { call, put, take, takeEvery } from "redux-saga/effects";
import { Rocket } from "../../../model/rocket";
import {
  fetchNewArrivalsFail,
  fetchNewArrivalsSuccess,
  onFetchNewArrivals,
} from "./NewArrivalSlice";

export default function* fetchNewArrival() {
  yield takeEvery(onFetchNewArrivals, onFetchRocket);
}

function* onFetchRocket() {
  try {
    const response: AxiosResponse<Rocket[], any> = yield call(fetchRockets);
    yield put(fetchNewArrivalsSuccess(response.data));
  } catch (err: any) {
    yield put(fetchNewArrivalsFail(err.toString()));
  }
}

function fetchRockets() {
  return Axios.get<Rocket[]>("https://api.spacexdata.com/v3/rockets");
}
