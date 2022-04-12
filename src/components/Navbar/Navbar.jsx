import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return(
        <div className={s.nav}>
            <div><NavLink to = 'tasks' className = { navData => navData.isActive ? s.active : s.item}>Тапсырмалар</NavLink></div>
            <div><NavLink to = 'tales' className = { navData => navData.isActive ? s.active : s.item}>Ертегілер</NavLink></div>
        </div>
    )
}

export default Navbar;