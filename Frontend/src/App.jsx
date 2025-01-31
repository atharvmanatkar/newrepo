import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
// import PageNotFound from "./components/PageNotFound";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Authentication/User/Login.jsx";
import Signup from "./components/Authentication/User/Signup.jsx";
import AllEvents from "./components/Home/AllEvents.jsx";
import ContactUs from "./components/Home/ContactUs.jsx";
import AboutUs from "./components/Home/AboutUs.jsx";
import OurServices from "./components/Home/OurServices.jsx";
import BadgeSystem from "./components/Home/BadgeSystem.jsx";
import Myevents from "./components/Home/Myevents.jsx";
function App() {
  return (
    <div className="h-100vh">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/allevents" element={<AllEvents/>} /> 
        <Route path="/contact" element={<ContactUs/>} /> 
        <Route path="/aboutus" element={<AboutUs/>} /> 
        <Route path="/services" element={<OurServices/>} /> 
        <Route path="/badges" element={<BadgeSystem/>} /> 
        <Route path="/myevents" element={<Myevents/>} /> 

    
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
