import React, {useState} from 'react';
import {CounterTypeSettings} from "./CounterTypeSettings";
import {CounterTypeUser} from "./CounterTypeUser";


type CounterType = {
    displayId: string
    title: string
    type: 'settings' | 'user'
}

export type CounterStateType = {
    countUser: number
    maxValue: number
    startValue: number
}

export const Counter = ({title, type}: CounterType) => {
    const [counterState, setCounterState] = useState<CounterStateType>({
            countUser: 0,
            maxValue: 5,
            startValue: 0,
        }
    )

    // const maxValue = 5;

    return (
        <div className="counter">
            <h3>{title}</h3>
            <div>
                {
                    type === "settings" && (
                        <CounterTypeSettings counterState={counterState} setCounterState={setCounterState}/>
                    )
                }
                {
                    type === "user" && (
                        <CounterTypeUser counterState={counterState} setCounterState={setCounterState} />
                    )
                }
            </div>
        </div>
    );
};