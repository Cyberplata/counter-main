import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
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
    message: string // Добавлено поле для хранения сообщения
    setButtonDisabled: boolean // Добавлено поле для управления активностью кнопки "set"
    incButtonDisabled: boolean // Добавлено поле для управления активностью кнопки "inc"
    resetButtonDisabled: boolean // Добавлено поле для управления активностью кнопки "reset"
}

const App = () => {

    let displayId1 = v1()
    let displayId2 = v1()

    // Глобальный стейт наших дисплеев-счётчиков
    const displays: DisplaysType[] = [
        {id: displayId1, title: "counter display with settings", type: 'settings'},
        {id: displayId2, title: "User's display counter", type: 'user'},
    ]

    // Глобальный стейт с исходными данными счётчиков
    const [counterState, setCounterState] = useState<CounterStateType>({
            countUser: 0,
            maxValue: 5,
            startValue: 0,
            error: "",
            message: "", // Инициализация поля для хранения сообщения
            setButtonDisabled: false, // Инициализация поля для управления активностью кнопки "set"
            incButtonDisabled: false, // Инициализация поля для управления активностью кнопки "inc"
            resetButtonDisabled: false // Инициализация поля для управления активностью кнопки "reset"
        }
    )

    //var3
    // Выполняется только при монтировании-первой загрузке
    useEffect(() => {
        // Загрузка из localStorage
        const storedState = localStorage.getItem('counterValue');
        if (storedState) {
            const newValue = JSON.parse(storedState);
            console.log(newValue)
            setCounterState({
                ...counterState,
                    countUser: newValue.countUser,
                    maxValue: newValue.maxValue,
                    startValue: newValue.startValue,
                })
            }
    }, []);

    // Выполняется каждый раз при изменении counterState
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify({
            countUser: counterState.countUser,
            maxValue: counterState.maxValue,
            startValue: counterState.startValue,
        }));
    }, [counterState]);

    //GPT4-Midjourney-var1
    // useEffect(() => {
    //     // Загрузка из localStorage
    //     const storedState = localStorage.getItem('counterValue');
    //     if (storedState) {
    //         setCounterState(JSON.parse(storedState));
    //     }
    // }, []); // Выполняется только при монтировании
    //
    // useEffect(() => {
    //     // Сохранение в localStorage
    //     localStorage.setItem('counterValue', JSON.stringify(counterState));
    // }, [counterState]); // Выполняется при каждом изменении counterState

    //GPT4-Midjourney-var2
    // useEffect(() => {
    //     // Загрузка из localStorage
    //     let valueAsString = localStorage.getItem('counterValue');
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString);
    //         setCounterState(newValue);
    //     } else {
    //         // Инициализация, если нет данных в localStorage
    //         setCounterState({
    //             countUser: 0,
    //             maxValue: 5,
    //             startValue: 0,
    //             error: "",
    //             message: "",
    //             setButtonDisabled: false,
    //             incButtonDisabled: false,
    //             resetButtonDisabled: false
    //         });
    //     }
    //
    //     // Сохранение в localStorage при каждом изменении counterState
    //     return () => {
    //         localStorage.setItem('counterValue', JSON.stringify(counterState));
    //         // localStorage.clear()
    //     };
    // }, [counterState]);

    //MY
    // useEffect( () => { // Отработает единожды
    //     let valueAsString = localStorage.getItem('counterValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setCounterState(newValue)
    //     }
    // }, [] )
    //
    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify(counterState))
    //     // localStorage.clear()
    // }, [counterState]);

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
        </div>
    );
};

export default App;