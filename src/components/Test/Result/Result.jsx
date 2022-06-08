import React from "react";
import s from "./Result.module.css";
import {NavLink} from "react-router-dom";

const Result = (props) => {
    return (
        <div className={s.result_wrapper}>
            <h2 className={s.result_title}>Right answer</h2>
            <div className={s.result_count}>{props.result}</div>
            <NavLink to="/tasks/test/"><input
                onClick={props.getResult}
                className={s.result_button} type="button" value="Restart"/></NavLink>
        </div>
    );
};

export default Result;