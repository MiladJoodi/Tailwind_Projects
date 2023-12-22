import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Users from "./Pages/Users/Users";
import Forms from "./Pages/Forms/Forms";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="wrapper home-section flex gap-5 w-full ">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
