import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as productReducer} from "./Products/reducer"
import thunk from "redux-thunk";
import {reducer as doctorsReducer} from "./doctors/reducer"

const rootReducer = combineReducers({
    productReducer,
    doctorsReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))