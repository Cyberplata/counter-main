import React, {useState} from 'react';
import {Button} from "./Button";

export const Counter = () => {

    const [number, setNumber] = useState(0);

    const maxValue = 5;
    const ifNumberGreaterMaxValue = number === maxValue;

    const onClickButtonIncHandler = () => {
        setNumber(number + 1)
    }

    const onClickButtonResetHandler = () => {
        setNumber(0)
    }

    return (
        <div className="counter">
            {/*<div className={number === maxValue ? "final-state-counter" : "counter-display"}>{number}</div>*/}
            <div className={`counter-display ${ifNumberGreaterMaxValue ? "red" : ""}`}>{number}</div>
            <div className="buttons">
                <Button title={"inc"}
                        callBack={onClickButtonIncHandler}
                        disabled={ifNumberGreaterMaxValue}
                        className="button"
                />
                <Button title={"reset"}
                        callBack={onClickButtonResetHandler}
                        disabled={number === 0}
                        className="button"
                />
            </div>
        </div>
    );
};