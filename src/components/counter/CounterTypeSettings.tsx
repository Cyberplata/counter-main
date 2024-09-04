import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import {Button} from "../Button";
import {CounterStateType} from "../../AppWithReducer";
import {Input} from "../Input";
import {Label} from "../Label";
import {
    CounterStateReducerActionsType,
    setButtonDisabledAC, setCounterStateAC, setIncButtonDisabledAC,
    setMaxValueAC,
    setMessageAC, setResetButtonDisabledAC, setStartValueAC, updateCounterSettingsAC
} from "../../model/counterState-reducer";
import {UnknownAction} from "redux";

type CounterTypeSettingsType = {
    counterState: CounterStateType
    dispatch: Dispatch<CounterStateReducerActionsType>
    // dispatch: Dispatch<UnknownAction>
    // dispatchToCounterState: React.Dispatch<CounterStateReducerActionsType>
    // setCounterState: Dispatch<SetStateAction<CounterStateType>>
}

export const CounterTypeSettings = ({counterState, dispatch}: CounterTypeSettingsType) => {

    const [maxValue, setMaxValue] = useState(counterState.maxValue);
    const [startValue, setStartValue] = useState(counterState.startValue);

    const settingsButtonDisabledAndIncorrectInput =
        startValue < 0 || startValue >= maxValue

    // При изменении max value в инпуте
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        // const newMaxValue = Number(e.currentTarget.value);
        // setMaxValue(newMaxValue);
        // dispatchToCounterState({
        //     ...counterState,
        //     maxValue: newMaxValue,
        //     setButtonDisabled: false,
        //     message: "enter values and press 'set'",
        //     incButtonDisabled: true,
        //     resetButtonDisabled: true
        // });

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

        // dispatch(setMaxValueAC(newMaxValue));
        // dispatch(setButtonDisabledAC(false));
        // dispatch(setMessageAC("enter values and press 'set'"));
        // dispatch(setIncButtonDisabledAC(true));
        // dispatch(setResetButtonDisabledAC(true));
    }

    // При изменении start value в инпуте
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        // const newStartValue = Number(e.currentTarget.value);
        // setStartValue(newStartValue);
        // dispatchToCounterState((prev) => {
        //     return {
        //         ...prev,
        //         startValue: newStartValue,
        //         setButtonDisabled: false,
        //         message: "enter values and press 'set'",
        //         incButtonDisabled: true,
        //         resetButtonDisabled: true
        //     }
        // });

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

        // dispatch(setStartValueAC(newStartValue));
        // dispatch(setButtonDisabledAC(false));
        // dispatch(setMessageAC("enter values and press 'set'"));
        // dispatch(setIncButtonDisabledAC(true));
        // dispatch(setResetButtonDisabledAC(true));
    }

    // При клике на кнопку set что у нас происходит
    const onClickButtonSetHandler = () => {
        // debugger
        // dispatchToCounterState({
        //     ...counterState,
        //     countUser: startValue,
        //     maxValue: maxValue,
        //     startValue: startValue,
        //     message: "", // Обновление сообщения после нажатия на кнопку "set"
        //     setButtonDisabled: true, // Обновление состояния для управления активностью кнопки "set"
        //     incButtonDisabled: false, // Обновление состояния для управления активностью кнопки "inc"
        //     resetButtonDisabled: false, // Обновление состояния для управления активностью кнопки "reset"
        // });

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