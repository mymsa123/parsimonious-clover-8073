import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
 import thunk from "redux-thunk";
 import { reducer as doctorsReducer } from "./doctors/reducer";

const rootReducer = combineReducers({
doctorsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

