import React from "react";
import s from "./Grammers.module.css";
import {NavLink} from "react-router-dom";

const Grammers = (props) => {
    return(
        <div className={s.grammers}>
            <h2 className={s.tests_id}>Тапсырма: {props.id}/20</h2>
            <h2 className={s.guast_answer}>Сөздегі әріпті толықтыр: {props.questions}</h2>
            <div className={s.quest_inputs}>
                <input
                    onClick={(e) => props.getAnswer(e)}
                    className={s.input} type="radio" id="q1" name="q1" value={props.value1}/>
                <label htmlFor="q1">{props.firstAnswer}</label>
            </div>
            <div className={s.quest_inputs}>
                <input
                    onClick={(e) => props.getAnswer(e)}
                    className={s.input} type="radio" id="q2" name="q1" value={props.value2}/>
                <label htmlFor="q2">{props.secondAnswer}</label>
            </div>
            <div className={s.quest_inputs}>
                <input
                    onClick={(e) => props.getAnswer(e)}
                    className={s.input} type="radio" id="q3" name="q1" value={props.value3}/>
                <label htmlFor="q3">{props.thirdAnswer}</label>
            </div>
            <NavLink to={props.link}><input
                onClick={props.getReset}
                className={s.quest_button} type="button" value={props.button}/></NavLink>
        </div>
    )
}

export default Grammers
