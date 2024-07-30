import React from 'react';
import {Button} from "../Button";
import {CounterStateType} from "../../App";

type CounterTypeUserType = {
    counterState: CounterStateType
    setCounterState: (counterState: CounterStateType) => void
}

export const CounterTypeUser = ({counterState, setCounterState}: CounterTypeUserType) => {
    const checkingIncorrectValuesInc =
        counterState.startValue < 0 ||
        counterState.countUser >= counterState.maxValue ||
        // counterState.startValue === counterState.maxValue ||
        counterState.startValue >= counterState.maxValue
    ;

    const checkingIncorrectValuesReset =
        counterState.countUser === counterState.startValue ||
        counterState.startValue < 0 ||
        counterState.startValue >= counterState.maxValue

    const onClickButtonIncHandler = () => {
        if (counterState.countUser < counterState.maxValue) {
            setCounterState({...counterState, countUser: counterState.countUser + 1});
        }
    }

    const onClickButtonResetHandler = () => {
        setCounterState({...counterState, countUser: 0});
    }

    return (
        <div>
            {counterState.error
                ? <div className={"counter-display"}>
                    <div className={"error"}>{counterState.error}</div>
                </div>
                : <div className={`counter-display ${checkingIncorrectValuesInc 
                        ? "red" 
                        : ""}`}
                >{counterState.countUser}</div>
            }

            <div className="buttons">
                <Button title={"inc"}
                        onClick={onClickButtonIncHandler}
                        disabled={checkingIncorrectValuesInc}

                />
                <Button title={"reset"}
                        onClick={onClickButtonResetHandler}
                        disabled={checkingIncorrectValuesReset}
                />
            </div>
        </div>
    );
};


// import React from 'react';
// import {Button} from "../Button";
// import {CounterStateType} from "./Counter";
//
// type CounterTypeUserType = {
//     counterState: CounterStateType
//     setCounterState: (counterState: CounterStateType) => void
// }
//
// export const CounterTypeUser = ({counterState, setCounterState}: CounterTypeUserType) => {
//     // const [number, setNumber] = useState<number>(0);
//     // const maxValue = 5;
//
//     const ifNumberGreaterMaxValue = counterState.countUser === counterState.maxValue;
//
//     const onClickButtonIncHandler = () => {
//         setCounterState({
//             ...counterState,
//             countUser: Math.min(counterState.countUser + 1, counterState.maxValue),
//             // countUser: counterState.countUser + 1
//         })
//         // console.log(counterState.countUser)
//     }
//
//     const onClickButtonResetHandler = () => {
//         setCounterState({
//             ...counterState,
//             countUser: counterState.startValue,
//             // countUser: 0
//         })
//         // console.log(counterState.countUser)
//     }
//
//     return (
//         <div>
//             {/*<h3>{title}</h3>*/}
//             <div className={`counter-display ${ifNumberGreaterMaxValue ? "red" : ""}`}>{counterState.countUser}</div>
//             <div className="buttons">
//                 <Button title={"inc"}
//                         onClick={onClickButtonIncHandler}
//                         disabled={ifNumberGreaterMaxValue}
//
//                 />
//                 <Button title={"reset"}
//                         onClick={onClickButtonResetHandler}
//                         disabled={counterState.countUser === counterState.startValue}
//                         // disabled={counterState.countUser === 0}
//                 />
//             </div>
//         </div>
//     );
// };


// import React from 'react';
// import {Button} from "../Button";
// import {CounterStateType} from "./Counter";
//
// type CounterTypeUserType = {
//     counterState: CounterStateType
//     setCounterState: (counterState: CounterStateType) => void
// }
//
// export const CounterTypeUser = ({counterState, setCounterState}: CounterTypeUserType) => {
//     const ifNumberGreaterMaxValue = counterState.countUser === counterState.maxValue;
//
//     const onClickButtonIncHandler = () => {
//         setCounterState({
//             ...counterState,
//             countUser: Math.min(counterState.countUser + 1, counterState.maxValue)
//         })
//     }
//
//     const onClickButtonResetHandler = () => {
//         setCounterState({
//             ...counterState,
//             countUser: counterState.startValue
//         })
//     }
//
//     return (
//         <div>
//             <div className={`counter-display ${ifNumberGreaterMaxValue ? "red" : ""}`}>{counterState.countUser}</div>
//             <div className="buttons">
//                 <Button title={"inc"}
//                         onClick={onClickButtonIncHandler}
//                         disabled={ifNumberGreaterMaxValue}
//                 />
//                 <Button title={"reset"}
//                         onClick={onClickButtonResetHandler}
//                         disabled={counterState.countUser === counterState.startValue}
//                 />
//             </div>
//         </div>
//     );
// };
