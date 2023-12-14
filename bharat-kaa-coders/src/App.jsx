import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Questions from "./Pages/Questions";
import Contactus from "./Pages/Contactus";
import Aboutus from "./Pages/Aboutus";
import Profile from "./Pages/Profile";
import { useSelector } from "react-redux";
import QuestionAndAns from "./Pages/QuestionAndAns";

const App = () => {
  const selector = useSelector(state => state.Reducer.isLogged);
  // console.log(selector);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<Aboutus />} />
          <Route path="/ContactUs" element={<Contactus />} />
          <Route
            path="/Question"
            element={selector ? <Questions /> : <Navigate to="/Log-In" />}
          />
          <Route
            path="/QuestionAns"
            element={selector ? <QuestionAndAns /> : <Navigate to="/Log-In" />}
          />
          {selector ? (
            <Route
              path="/Profile"
              element={selector ? <Profile /> : <Navigate to="/Log-In" />}
            />
          ) : (
            <>
              <Route path="/Log-In" element={<Login />} />
              <Route path="/Sign-Up" element={<Signup />} />
            </>
          )}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
