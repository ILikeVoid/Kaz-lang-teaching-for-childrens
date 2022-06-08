import React from "react";
import s from "./Tasks.module.css"
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";

const Tasks = () => {

    return(
        <div className={s.tasks}>
            <div className={s.grammer}>
                <div className={s.grammer_img}><img src="https://pickimage.ru/wp-content/uploads/images/detskie/notebook/tetrad10.jpg"/></div>
                <div className={s.grammer_text}>
                    <h2>Қызықты грамматика<br></br>тапсырмалары</h2>
                    <NavLink to="grammer"><button>Жаттығуды бастау</button></NavLink>
                </div>
            </div>
            <div className={s.tests}>
                <div className={s.tests_text}>
                    <h2>Тест тапсырмасы</h2>
                    <NavLink to="test/"><Button>Жаттығуды бастау</Button></NavLink>
                </div>
                <div className={s.tests_img}><img src="https://greenforest.com.ua/public/user_files/test-angliskiy-jazyk_1.png"/></div>
            </div>
        </div>
    )
}

export default Tasks;