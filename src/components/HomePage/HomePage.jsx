import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import s from "./HomePage.module.css";


const HomePage = (props) => {

  return (
    <div className={s.home}>
        {/*<NavLink to="/tasks"><input className={s.button1} type="button" value="Начать изучение"/></NavLink>*/}
    </div>
    
  );
};

export default HomePage;
