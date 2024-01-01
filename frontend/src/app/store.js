import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import userLoginReducer from '../reducers/userReducers';


const reducers = combineReducers({
    userLogin: userLoginReducer,
});

const initailState = {};

const middleware = [thunk];

const store = configureStore(
    {reducer:reducers},
    initailState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;