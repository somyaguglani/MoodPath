import { GET_DOCTOR_REVIEWS } from "../actions/types";

const initialState = {
  cast: [],
};

const getDoctorReviews = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOCTOR_REVIEWS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default getDoctorReviews;
