import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Tasks from "./components/Tasks/Tasks";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Tales from "./components/Tales/Tales";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Alphabet from "./components/Alphabet/Alphabet";
import Grammer from "./components/Grammer/Grammer";
import Test from "./components/Test/Test";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/alphabet/*" element={<Alphabet/>}/>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/tasks/*" element={<Tasks/>}/>
                        <Route path="/tales/*" element={<Tales/>}/>
                        <Route path="/tasks/grammer/*" element={<Grammer/>}/>
                        <Route path="/tasks/test/*" element={<Test/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
        ;
};

export default App;
