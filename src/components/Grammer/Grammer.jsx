import React, {useEffect, useState} from "react";
import s from "./Grammer.module.css";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Grammers from "./Grammers/Grammers";
import StartGrammer from "./StartGrammer/StartGrammer";
import ResultGrammer from "./ResultGrammer/ResultGrammer"

const Grammer = () => {
    const [items, setItems] = useState([]);
    const [answer, setAnswer] = useState(0)
    const [flag, setFlag] = useState(0)
    const [result, setResult] = useState(0)

    const getAnswer = (event) => {
        if (event.target.value === "yes") {
            if (flag === 0) {
                setAnswer(answer + 1)
                setFlag(flag + 1)
            } else {
                setAnswer(answer)
            }
        } else {
            if (flag !== 0) {
                setAnswer(answer - 1)
                setFlag(flag - 1)
            } else {
                setAnswer(answer)
            }
        }
    }

    const getReset = () => {
        setAnswer(0)
        setFlag(0)
        setResult(result + answer)
    }

    const getResult = () => {
        setAnswer(0)
        setFlag(0)
        setResult(0)
    }

    useEffect(() => {
        axios
            .get("https://628e700d368687f3e716f35d.mockapi.io/api/test/grammer")
            .then((Response) => setItems(Response.data));
    }, []);
    return (
        <div className={s.grammer}>
            <Routes>
                <Route exact path='/' element={<StartGrammer />}/>
                {items.map(elem => {
                        return <Route path={elem.path}
                                      element={<Grammers
                                          questionsId={elem.id}
                                          questions={elem.question}
                                          firstAnswer={elem.firstAnswer}
                                          secondAnswer={elem.secondAnswer}
                                          thirdAnswer={elem.thirdAnswer}
                                          value1={elem.value1}
                                          value2={elem.value2}
                                          value3={elem.value3}
                                          path={elem.path}
                                          link={elem.link}
                                          button={elem.button}
                                          getReset={getReset}
                                          getAnswer={getAnswer}
                                          id={elem.id}
                                      />}
                        />
                    }
                )}
                <Route path="/result" element={<ResultGrammer
                    result={result}
                    getResult={getResult}/>}/>
            </Routes>
        </div>
    )
}
export default Grammer;
