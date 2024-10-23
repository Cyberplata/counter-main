import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {type CounterStateType, setCounterStateAC, updateCounterSettingsAC} from "../../model/counterState-reducer";
import {Button} from "../Button";
import {Input} from "../Input";
import {Label} from "../Label";

// type CounterTypeSettingsType = {
//     // counterState: CounterStateType
//     // dispatch: Dispatch<CounterStateReducerActionsType>
// }

export const CounterTypeSettings = (
    // {counterState}: CounterTypeSettingsType
) => {
    const counterState = useSelector<RootState, CounterStateType>(state => state.counterState)

    const [maxValue, setMaxValue] = useState(counterState.maxValue);
    const [startValue, setStartValue] = useState(counterState.startValue);

    const dispatch = useDispatch()

    const settingsButtonDisabledAndIncorrectInput =
        startValue < 0 || startValue >= maxValue

    // При изменении max value в инпуте
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {

        const newMaxValue = Number(e.currentTarget.value);
        setMaxValue(newMaxValue);
        dispatch(updateCounterSettingsAC({
            maxValue: newMaxValue,
            startValue,
            setButtonDisabled: false,
            message: "enter values and press 'set'",
            incButtonDisabled: true,
            resetButtonDisabled: true
        }));
    }

    // При изменении start value в инпуте
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {

        const newStartValue = Number(e.currentTarget.value);
        setStartValue(newStartValue);
        dispatch(updateCounterSettingsAC({
            maxValue,
            startValue: newStartValue,
            setButtonDisabled: false,
            message: "enter values and press 'set'",
            incButtonDisabled: true,
            resetButtonDisabled: true
        }))
    }

    // При клике на кнопку set что у нас происходит
    const onClickButtonSetHandler = () => {

        dispatch(setCounterStateAC({
            countUser: startValue,
            maxValue: maxValue,
            startValue: startValue,
            error: "",
            message: "",
            setButtonDisabled: true,
            incButtonDisabled: false,
            resetButtonDisabled: false,
        }));
    }

    return (
        <div>
            <div className={"counter-display settings"}>
                <Label htmlFor={"maxValueInput"}>max value:
                    <Input id={"maxValueInput"}
                           className={`inputSettings 
                                ${startValue >= maxValue ? "red" : ""}
                           `}
                           type="number"
                           value={maxValue}
                           onChange={onChangeMaxValue}
                    />
                </Label>
                <Label htmlFor={"startValueInput"}>start value:
                    <Input id={"startValueInput"}
                           className={`inputSettings
                                ${settingsButtonDisabledAndIncorrectInput ? "red" : ""}
                           `}
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