import React from "react";
import s from "./StartGrammer.module.css"
import {NavLink} from "react-router-dom";

const StartGrammer = () => {
    return (
        <div className={s.start_wrapper}>
            <h2 className={s.tests_title}>Грамматикалқ тапсырмалар</h2>
           <NavLink to="1"><input className={s.start_button} type="button" value="Start"/></NavLink>
        </div>
    )
}

export default StartGrammer;