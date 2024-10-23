import React from 'react';
import {CounterTypeSettings} from "./CounterTypeSettings/CounterTypeSettings";
import {CounterTypeUser} from "./CounterTypeUser/CounterTypeUser";


type CounterType = {
    title: string
    type: 'settings' | 'user'
}

export const Counter = (props: CounterType) => {
    const { title, type} = props

    return (
        <div className="counter">
            <h3 className="title">{title}</h3>
            <div>
                {type === "settings" && <CounterTypeSettings/>}
                {type === "user" && <CounterTypeUser/>}
            </div>
        </div>
    );
};