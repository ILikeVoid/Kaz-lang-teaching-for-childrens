import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import s from "./HomePage.module.css";


const HomePage = (props) => {

    return (
        <div className={s.home}>
            <img
                src="https://promany.ru/wp-content/uploads/2019/03/%D0%BA%D0%BE%D0%BC%D0%BF-%D0%B8-%D0%BC%D0%B0%D0%BB%D1%8C%D1%87%D0%B8%D0%BA2.jpg"/>
            <div className={s.home_title}>
                <h2>Курс по изучения казахского языка дошкольного возраста</h2>
                <p>В содержаний данного курса,<br></br> используются современные и актуальные методики
                    обучения:<br></br>
                    алфавит тану, қазақ тіліндегі ертегілер көру, қызықты тест тапсырмалары</p>
                <NavLink to="/alphabet"><input className={s.button1} type="button" value="Оқуды бастау"/></NavLink>
            </div>

        </div>

    );
};

export default HomePage;
