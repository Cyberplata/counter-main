import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {v1} from "uuid";

export type DisplaysType = {
    id: string
    title: string
    type: 'settings' | 'user'
}

const App = () => {

    let displayId1 = v1()
    let displayId2 = v1()

    const [displays, setDisplays] = useState<DisplaysType[]>([
        {id: displayId1, title: "Counter display with settings", type: 'settings'},
        {id: displayId2, title: "User's display counter", type: 'user'},
    ])

    return (
        <div className={"App"}>
            {displays.map(el => {
                return <Counter key={el.id} displayId={el.id} title={el.title} type={el.type}/>
            })}
        </div>
    );
};

export default App;