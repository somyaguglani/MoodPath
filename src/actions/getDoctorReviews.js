import { GET_DOCTOR_REVIEWS } from "./types";
const axios = require("axios");

const saveDoctorReviews = (payload) => {
  return {
    type: GET_DOCTOR_REVIEWS,
    payload,
  };
};
const getDoctorReviews = (url) => {
  const config = {
    headers: {
      "x-auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmJiOTEwYWJiODYxZTAwMTcyNDk5YzAiLCJpYXQiOjE2MDYxNTUyMjJ9.TZm_KukR_LJLtyehjA5yp12hxawyZ0AfF9RQcCSlvU0`,
    },
  };

  return (dispatch) => {
    axios
      .get(url, config)
      .then((data) => console.log(data))
      .then((data) => dispatch(saveDoctorReviews(data)))
      .catch((error) => console.log(error));
  };
};

export default getDoctorReviews;
