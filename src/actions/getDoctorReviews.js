import {
  GET_DOCTOR_REVIEWS,
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_FAIL_PASS,
} from "./types";
const axios = require("axios");
let url = "https://minorp.herokuapp.com";

export const getDoctorReviews = () => async (dispatch) => {
  const config = {
    headers: {
      "x-auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmJiOTEwYWJiODYxZTAwMTcyNDk5YzAiLCJpYXQiOjE2MDYxNTUyMjJ9.TZm_KukR_LJLtyehjA5yp12hxawyZ0AfF9RQcCSlvU0`,
    },
  };
  try {
    let { data } = await axios({
      ...config,
      url: `${url}/doctor`,
      method: "GET",
    });
    console.log(data);
    dispatch({
      type: GET_DOCTOR_REVIEWS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const userLogin = (payload) => async (dispatch) => {
  try {
    let { data } = await axios({
      url: `${url}/auth`,
      method: "POST",
      data: payload,
    });
    localStorage.setItem("token", data.data.token);
    dispatch({
      type: USER_LOGIN,
    });
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAILED,
    });
    setTimeout(() => {
      dispatch({ type: USER_LOGIN_FAIL_PASS });
    }, 1000);
    console.log(err);
  }
};

export const getUserInfo = () => async (dispatch) => {
  try {
    axios({ url: `${url}/` });
  } catch (err) {
    console.log(err);
  }
};
