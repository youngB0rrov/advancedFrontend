import {useState} from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {

    const [number, setNumber] = useState<number>(0);
    const increase = () => {
        setNumber(prev => prev + 1);
    }

    return (
        <div>
            <span className={classes.number}>
                {number}
            </span>
            <button
                onClick={increase}
                className={classes.handler}
            >
                Увеличить число счетчика на единицу
            </button>
        </div>
    )
}