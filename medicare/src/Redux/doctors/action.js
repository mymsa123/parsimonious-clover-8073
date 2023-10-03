import axios from "axios";
import {
  DOCTOR_FAILURE,
  DOCTOR_REQUEST,
  GET_DOCTOR_SUCCESS,
} from "./actionTypes";

export const getDoctor = (paramObj) => (dispatch) => {
  dispatch({ type: DOCTOR_REQUEST });

  axios
    .get("https://medicare-comp.onrender.com/doctors", paramObj)
    .then((res) => {
      dispatch({ type: GET_DOCTOR_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DOCTOR_FAILURE });
    });
};
//https://medicare-comp.onrender.com/doctors
//http://localhost:8080/doctors