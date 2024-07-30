import React from 'react';
import {CounterTypeSettings} from "./CounterTypeSettings";
import {CounterTypeUser} from "./CounterTypeUser";
import {CounterStateType} from "../../App";


type CounterType = {
    displayId: string
    title: string
    type: 'settings' | 'user'
    counterState: CounterStateType
    setCounterState: (counterState: CounterStateType) => void
}

// export type CounterStateType = {
//     countUser: number
//     maxValue: number
//     startValue: number
// }

export const Counter = ({title, type, counterState, setCounterState}: CounterType) => {
    // const [counterState, setCounterState] = useState<CounterStateType>({
    //         countUser: 0,
    //         maxValue: 5,
    //         startValue: 0,
    //     }
    // )

    // const maxValue = 5;

    return (
        <div className="counter">
            <h3 className="title">{title}</h3>
            <div>
                {/*<CounterTypeSettings*/}
                {/*    counterState={counterState}*/}
                {/*    setCounterState={setCounterState}*/}
                {/*/>*/}
                {/*<CounterTypeUser counterState={counterState} setCounterState={setCounterState}/>*/}

                {
                    type === "settings" && (
                        <CounterTypeSettings counterState={counterState} setCounterState={setCounterState}/>
                    )
                }
                {
                    type === "user" && (
                        <CounterTypeUser counterState={counterState} setCounterState={setCounterState} />
                    )
                }
            </div>
        </div>
    );
};