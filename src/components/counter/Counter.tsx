import React, {Dispatch} from 'react';
import {CounterTypeSettings} from "./CounterTypeSettings";
import {CounterTypeUser} from "./CounterTypeUser";
import {CounterStateType} from "../../AppWithReducer";
import {CounterStateReducerActionsType} from "../../model/counterState-reducer";
import {UnknownAction} from "redux";


type CounterType = {
    // displayId: string
    title: string
    type: 'settings' | 'user'
    counterState: CounterStateType
    dispatch: Dispatch<CounterStateReducerActionsType>
    // dispatch:  Dispatch<UnknownAction>
    // dispatch: React.Dispatch<CounterStateReducerActionsType>
}

export const Counter = (props: CounterType) => {
    const {
        title,
        type,
        counterState,
        dispatch
    } = props

    return (
        <div className="counter">
            <h3 className="title">{title}</h3>
            <div>
                {
                    type === "settings" && (
                        <CounterTypeSettings counterState={counterState}
                                             dispatch={dispatch}
                        />
                    )
                }
                {
                    type === "user" && (
                        <CounterTypeUser counterState={counterState}
                                         dispatch={dispatch}
                        />
                    )
                }
            </div>
        </div>
    );
};