import React from "react";
import s from "./Start.module.css";
import {NavLink} from "react-router-dom";

const Start = () => {
    return (
        <div className={s.start_wrapper}>
            <h2 className={s.test_title}>Суреттерге сипаттама</h2>
            <NavLink to="1"><input className={s.start_button} type="button" value="Start"/></NavLink>
        </div>
    );
};

export default Start;