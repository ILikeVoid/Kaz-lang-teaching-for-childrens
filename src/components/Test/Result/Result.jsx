import React from "react";
import s from "./Result.module.css";

const Result = () => {
    return (
        <div className={s.result_wrapper}>
            <h2 className={s.result_title}>Right answer</h2>
            <div className={s.result_count}>8</div>
            <input className={s.result_button} type="button" value="Restart"/>
        </div>
    );
};

export default Result;