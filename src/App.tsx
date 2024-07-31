import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {v1} from "uuid";

export type DisplaysType = {
    id: string
    title: string
    type: 'settings' | 'user'
}

export type CounterStateType = {
    countUser: number
    maxValue: number
    startValue: number
    error: string
    setButtonDisabled: boolean // Добавлено поле для управления активностью кнопки "set"
    incButtonDisabled: boolean // Добавлено поле для управления активностью кнопки "inc"
    resetButtonDisabled: boolean // Добавлено поле для управления активностью кнопки "reset"
}

const App = () => {

    let displayId1 = v1()
    let displayId2 = v1()

    const [displays, setDisplays] = useState<DisplaysType[]>([
        {id: displayId1, title: "Counter display with settings", type: 'settings'},
        {id: displayId2, title: "User's display counter", type: 'user'},
    ])

    const [counterState, setCounterState] = useState<CounterStateType>({
            countUser: 0,
            maxValue: 5,
            startValue: 0,
            error: "",
            setButtonDisabled: false, // Инициализация поля для управления активностью кнопки "set"
            incButtonDisabled: true, // Инициализация поля для управления активностью кнопки "inc"
            resetButtonDisabled: true // Инициализация поля для управления активностью кнопки "reset"
        }
    )

    return (
        <div className={"App"}>
            {displays.map(el => {
                return <Counter key={el.id}
                                displayId={el.id}
                                title={el.title}
                                type={el.type}
                                counterState={counterState}
                                setCounterState={setCounterState}
                />
            })}

            {/*<CounterTypeSettings*/}
            {/*    counterState={counterState}*/}
            {/*    setCounterState={setCounterState}*/}
            {/*/>*/}
            {/*<CounterTypeUser counterState={counterState} setCounterState={setCounterState}/>*/}
        </div>
    );
};

export default App;