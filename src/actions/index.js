import LocalAPI from "./../apis/local";
import {REPORTS} from "./types";

export const fetchReports = () => {
  return async (dispatch, getState) => {
    const response = await LocalAPI("/reports");

    dispatch ({
      type: REPORTS,
      payload: response.data
    })
  }
};