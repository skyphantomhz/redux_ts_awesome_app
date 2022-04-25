import { createSlice } from "@reduxjs/toolkit";
import { List } from "reselect/es/types";
import { RootState } from "../../../app/store";
import { Rocket } from "../../../model/rocket";

export interface NewArrivelState {
  value: List<Rocket>;
  status: "idle" | "loading" | "failed";
}

const initialState: NewArrivelState = {
  value: [],
  status: "idle",
};

export const newArrivalsSlice = createSlice({
  name: "newArrivals",
  initialState,
  reducers: {
    onFetchNewArrivals: (state) => {
      state.status = "loading";
    },
    fetchNewArrivalsSuccess: (state, action) => {
      state.value = action.payload;
      console.log(action.payload);
      state.status = "idle";
    },
    fetchNewArrivalsFail: (state, action) => {
      state.value = [];
      state.status = "failed";
    },
  },
});

export const {
  onFetchNewArrivals,
  fetchNewArrivalsSuccess,
  fetchNewArrivalsFail,
} = newArrivalsSlice.actions;

export const newArrivalSelector = (state: RootState) => state.newArrival;

export default newArrivalsSlice.reducer;
