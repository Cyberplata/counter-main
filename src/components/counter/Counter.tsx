import React from 'react';
import {CounterTypeSettings} from "./CounterTypeSettings";
import {CounterTypeUser} from "./CounterTypeUser";


type CounterType = {
    title: string
    type: 'settings' | 'user'
    // counterState: CounterStateType
    // dispatch: Dispatch<CounterStateReducerActionsType>
}

export const Counter = (props: CounterType) => {
    const {
        title,
        type,
        // counterState,
        // dispatch
    } = props

    return (
        <div className="counter">
            <h3 className="title">{title}</h3>
            <div>
                {type === "settings" && <CounterTypeSettings />}
                {type === "user" && <CounterTypeUser />}
            </div>
        </div>
    );
};