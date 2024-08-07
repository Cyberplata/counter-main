import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {Button} from "../Button";
import {CounterStateType} from "../../App";
import {Input} from "../Input";
import {Label} from "../Label";

type CounterTypeSettingsType = {
    counterState: CounterStateType
    setCounterState: any
    // setCounterState: (prevState: CounterStateType) => CounterStateType;
    // setCounterState: (counterState: CounterStateType) => void

    // setCounterState: (counterState: (prevState: CounterStateType) => {
    //     maxValue: number;
    //     setButtonDisabled: boolean;
    //     countUser: number;
    //     resetButtonDisabled: boolean;
    //     startValue: number;
    //     error: string;
    //     message: string;
    //     incButtonDisabled: boolean
    // }) => void
}

export const CounterTypeSettings = ({
                                        counterState,
                                        setCounterState
                                    }: CounterTypeSettingsType) => {

    const [maxValue, setMaxValue] = useState<number>(counterState.maxValue);
    const [startValue, setStartValue] = useState<number>(counterState.startValue);

    const settingsButtonDisabledAndIncorrectInput =
        startValue < 0 || startValue >= maxValue

    // Проверка на корректный ввод значения в input
    // const checkingIncorrectValuesInput = () => {
    //     if (startValue < 0 || startValue >= maxValue) {
    //         setCounterState({
    //             ...counterState, error: "Incorrect value!"
    //         })
    //     }
    //         // if (counterState.error !== "Incorrect value!" && !!counterState.countUser) {
    //         //     setCounterState({
    //         //         ...counterState, error: "enter values and press 'set'"
    //         //     })
    //     // }
    //     else {
    //         setCounterState({
    //             ...counterState, error: ""
    //         })
    //     }
    // }

    const checkingIncorrectValuesInput = useCallback(() => {
        if (startValue < 0 || startValue >= maxValue) {
            setCounterState((prevState: CounterStateType) => ({
                ...prevState,
                error: "Incorrect value!"
            }));
        } else {
            setCounterState((prevState: CounterStateType) => ({
                ...prevState,
                error: ""
            }));
        }
    }, [startValue, maxValue, setCounterState]);

    // prevState
    // const checkingIncorrectValuesInput = () => {
    //     if (startValue < 0 || startValue >= maxValue) {
    //         setCounterState((prevState: CounterStateType) => ({
    //                 ...prevState,
    //                 error: "Incorrect start value!"
    //         }));
    //     } else {
    //         setCounterState((prevState: CounterStateType) => ({
    //             ...prevState,
    //             error: ""
    //         }));
    //     }
    // };

    useEffect(() => {
        // checkingIncorrectValuesInput();
    }, [maxValue, startValue, checkingIncorrectValuesInput]);

    // Проверяем, если меняется maxValue или startValue, каждый раз useEffect запускает функцию checkingIncorrectValuesInput()
    // useEffect(() => {
    //     checkingIncorrectValuesInput()
    // }, [maxValue, startValue])

    // useEffect с зависимостью [counterState.maxValue, counterState.startValue]
    // useEffect(() => {
    //     checkingIncorrectValuesInput()
    // }, [counterState.maxValue, counterState.startValue])

    // При изменении max value в инпуте
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = Number(e.currentTarget.value);
        setMaxValue(newMaxValue);
        setCounterState({
            ...counterState,
            maxValue: newMaxValue,
            setButtonDisabled: false,
            message: "enter values and press 'set'",
            incButtonDisabled: true,
            resetButtonDisabled: true
        });
    }

    // При изменении start value в инпуте
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue = Number(e.currentTarget.value);
        setStartValue(newStartValue);
        setCounterState({
            ...counterState,
            startValue: newStartValue,
            setButtonDisabled: false,
            message: "enter values and press 'set'",
            incButtonDisabled: true,
            resetButtonDisabled: true
        });
    }

    // При клике на кнопку set что у нас происходит
    const onClickButtonSetHandler = () => {
        // debugger
        setCounterState({
            ...counterState,
            countUser: startValue,
            maxValue: maxValue,
            startValue: startValue,
            message: "", // Обновление сообщения после нажатия на кнопку "set"
            setButtonDisabled: true, // Обновление состояния для управления активностью кнопки "set"
            incButtonDisabled: false, // Обновление состояния для управления активностью кнопки "inc"
            resetButtonDisabled: false, // Обновление состояния для управления активностью кнопки "reset"
        });
    }

    // // prevState
    // const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    //     const newMaxValue = Number(e.currentTarget.value);
    //     setMaxValue(newMaxValue);
    //     setCounterState((prevState: CounterStateType) => {
    //         return ({
    //             ...prevState,
    //             maxValue: newMaxValue
    //         });
    //     });
    // }
    //
    // const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    //     const newStartValue = Number(e.currentTarget.value);
    //     setStartValue(newStartValue);
    //     setCounterState((prevState: CounterStateType) => ({
    //         ...prevState,
    //         startValue: newStartValue
    //     }));
    // };
    //
    // const onClickButtonSetHandler = () => {
    //     setCounterState((prevState: CounterStateType) => ({
    //         ...prevState,
    //         countUser: startValue,
    //         maxValue: maxValue,
    //         startValue: startValue,
    //         error: ""
    //     }));
    // };

    return (
        <div>
            <div className={"counter-display settings"}>
                <Label htmlFor={"maxValueInput"}>max value:
                    <Input id={"maxValueInput"} className={`inputSettings ${startValue >= maxValue ? "red" : ""}`}
                           type="number"
                           value={maxValue}
                           onChange={onChangeMaxValue}
                    />
                </Label>
                <Label htmlFor={"startValueInput"}>start value:
                    <Input id={"startValueInput"} className={`inputSettings ${settingsButtonDisabledAndIncorrectInput ? "red" : ""}`}
                           type="number"
                           value={startValue}
                           onChange={onChangeStartValue}
                    />
                </Label>
            </div>
            <div className="buttons">
                <Button title={"set"}
                        onClick={onClickButtonSetHandler}
                        disabled={counterState.setButtonDisabled || settingsButtonDisabledAndIncorrectInput}
                />
            </div>
        </div>
    );
};


