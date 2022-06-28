import React from "react";
import s from './ResultGrammer.module.css'
import {NavLink} from "react-router-dom";

const ResultGrammer = (props) => {
    return(
        <div className={s.result_wrapper}>
            <h2 className={s.result_title}>Дурыс жауаптар:</h2>
            <h2 className={s.result_count}>{props.result}</h2>
            <NavLink to="/tasks/grammer/"><input
                onClick={props.getResult}
                className={s.result_button} type="button" value="Restart"/></NavLink>
        </div>
    )
}

export default ResultGrammer;