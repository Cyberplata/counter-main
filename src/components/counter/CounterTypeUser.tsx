import React from 'react';
import {Button} from "../Button";
import {CounterStateType} from "../../App";

type CounterTypeUserType = {
    counterState: CounterStateType
    setCounterState: (counterState: CounterStateType) => void
    // error: string
}

export const CounterTypeUser = ({counterState, setCounterState}: CounterTypeUserType) => {
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
            setCounterState({
                ...counterState,
                countUser: counterState.countUser + 1
            });
        }
    }
    const error = (counterState.startValue < 0 || counterState.startValue >= counterState.maxValue) && 'incorrect Value'

    const onClickButtonResetHandler = () => {
        setCounterState({
            ...counterState,
            countUser: 0,
            setButtonDisabled: false
        });
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