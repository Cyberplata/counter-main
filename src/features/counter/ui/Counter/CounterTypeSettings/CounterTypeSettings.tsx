import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../app/store";
import {Button} from "../../../../../common/components/Button/Button";
import {type CounterStateType, setCounterStateAC} from "../../../model/counterState-reducer";
import {DisplayWithSettings} from "./DisplayWithSettings/DisplayWithSettings";


export const CounterTypeSettings = () => {
    const counterState = useSelector<RootState, CounterStateType>(state => state.counterState)
    const dispatch = useDispatch()

    // const [maxValue, setMaxValue] = useState(counterState.maxValue);
    // const [startValue, setStartValue] = useState(counterState.startValue);


    // При клике на кнопку set что у нас происходит
    const onClickButtonSetHandler = () => {
        dispatch(setCounterStateAC({
            countUser: counterState.startValue,
            maxValue: counterState.maxValue,
            startValue: counterState.startValue,
            error: "",
            message: "",
            setButtonDisabled: true,
            incButtonDisabled: false,
            resetButtonDisabled: false,
        }));
    }

    const settingsButtonDisabledAndIncorrectInput =
        counterState.startValue < 0 || counterState.startValue >= counterState.maxValue

    return (
        <div>
            <DisplayWithSettings/>
            <div className="buttons">
                <Button title={"set"}
                        onClick={onClickButtonSetHandler}
                        disabled={counterState.setButtonDisabled || settingsButtonDisabledAndIncorrectInput}
                />
            </div>
        </div>
    );
};