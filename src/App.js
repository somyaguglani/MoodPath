import "./App.css";
import React from "react";
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
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact-us" component={UserProfile} />
          <Route path="/faq" component={FAQ} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/testquestions" component={TestQuestions} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
