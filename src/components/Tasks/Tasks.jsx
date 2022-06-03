import React, { useRef } from "react";
import s from "./Tasks.module.css"
import Grammer from "../Grammer/Grammer";
import {Route, Routes} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Test from "../Test/Test";

const Tasks = () => {

    return(
        <div className={s.tasks}>
            <Navigation />
            <div className={s.tasks_content}>
                <Routes>
                    <Route path="/grammer/*" element={<Grammer/>}/>
                </Routes>
                <Routes>
                    <Route path="/test/*" element={<Test/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Tasks;