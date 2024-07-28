import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";
import {CounterTypeSettings} from "./CounterTypeSettings";

type CounterType = {
    displayId: string
    title: string
    type: 'settings' | 'user'
}

export const Counter = ({displayId, title, type}: CounterType) => {
    const [number, setNumber] = useState<number>(0);
    // const [maxValue, setMaxValue] = useState<number>(5);
    // const [startValue, setStartValue] = useState<number>(0);

    const maxValue = 5;
    const ifNumberGreaterMaxValue = number === maxValue;


    const onClickButtonIncHandler = () => {
        setNumber(number + 1)
    }

    const onClickButtonResetHandler = () => {
        setNumber(0)
    }

    // const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => setMaxValue(Number(e.currentTarget.value))
    // const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => setStartValue(+e.currentTarget.value)

    return (
        <div className="counter">
            <h3>{title}</h3>
            <div>
                {
                    type === "settings" && (
                        <CounterTypeSettings displayId={displayId} title={title} type={'settings'}/>
                    )}
                {
                type === "user" && (
                        <div>
                            <div className={`counter-display ${ifNumberGreaterMaxValue ? "red" : ""}`}>{number}</div>
                            <div className="buttons">
                                <Button title={"inc"}
                                        onClick={onClickButtonIncHandler}
                                        disabled={ifNumberGreaterMaxValue}

                                />
                                <Button title={"reset"}
                                        onClick={onClickButtonResetHandler}
                                        disabled={number === 0}
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};