import React from 'react';
import {CounterTypeSettings} from "./CounterTypeSettings";
import {CounterTypeUser} from "./CounterTypeUser";
import {CounterStateType} from "../../AppWithReducer";
import {CounterStateReducerActionsType} from "../../model/counterState-reducer";


type CounterType = {
    displayId: string
    title: string
    type: 'settings' | 'user'
    counterState: CounterStateType
    dispatchToCounterState: React.Dispatch<CounterStateReducerActionsType>
}

export const Counter = (props: CounterType) => {
    const {
        title,
        type,
        counterState,
        dispatchToCounterState
    } = props

    return (
        <div className="counter">
            <h3 className="title">{title}</h3>
            <div>
                {
                    type === "settings" && (
                        <CounterTypeSettings counterState={counterState}
                                             dispatchToCounterState={dispatchToCounterState}
                        />
                    )
                }
                {
                    type === "user" && (
                        <CounterTypeUser counterState={counterState}
                                         dispatchToCounterState={dispatchToCounterState}
                        />
                    )
                }
            </div>
        </div>
    );
};