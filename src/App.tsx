// import React, {useEffect, useState} from 'react';
// import './App.css';
// import {Counter} from "./components/Counter/Counter";
// import {v1} from "uuid";
//
// export type DisplaysType = {
//     id: string
//     title: string
//     type: 'settings' | 'user'
// }
//
// export type CounterStateType = {
//     countUser: number
//     maxValue: number
//     startValue: number
//     error: string
//     message: string // Добавлено поле для хранения сообщения
//     setButtonDisabled: boolean // Добавлено поле для управления активностью кнопки "set"
//     incButtonDisabled: boolean // Добавлено поле для управления активностью кнопки "inc"
//     resetButtonDisabled: boolean // Добавлено поле для управления активностью кнопки "reset"
// }
//
// const App = () => {
//
//     let displayId1 = v1()
//     let displayId2 = v1()
//
//     // Глобальный стейт наших дисплеев-счётчиков
//     const counter: DisplaysType[] = [
//         {id: displayId1, title: "Counter display with settings", type: 'settings'},
//         {id: displayId2, title: "User's display Counter", type: 'user'},
//     ]
//
//     // Глобальный стейт с исходными данными счётчиков
//     const [counterState, setCounterState] = useState<CounterStateType>({
//             countUser: 0,
//             maxValue: 5,
//             startValue: 0,
//             error: "",
//             message: "", // Инициализация поля для хранения сообщения
//             setButtonDisabled: false, // Инициализация поля для управления активностью кнопки "set"
//             incButtonDisabled: false, // Инициализация поля для управления активностью кнопки "inc"
//             resetButtonDisabled: false // Инициализация поля для управления активностью кнопки "reset"
//         }
//     )
//
//     // Выполняется только при монтировании-первой загрузке
//     useEffect(() => {
//         // Загрузка из localStorage
//         const storedState = localStorage.getItem('counterValue');
//         if (storedState) {
//             const newValue = JSON.parse(storedState);
//             console.log(newValue)
//             setCounterState({
//                 ...counterState,
//                     countUser: newValue.countUser,
//                     maxValue: newValue.maxValue,
//                     startValue: newValue.startValue,
//                 })
//             }
//     }, []);
//
//     // Выполняется каждый раз при изменении counterState
//     useEffect(() => {
//         localStorage.setItem('counterValue', JSON.stringify({
//             countUser: counterState.countUser,
//             maxValue: counterState.maxValue,
//             startValue: counterState.startValue,
//         }));
//     }, [counterState]);
//
//     return (
//         <div className={"App"}>
//             {counter.map(el => {
//                 return <Counter key={el.id}
//                                 displayId={el.id}
//                                 title={el.title}
//                                 type={el.type}
//                                 counterState={counterState}
//                                 setCounterState={setCounterState}
//                 />
//             })}
//         </div>
//     );
// };
//
// export default App;
// Добавляем пустой экспорт, чтобы TypeScript рассматривал этот файл как модуль
export {}
