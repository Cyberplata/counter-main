import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./app/store";
import {Counter} from "./components/counter/Counter";
import {type CounterStateType, setCounterStateAC} from "./model/counterState-reducer";
import {displays} from "./model/dispays";

// export type DisplaysType = {
//     id: string
//     title: string
//     type: 'settings' | 'user'
// }

const AppWithRedux = () => {

    // let displayId1 = v1()
    // let displayId2 = v1()
    //
    // // Глобальный стейт наших дисплеев-счётчиков
    // const displays: DisplaysType[] = [
    //     {id: displayId1, title: "counter display with settings", type: 'settings'},
    //     {id: displayId2, title: "User's display counter", type: 'user'},
    // ]

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

    return (
        <div className={"App"}>
            {displays.map(el => {
                return <Counter key={el.id}
                                title={el.title}
                                type={el.type}
                                // counterState={counterState}
                />
            })}
        </div>
    );
};

export default AppWithRedux;