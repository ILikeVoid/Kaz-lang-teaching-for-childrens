import s from "./Tests.module.css";
import {NavLink} from "react-router-dom";

const Tests = (props) => {

    return (
            <div className={s.tests}>
                <h2 className={s.tests_id}>Тапсырма: {props.id}/20</h2>
                <h2 className={s.guast_answer}>{props.questions}</h2>
                <img src={props.imageUrl}/>
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
                <div className={s.quest_button}>
                    <NavLink to={props.link}><input
                        onClick={props.getReset} type="button" value={props.button}/></NavLink>
                </div>

            </div>
    );
};

export default Tests;