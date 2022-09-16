import {useState} from "react";
import "./counter.scss";

export const Counter = () => {

    const [number, setNumber] = useState<number>(0);
    const increase = () => {
        setNumber(prev => prev + 1);
    }

    return (
        <div>
            <span>
                {number}
            </span>
            <button
                onClick={increase}
                id={'counter-handler'}
            >
                Увелисить число счетчика на единицу
            </button>
        </div>
    )
}