import React, {Dispatch, SetStateAction} from 'react';
import {CounterTypeSettings} from "./CounterTypeSettings";
import {CounterTypeUser} from "./CounterTypeUser";
import {CounterStateType} from "../../App";


type CounterType = {
    displayId: string
    title: string
    type: 'settings' | 'user'
    counterState: CounterStateType
    setCounterState: Dispatch<SetStateAction<CounterStateType>>
}

export const Counter = (props: CounterType) => {
    const {
        title,
        type,
        counterState,
        setCounterState
    } = props

    return (
        <div className="counter">
            <h3 className="title">{title}</h3>
            <div>
                {
                    type === "settings" && (
                        <CounterTypeSettings counterState={counterState} setCounterState={setCounterState}/>
                    )
                }
                {
                    type === "user" && (
                        <CounterTypeUser counterState={counterState} setCounterState={setCounterState}/>
                    )
                }
            </div>
        </div>
    );
};