//GPT
// import React, {ChangeEvent, useState, useEffect} from 'react';
// import {Button} from "../Button";
// import {CounterStateType} from "../../App";
//
//
// type CounterTypeSettingsType = {
//     counterState: CounterStateType
//     setCounterState: (counterState: CounterStateType) => void
// }
//
// export const CounterTypeSettings = ({
//                                         counterState,
//                                         setCounterState
//                                     }: CounterTypeSettingsType) => {
//
//     const [maxValue, setMaxValue] = useState<number>(counterState.maxValue);
//     const [startValue, setStartValue] = useState<number>(counterState.startValue);
//
//     const settingsButtonDisabledAndIncorrectInput = startValue < 0
//         || startValue === maxValue
//         || startValue > maxValue
//         || counterState.error !== "";
//
//     const checkingIncorrectValuesInput = () => {
//         if (startValue < 0 || startValue >= maxValue) {
//             setCounterState({
//                 ...counterState,
//                 error: "Incorrect start value!"
//             });
//         } else {
//             setCounterState({
//                 ...counterState,
//                 error: ""
//             });
//         }
//     };
//
//     useEffect(() => {
//         checkingIncorrectValuesInput();
//     }, [startValue, maxValue]);
//
//     const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
//         const newMaxValue = Number(e.currentTarget.value);
//         setMaxValue(newMaxValue);
//         setCounterState({
//             ...counterState,
//             maxValue: newMaxValue
//         });
//     }
//
//     const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
//         const newStartValue = Number(e.currentTarget.value);
//         setStartValue(newStartValue);
//         setCounterState({
//             ...counterState,
//             startValue: newStartValue
//         });
//     }
//
//     const onClickButtonSetHandler = () => {
//         setCounterState({
//             ...counterState,
//             countUser: startValue,
//             maxValue: maxValue,
//             startValue: startValue
//         });
//     }
//
//     return (
//         <div>
//             <div className={"counter-display settings"}>
//                 <label>max value:
//                     <input className={`inputSettings ${startValue >= maxValue ? "red" : ""}`}
//                            type="number"
//                            value={maxValue}
//                            onChange={onChangeMaxValue}
//                     />
//                 </label>
//                 <label>start value:
//                     <input className={`inputSettings ${settingsButtonDisabledAndIncorrectInput ? "red" : ""}`}
//                            type="number"
//                            value={startValue}
//                            onChange={onChangeStartValue}
//                     />
//                 </label>
//             </div>
//             <div className="buttons">
//                 <Button title={"set"} onClick={onClickButtonSetHandler} disabled={settingsButtonDisabledAndIncorrectInput}/>
//             </div>
//         </div>
//     );
// };

