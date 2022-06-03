import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import img_home from '../../assets/Lovepik_com-610523764-Cartoon vector minimalistic small house.png'

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.home}>
        <NavLink
          to="home"
          className={(navData) => (navData.isActive ? s.active : s.item)}>
          <div className={s.icon}>
            <img src={img_home} />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
