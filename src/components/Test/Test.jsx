import React, {useEffect, useState} from "react";
import s from "./Test.module.css";
import axios from "axios";
import Start from "./Start/Start";


const Test = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("https://628e700d368687f3e716f35d.mockapi.io/api/test/tests")
            .then((Response) => setItems(Response.data));
    }, []);

    return (
        <div className={s.test}>
            <Start/>
            {items.map((item) => (
                <div className={s.quest}>
                    <h2 className={s.guast_answer}>{item.question}</h2>
                    <img src={item.imageUrl}/>
                    <div className={s.quest_inputs}>
                        <input
                            className={s.input}
                            type="radio"
                            id="q1"
                            name="q1"
                            value="yes"
                        />
                        <label htmlFor="q1">{item.firstAnswer}</label>
                    </div>
                    <div className={s.quest_inputs}>
                        <input
                            className={s.input}
                            type="radio"
                            id="q2"
                            name="q1"
                            value="no"
                        />
                        <label htmlFor="q2">{item.secondAnswer}</label>
                    </div>
                    <div className={s.quest_inputs}>
                        <input
                            className={s.input}
                            type="radio"
                            id="q3"
                            name="q1"
                            value="no"
                        />
                        <label htmlFor="q3">{item.thirdAnswer}</label>
                    </div>
                    <input className={s.quest_button} type="button" value="Next"/>
                </div>
            ))}
            <div className={s.result_wrapper}>
                <h2 className={s.result_title}>Right answer</h2>
                <div className={s.result_count}>8</div>
                <input
                    className={s.result_button}
                    type="button"
                    value="Restart"
                />
            </div>
        </div>
    );
};

export default Test;
