import {REPORTS} from "../actions/types";
const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case (REPORTS):
      return action.payload;
    default:
      return state;
  }
}