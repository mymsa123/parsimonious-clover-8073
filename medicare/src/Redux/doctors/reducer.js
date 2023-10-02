import { DOCTOR_FAILURE, DOCTOR_REQUEST,
     GET_DOCTOR_SUCCESS } from "./actionTypes";

    const initialState = {
         isLoading: false, 
         isError: false, 
         doctors: [],
    };
    export const reducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
    
    case DOCTOR_REQUEST:
    
    return { ...state, isLoading: true };
    
    case DOCTOR_FAILURE:
    
    return {...state, isLoading: false, isError: true };

    case GET_DOCTOR_SUCCESS:
        return { ...state, isLoading: false, doctors: payload };
    default:
    
    return state;
    }
}