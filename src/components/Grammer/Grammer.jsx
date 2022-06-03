import s from "./Grammer.module.css";
import {useEffect, useState, useRef} from 'react'

const Grammer = () => {
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  function Focus() {
    return inputRef.current.focus();
  }
  return (
    <div className={s.tales}>
    <h1>Количество рендеров: {renderCount.current}</h1>
    <h1>Прошлое Значение: {prevValue.current}</h1>
    <input
      ref={inputRef}
      type="text"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
    <button onClick={Focus}>Фокус</button>
  </div>
  );
};

export default Grammer;
