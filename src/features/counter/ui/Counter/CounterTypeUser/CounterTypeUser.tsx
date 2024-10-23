import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../app/store";
import {Button} from "../../../../../common/components/Button/Button";
import {type CounterStateType, resetCounterAC, setCountUserAC} from "../../../model/counterState-reducer";
import {DisplayLogicMessageAndError} from "./DisplayLogicMessageAndError/DisplayLogicMessageAndError";


export const CounterTypeUser = () => {
    const counterState = useSelector<RootState, CounterStateType>(state => state.counterState)

    const dispatch = useDispatch()

    const objForCheckConditions = {
        checkIncorrectValuesInc: (
            counterState.startValue < 0 ||
            counterState.countUser >= counterState.maxValue ||
            counterState.startValue >= counterState.maxValue
        ),
        checkIncorrectValuesReset: (
            counterState.countUser === counterState.startValue ||
            counterState.startValue < 0 ||
            counterState.startValue >= counterState.maxValue
        )
    }

    // // Проверка на выполнения условий при увеличении - клике на кнопку inc
    // const checkIncorrectValuesInc =
    //     counterState.startValue < 0 ||
    //     counterState.countUser >= counterState.maxValue ||
    //     counterState.startValue >= counterState.maxValue
    // ;
    //
    // // Проверка на выполнения условий при увеличении - клике на кнопку reset
    // const checkIncorrectValuesReset =
    //     counterState.countUser === counterState.startValue ||
    //     counterState.startValue < 0 ||
    //     counterState.startValue >= counterState.maxValue
    //
    // const error = (counterState.startValue < 0 || counterState.startValue >= counterState.maxValue) && 'incorrect Value'

    const onClickButtonIncHandler = () => {
        if (counterState.countUser < counterState.maxValue) {
            dispatch(setCountUserAC(counterState.countUser + 1))
        }
    }

    const onClickButtonResetHandler = () => {
        dispatch(resetCounterAC({
            countUser: 0,
            setButtonDisabled: false
        }))
    }

    return (
        <div>
            <DisplayLogicMessageAndError/>

            <div className="buttons">
                <Button title={"inc"}
                        onClick={onClickButtonIncHandler}
                        disabled={objForCheckConditions.checkIncorrectValuesInc || counterState.incButtonDisabled}
                />
                <Button title={"reset"}
                        onClick={onClickButtonResetHandler}
                        disabled={objForCheckConditions.checkIncorrectValuesReset || counterState.resetButtonDisabled}
                />
            </div>
        </div>
    );
};