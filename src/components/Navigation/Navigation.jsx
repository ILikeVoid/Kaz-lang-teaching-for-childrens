import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
    return (
        <div className={s.navigation}>
            <div>
                <NavLink to='grammer'
                         className={navData => navData.isActive ? s.active : s.item}>
                    <button>Грамматика</button>
                </NavLink>
            </div>
            <div>
                <NavLink to='test'
                         className={navData => navData.isActive ? s.active : s.item}>
                    <button>Сөздер тану</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Navigation;
