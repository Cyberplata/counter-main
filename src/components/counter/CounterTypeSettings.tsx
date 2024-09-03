import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import {Button} from "../Button";
import {CounterStateType} from "../../App";
import {Input} from "../Input";
import {Label} from "../Label";
import {
    CounterStateActionsType,
    setButtonDisabledAC, setCounterStateAC, setIncButtonDisabledAC,
    setMaxValueAC,
    setMessageAC, setResetButtonDisabledAC, setStartValueAC
} from "../../model/counterState-reducer";

type CounterTypeSettingsType = {
    counterState: CounterStateType
    dispatchToCounterState: React.Dispatch<CounterStateActionsType>
    // setCounterState: Dispatch<SetStateAction<CounterStateType>>
}

export const CounterTypeSettings = ({
                                        counterState,
                                        dispatchToCounterState
                                    }: CounterTypeSettingsType) => {

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
        dispatchToCounterState(setMaxValueAC(newMaxValue));
        dispatchToCounterState(setButtonDisabledAC(false));
        dispatchToCounterState(setMessageAC("enter values and press 'set'"));
        dispatchToCounterState(setIncButtonDisabledAC(true));
        dispatchToCounterState(setResetButtonDisabledAC(true));
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
        dispatchToCounterState(setStartValueAC(newStartValue));
        dispatchToCounterState(setButtonDisabledAC(false));
        dispatchToCounterState(setMessageAC("enter values and press 'set'"));
        dispatchToCounterState(setIncButtonDisabledAC(true));
        dispatchToCounterState(setResetButtonDisabledAC(true));
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

        dispatchToCounterState(setCounterStateAC({
            countUser: startValue,
            maxValue: maxValue,
            startValue: startValue,
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