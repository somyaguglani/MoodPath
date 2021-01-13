import { combineReducers } from "redux";
import getDoctorReviews from "../reducers/getDoctorReviews";

const rootReducer = combineReducers({
  getDoctorReviews,
});

export default rootReducer;
