import axios from "axios";
import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";

export const getProduct = (paramsObj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get("https://medicare-updared.onrender.com/medicines", paramsObj)
    .then((res) => {
      console.log(res)
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
