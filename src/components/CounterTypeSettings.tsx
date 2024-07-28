import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";

type CounterType = {
    displayId: string
    title: string
    type: 'settings' | 'user'
}

export const CounterTypeSettings = ({displayId,title,type}: CounterType) => {

    const [maxValue, setMaxValue] = useState<number>(5);
    const [startValue, setStartValue] = useState<number>(0);

    const settingsButtonDisabled = startValue < 0 || startValue === maxValue || startValue < maxValue

    const onClickButtonSetHandler = () => {
        // setNumber(startValue)
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => setMaxValue(Number(e.currentTarget.value))
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => setStartValue(+e.currentTarget.value)

    return (
        <div>
            <div>
                <div>max value:</div>
                <input type="number" value={maxValue} onChange={onChangeMaxValue}/>
                <div>start value:</div>
                <input type="number" value={startValue} onChange={onChangeStartValue}/>
            </div>
            <div className="buttons">
                <Button title={"set"} onClick={onClickButtonSetHandler} disabled={settingsButtonDisabled}/>
            </div>
        </div>
    );
};