/*
import React, {ChangeEvent} from 'react';
import {Button} from "../Button";
import {CounterStateType} from "./counter";

type CounterTypeSettingsType = {
    counterState: CounterStateType
    setCounterState: (counterState: CounterStateType) => void
}

export const CounterTypeSettings = ({
                                        counterState,
                                        setCounterState
                                    }: CounterTypeSettingsType) => {

    // const [maxValue, setMaxValue] = useState<number>(counterState.maxValue);
    // const [startValue, setStartValue] = useState<number>(counterState.startValue);

    const settingsButtonDisabled =
        counterState.startValue < 0 ||
        counterState.startValue === counterState.maxValue ||
        counterState.startValue > counterState.maxValue;

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        // setMaxValue(Number(e.currentTarget.value))
        const newMaxValue = Number(e.currentTarget.value);
        setCounterState({
            ...counterState,
            maxValue: newMaxValue
        })
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        // setStartValue(+e.currentTarget.value)
        const newStartValue= Number(e.currentTarget.value);
        setCounterState({
            ...counterState,
            startValue: newStartValue
        })
    }

    const onClickButtonSetHandler = () => {
        debugger
        setCounterState({
            ...counterState,
            countUser: counterState.maxValue,
            // maxValue: maxValue,
            // startValue: startValue
        })
    }

    return (
        <div>
            {/!*<h3>{title}</h3>*!/}
            <div className={"counter-display settings"}>
                <label>
                    max value:
                    <input
                        className={"inputSettings"}
                        type="number" value={counterState.maxValue}
                        onChange={onChangeMaxValue}
                    />
                </label>
                <label>
                    start value:
                    <input
                        className={"inputSettings"}
                        type="number" value={counterState.startValue}
                        onChange={onChangeStartValue}
                    />
                </label>
            </div>
            <div className="buttons">
                <Button
                    title={"set"}
                    onClick={onClickButtonSetHandler}
                    disabled={settingsButtonDisabled}
                />
            </div>
        </div>
    );
};
*/

// import React, {ChangeEvent} from 'react';
// import {Button} from "../Button";
// import {CounterStateType} from "./counter";
//
// type CounterTypeSettingsType = {
//     counterState: CounterStateType
//     setCounterState: (counterState: CounterStateType) => void
// }
//
// export const CounterTypeSettings = ({
//                                         counterState,
//                                         setCounterState
//                                     }: CounterTypeSettingsType) => {
//
//     const settingsButtonDisabled =
//         counterState.startValue < 0 ||
//         counterState.startValue === counterState.maxValue ||
//         counterState.startValue > counterState.maxValue;
//
//     const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
//         const newMaxValue = Number(e.currentTarget.value);
//         setCounterState({
//             ...counterState,
//             maxValue: newMaxValue
//         })
//     }
//
//     const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
//         const newStartValue = Number(e.currentTarget.value);
//         setCounterState({
//             ...counterState,
//             startValue: newStartValue
//         })
//     }
//
//     const onClickButtonSetHandler = () => {
//         setCounterState({
//             ...counterState,
//             countUser: counterState.startValue
//         })
//     }
//
//     return (
//         <div>
//             <div className={"counter-display settings"}>
//                 <label>
//                     max value:
//                     <input
//                         className={"inputSettings"}
//                         type="number"
//                         value={counterState.maxValue}
//                         onChange={onChangeMaxValue}
//                     />
//                 </label>
//                 <label>
//                     start value:
//                     <input
//                         className={"inputSettings"}
//                         type="number"
//                         value={counterState.startValue}
//                         onChange={onChangeStartValue}
//                     />
//                 </label>
//             </div>
//             <div className="buttons">
//                 <Button
//                     title={"set"}
//                     onClick={onClickButtonSetHandler}
//                     disabled={settingsButtonDisabled}
//                 />
//             </div>
//         </div>
//     );
// };
