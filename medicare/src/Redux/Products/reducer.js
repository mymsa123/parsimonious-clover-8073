import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };

    case PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };

    default:
      return state;
  }
};
