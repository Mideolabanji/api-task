import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [
    {
      state: "Lagos",
      _id: "myEOhnaaC",
      confirmedCases: 98980,
      casesOnAdmission: 149,
      discharged: 98062,
      death: 769,
    },
  ],
};

export default function productReducers(state, { type, payload }) {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
}
