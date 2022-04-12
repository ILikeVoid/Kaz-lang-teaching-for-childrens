import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Tasks from "./components/Tasks/Tasks";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Tales from "./components/Tales/Tales";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/tasks/*" element={<Tasks/>}/>
                        <Route path="/tales/*" element={<Tales />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
