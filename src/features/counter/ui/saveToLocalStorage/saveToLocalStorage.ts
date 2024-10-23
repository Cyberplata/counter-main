import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../app/store";
import {type CounterStateType, setCounterStateAC} from "../../model/counterState-reducer";

export const SaveToLocalStorage = () => {
    const counterState = useSelector<RootState, CounterStateType>(state => state.counterState)

    const dispatch = useDispatch()

    useEffect(() => {
        const storedState = localStorage.getItem('counterValue');
        if (storedState) {
            const newValue = JSON.parse(storedState);
            dispatch(setCounterStateAC(newValue));
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify({
            countUser: counterState.countUser,
            maxValue: counterState.maxValue,
            startValue: counterState.startValue,
        }));
    }, [counterState]);
}