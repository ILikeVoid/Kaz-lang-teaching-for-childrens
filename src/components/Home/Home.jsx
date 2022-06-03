import React from "react";
import { Route, Routes} from "react-router-dom";
import s from "./Home.module.css";


const Home = (props) => {

    const onClick = () => {
        window.location.assign('/tasks')
    }

  return (
    <div className={s.home}>
      <h1>Казахский язык для детей</h1>
      <img src="https://st.focusedcollection.com/3839757/i/650/focused_428811454-stock-photo-five-kids-reading-large-book.jpg" />
      <h2>Описание</h2>
      <button onClick={onClick} className={s.buttom1}>
        Начать изучение
      </button>
      
    </div>
    
  );
};

export default Home;
