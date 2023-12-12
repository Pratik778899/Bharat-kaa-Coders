import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
// import AddTwoSum from "./Components/Question/AddTwoSum";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Questions from "./Pages/Questions";
import Contactus from "./Pages/Contactus";
import Aboutus from "./Pages/Aboutus";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1-v-1" element={<Questions />} />
          <Route path="/AboutUs" element={<Aboutus />} />
          <Route path="/ContactUs" element={<Contactus />} />
          <Route path="/Login-In" element={<Login />} />
          <Route path="/Sign-Up" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;