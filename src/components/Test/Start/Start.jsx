import React from "react";
import s from "./Start.module.css";

const Start = () => {
    return (
        <div className={s.start_wrapper}>
            <h2 className={s.test_title}>Суреттерге сипаттама</h2>
            <input className={s.start_button} type="button" value="Start"/>
        </div>
    );
};

export default Start;