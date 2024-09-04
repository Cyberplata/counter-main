import React, {Dispatch} from 'react';
import {Button} from "../Button";
import {CounterStateType} from "../../AppWithReducer";
import {
    CounterStateReducerActionsType,
    resetCounterAC,
    setButtonDisabledAC,
    setCountUserAC
} from "../../model/counterState-reducer";
import {UnknownAction} from "redux";

type CounterTypeUserType = {
    counterState: CounterStateType
    dispatch: Dispatch<CounterStateReducerActionsType>
    // dispatch: Dispatch<UnknownAction>
    // dispatchToCounterState: React.Dispatch<CounterStateReducerActionsType>
    // setCounterState: (counterState: CounterStateType) => void
    // error: string
}

export const CounterTypeUser = ({counterState, dispatch}: CounterTypeUserType) => {
    // Проверка на выполнения условий при увеличении - клике на кнопку inc
    const checkingIncorrectValuesInc =
        counterState.startValue < 0 ||
        counterState.countUser >= counterState.maxValue ||
        counterState.startValue >= counterState.maxValue
    ;

    // Проверка на выполнения условий при увеличении - клике на кнопку reset
    const checkingIncorrectValuesReset =
        counterState.countUser === counterState.startValue ||
        counterState.startValue < 0 ||
        counterState.startValue >= counterState.maxValue

    const onClickButtonIncHandler = () => {
        if (counterState.countUser < counterState.maxValue) {
            // dispatchToCounterState({
            //             //     ...counterState,
            //             //     countUser: counterState.countUser + 1
            //             // });
            dispatch(setCountUserAC(counterState.countUser + 1))
        }
    }
    const error = (counterState.startValue < 0 || counterState.startValue >= counterState.maxValue) && 'incorrect Value'

    const onClickButtonResetHandler = () => {
        // dispatchToCounterState({
        //     ...counterState,
        //     countUser: 0,
        //     setButtonDisabled: false
        // });

        // dispatch(setCountUserAC(0))
        // dispatch(setButtonDisabledAC(false))
        dispatch(resetCounterAC({
            countUser: 0,
            setButtonDisabled: false
        }))


    }

    return (
        <div>
            {error || counterState.message
                ? <div className={"counter-display"}>
                    <div className={`"error" ${error 
                        ? "error" 
                        : "message"}`}
                    >{error || counterState.message}</div>
                </div>
                : <div className={`counter-display ${checkingIncorrectValuesInc
                    ? "red"
                    : ""}`}
                >{counterState.countUser}</div>
            }

            <div className="buttons">
                <Button title={"inc"}
                        onClick={onClickButtonIncHandler}
                        disabled={checkingIncorrectValuesInc || counterState.incButtonDisabled}
                />
                <Button title={"reset"}
                        onClick={onClickButtonResetHandler}
                        disabled={checkingIncorrectValuesReset || counterState.resetButtonDisabled}
                />
            </div>
        </div>
    );
};