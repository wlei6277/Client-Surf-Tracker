import LocalAPI from "./../apis/local";
import {REPORTS} from "./index";

export const fetchSurfReports = () => {
  return async (dispatch, getState) => {
    const response = await LocalAPI("/reports");

    dispatch ({
      type: REPORTS,
      payload: response.data
    })
  }
};