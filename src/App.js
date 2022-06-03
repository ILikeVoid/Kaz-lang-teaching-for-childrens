import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Tasks from "./components/Tasks/Tasks";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Tales from "./components/Tales/Tales";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Alphabet from "./components/Alphabet/Alphabet";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/alphabet/*" element={<Alphabet />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/tasks/*" element={<Tasks />} />
            <Route path="/tales/*" element={<Tales />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
