import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import tasks_img from "../../assets/tasks_png.png"
import alphaet_img from "../../assets/alphaet_png.png"
import tales_img from "../../assets/tales_pmg.png"

const Navbar = () => {
  return (
    <div className={s.nav}>
      <div className={s.alphabet_link}>
        <img src={alphaet_img}/>
        <NavLink
          to="alphabet"
          className={(navData) => (navData.isActive ? s.active : s.item)}>Алфавит</NavLink>
      </div>
      <div className={s.tasks_link}>
        <img src={tasks_img} />
        <NavLink
          to="tasks"
          className={(navData) => (navData.isActive ? s.active : s.item)}>Тапсырмалар</NavLink>
      </div>
      <div className={s.tales_link}>
        <img src={tales_img}/>
        <NavLink
          to="tales"
          className={(navData) => (navData.isActive ? s.active : s.item)}>Ертегілер
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
