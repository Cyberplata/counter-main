import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "../Button";
import {CounterStateType} from "../../App";

type CounterTypeSettingsType = {
    counterState: CounterStateType
    setCounterState: (counterState: CounterStateType) => void
}

export const CounterTypeSettings = ({
                                        counterState,
                                        setCounterState
                                    }: CounterTypeSettingsType) => {

    const [maxValue, setMaxValue] = useState<number>(counterState.maxValue);
    const [startValue, setStartValue] = useState<number>(counterState.startValue);

    const settingsButtonDisabledAndIncorrectInput =
        startValue < 0
        || startValue >= maxValue
    // || startValue > maxValue

    const checkingIncorrectValuesInput = () => {
        if (startValue < 0 || startValue >= maxValue) {
            setCounterState({
                ...counterState, error: "Incorrect value!"
            })
        }
            // if (counterState.error !== "Incorrect value!" && !!counterState.countUser) {
            //     setCounterState({
            //         ...counterState, error: "enter values and press 'set'"
            //     })
        // }
        else {
            setCounterState({
                ...counterState, error: ""
            })
        }
    }

    useEffect(() => {
        checkingIncorrectValuesInput()
    }, [maxValue, startValue])

    // useEffect(() => {
    //
    // },[])

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = Number(e.currentTarget.value);
        setMaxValue(newMaxValue);
        setCounterState({
            ...counterState,
            maxValue: newMaxValue,
            setButtonDisabled: false,
            message: "enter values and press 'set'"
        });
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue = Number(e.currentTarget.value);
        setStartValue(newStartValue);
        setCounterState({
            ...counterState,
            startValue: newStartValue,
            setButtonDisabled: false,
            message: "enter values and press 'set'"
        });
    }

    const onClickButtonSetHandler = () => {
        // debugger
        setCounterState({
            ...counterState,
            countUser: startValue,
            maxValue: maxValue,
            startValue: startValue,
            message: "", // Обновление сообщения после нажатия на кнопку "set"
            setButtonDisabled: true, // Обновление состояния для управления активностью кнопки "set"
            // incButtonDisabled: false, // Обновление состояния для управления активностью кнопки "inc"
            // resetButtonDisabled: false, // Обновление состояния для управления активностью кнопки "reset"
        });
    }


    return (
        <div>
            <div className={"counter-display settings"}>
                <label>max value:
                    <input className={`inputSettings ${startValue >= maxValue ? "red" : ""}`}
                           type="number"
                           value={maxValue}
                           onChange={onChangeMaxValue}
                    />
                </label>
                <label>start value:
                    <input className={`inputSettings ${settingsButtonDisabledAndIncorrectInput ? "red" : ""}`}
                           type="number"
                           value={startValue}
                           onChange={onChangeStartValue}
                    />
                </label>
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
import {CounterStateType} from "./Counter";

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
// import {CounterStateType} from "./Counter";
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
