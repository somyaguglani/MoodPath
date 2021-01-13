import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import FAQ from "./components/FAQ/FAQ";
import Reviews from "./components/Reviews/Reviews";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import UserProfile from "./components/UserProfile/UserProfile";
import TestQuestions from "./components/TestQuestions/TestQuestions";
import { connect } from "react-redux";

const App = ({ isLoggedIn }) => {
  // [
  //   { quest: "abc", answer: ["a", "b", "c"], correct: 2 },
  //   { quest: "abc", answer: ["a", "b", "c"], correct: 2 },
  //   { quest: "abc", answer: ["a", "b", "c"], correct: 2 },
  //   { quest: "abc", answer: ["a", "b", "c"], correct: 2 },
  //   { quest: "abc", answer: ["a", "b", "c"], correct: 2 },
  //   { quest: "abc", answer: ["a", "b", "c"], correct: 2 },
  // ];
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" exact component={Home} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/faq" component={FAQ} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/testquestions" component={TestQuestions} />
          <Route path="/userprofile" component={UserProfile} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.getDoctorReviews.isLoggedIn,
});
export default connect(mapStateToProps)(App);
