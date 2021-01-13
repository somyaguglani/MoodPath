import {
  GET_DOCTOR_REVIEWS,
  USER_LOGIN_FAILED,
  USER_LOGIN,
  USER_LOGIN_FAIL_PASS,
  FILL_USER_INFO,
  LOGOUT_USER,
} from "../actions/types";

const initialState = {
  cast: [],
  reviewList: [],
  isLoggedIn: false,
  loginFailed: false,
  userInfo: {},
};

const getDoctorReviews = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_USER: {
      return { ...state, isLoggedIn: false, loginFailed: false };
    }
    case GET_DOCTOR_REVIEWS: {
      let { data } = action.payload;
      return {
        ...state,
        reviewList: [...data],
      };
    }
    case USER_LOGIN_FAILED: {
      return {
        ...state,
        isLoggedIn: false,
        loginFailed: true,
      };
    }
    case USER_LOGIN_FAIL_PASS: {
      return {
        ...state,
        isLoggedIn: false,
        loginFailed: false,
      };
    }
    case USER_LOGIN: {
      return { ...state, isLoggedIn: true };
    }
    case FILL_USER_INFO: {
      return { ...state, userInfo: action.payload };
    }
    default:
      return state;
  }
};

export default getDoctorReviews;
