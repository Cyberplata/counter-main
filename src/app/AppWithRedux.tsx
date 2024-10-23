import React from 'react';
import '../App.css';
import {displays} from "../features/counter/model/dispays";
import {Counter} from "../features/counter/ui/Counter/Counter";
import {SaveToLocalStorage} from "../features/counter/ui/saveToLocalStorage/saveToLocalStorage";

export const AppWithRedux = () => {

    SaveToLocalStorage();

    return (
        <div className={"App"}>
            {displays.map(el => {
                return <Counter key={el.id}
                                title={el.title}
                                type={el.type}
                />
            })}
        </div>
    );
};