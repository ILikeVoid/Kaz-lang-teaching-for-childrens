import s from "./Test.module.css";
import Start from "./Start/Start";
import Result from "./Result/Result";
import Tests from "./Tests/Tests";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


const Test = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("https://628e700d368687f3e716f35d.mockapi.io/api/test/tests")
            .then((Response) => setItems(Response.data));
    }, []);

    let questionsArray = items.map((elem) =>
        <Tests
            questionsId={elem.id}
            questions={elem.question}
            imageUrl={elem.imageUrl}
            firstAnswer={elem.firstAnswer}
            secondAnswer={elem.secondAnswer}
            thirdAnswer={elem.thirdAnswer}
            value1={elem.value1}
            value2={elem.value2}
            value3={elem.value3}
            path={elem.path}
            link={elem.link}
            button={elem.button}
        />
    )

    return (
        <div className={s.test}>
            <Routes>
                <Route exact path='/' element={<Start />}/>
                <Route path={items.path} elemet={questionsArray}/>
                <Route path="/result" element={<Result/>}/>
            </Routes>
        </div>
    );
};

export default Test;
