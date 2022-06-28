import React from "react";
import s from "./Alphabet.module.css";
import useSound from "use-sound";
import a from '../../assets/Alphabetmp3/а.mp3'
import a2 from '../../assets/Alphabetmp3/ә.mp3'
import a3 from '../../assets/Alphabetmp3/б.mp3'
import a4 from '../../assets/Alphabetmp3/в.mp3'

const Alphabet = () => {
        const [playa] = useSound(a);
        const [playa2] = useSound(a2);
        const [playa3] = useSound(a3);
        const [playa4] = useSound(a4);

        return (
            <div className={s.alphabet}>
                <input className={s.button_a} onClick={playa} type='button'/>
                <input className={s.button_a2} onClick={playa2} type='button'/>
                <input className={s.button_a3} onClick={playa3} type='button'/>
                <input className={s.button_a4} onClick={playa4} type='button'/>
            </div>
        )
}

export default Alphabet;
