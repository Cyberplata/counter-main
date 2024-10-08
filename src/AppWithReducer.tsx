import React, {useEffect, useReducer} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {v1} from "uuid";
import {counterStateReducer, setCounterStateAC} from "./model/counterState-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./app/store";

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

const AppWithReducer = () => {

    let displayId1 = v1()
    let displayId2 = v1()

    // Глобальный стейт наших дисплеев-счётчиков
    const displays: DisplaysType[] = [
        {id: displayId1, title: "counter display with settings", type: 'settings'},
        {id: displayId2, title: "User's display counter", type: 'user'},
    ]

    const counterState = useSelector<RootState, CounterStateType>(state => state.counterState)

    const dispatch = useDispatch()

    useEffect(() => {
        const storedState = localStorage.getItem('counterValue');
        if (storedState) {
            const newValue = JSON.parse(storedState);
            dispatch(setCounterStateAC(newValue));
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify({
            countUser: counterState.countUser,
            maxValue: counterState.maxValue,
            startValue: counterState.startValue,
        }));
    }, [counterState]);


    // // Глобальный стейт с исходными данными счётчиков
    // const [counterState, dispatchToCounterState] = useReducer(counterStateReducer,{
    //         countUser: 0,
    //         maxValue: 5,
    //         startValue: 0,
    //         error: "",
    //         message: "", // Инициализация поля для хранения сообщения
    //         setButtonDisabled: false, // Инициализация поля для управления активностью кнопки "set"
    //         incButtonDisabled: false, // Инициализация поля для управления активностью кнопки "inc"
    //         resetButtonDisabled: false // Инициализация поля для управления активностью кнопки "reset"
    //     }
    // )

    // // Выполняется только при монтировании-первой загрузке
    // useEffect(() => {
    //     // Загрузка из localStorage
    //     const storedState = localStorage.getItem('counterValue');
    //     if (storedState) {
    //         const newValue = JSON.parse(storedState);
    //         console.log(newValue)
    //         dispatchToCounterState({
    //             ...counterState,
    //                 countUser: newValue.countUser,
    //                 maxValue: newValue.maxValue,
    //                 startValue: newValue.startValue,
    //             })
    //         }
    // }, []);
    //
    // // Выполняется каждый раз при изменении counterState
    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify({
    //         countUser: counterState.countUser,
    //         maxValue: counterState.maxValue,
    //         startValue: counterState.startValue,
    //     }));
    // }, [counterState]);

    // //Mistral
    // useEffect(() => {
    //     const storedState = localStorage.getItem('counterValue');
    //     if (storedState) {
    //         const newValue = JSON.parse(storedState);
    //         dispatchToCounterState(setCounterStateAC(newValue));
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify({
    //         countUser: counterState.countUser,
    //         maxValue: counterState.maxValue,
    //         startValue: counterState.startValue,
    //     }));
    // }, [counterState]);

    return (
        <div className={"App"}>
            {displays.map(el => {
                return <Counter key={el.id}
                                // displayId={el.id}
                                title={el.title}
                                type={el.type}
                                counterState={counterState}
                                dispatch={dispatch}
                />
            })}
        </div>
    );
};

export default AppWithReducer;