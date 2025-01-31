import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
// import PageNotFound from "./components/PageNotFound";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Authentication/User/Login.jsx";
import Signup from "./components/Authentication/User/Signup.jsx";
import AllEvents from "./components/Home/AllEvents.jsx";
function App() {
  return (
    <div className="h-100vh">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/allevents" element={<AllEvents/>} /> 

    
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
