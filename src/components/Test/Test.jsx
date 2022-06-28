import s from "./Test.module.css";
import Start from "./Start/Start";
import Result from "./Result/Result";
import Tests from "./Tests/Tests";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


const Test = () => {
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
            .get("https://628e700d368687f3e716f35d.mockapi.io/api/test/tests")
            .then((Response) => setItems(Response.data));
    }, []);

    return (
        <div className={s.test}>
            <Routes>
                <Route exact path='/' element={<Start/>}/>
                {items.map(elem => {
                        return <Route path={elem.path}
                                      element={<Tests
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
                                          getReset={getReset}
                                          getAnswer={getAnswer}
                                          id={elem.id}
                                      />}
                        />
                    }
                )}
                <Route path="/result" element={<Result
                    result={result}
                    getResult={getResult}/>}/>
            </Routes>
        </div>
    )
};
export default Test;

