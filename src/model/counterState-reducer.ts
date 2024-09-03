// counterState-reducer.ts
import { CounterStateType } from "../AppWithReducer";
import { v1 } from "uuid";


// Общий тип для всех действий
export type CounterStateActionsType =
    | ReturnType<typeof setCountUserAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setMessageAC>
    | ReturnType<typeof setButtonDisabledAC>
    | ReturnType<typeof setIncButtonDisabledAC>
    | ReturnType<typeof setResetButtonDisabledAC>
    | ReturnType<typeof setCounterStateAC>;


const initialState: CounterStateType = {
    countUser: 0,
    maxValue: 5,
    startValue: 0,
    error: "",
    message: "",
    setButtonDisabled: false,
    incButtonDisabled: false,
    resetButtonDisabled: false
};

export const counterStateReducer = (
    state: CounterStateType = initialState,
    action: CounterStateActionsType
): CounterStateType => {
    switch (action.type) {
        case 'SET_COUNT_USER':
            return { ...state, countUser: action.payload };
        case 'SET_MAX_VALUE':
            return { ...state, maxValue: action.payload };
        case 'SET_START_VALUE':
            return { ...state, startValue: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        case 'SET_MESSAGE':
            return { ...state, message: action.payload };
        case 'SET_BUTTON_DISABLED':
            return { ...state, setButtonDisabled: action.payload };
        case 'SET_INC_BUTTON_DISABLED':
            return { ...state, incButtonDisabled: action.payload };
        case 'SET_RESET_BUTTON_DISABLED':
            return { ...state, resetButtonDisabled: action.payload };
        case 'SET_COUNTER_STATE':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

// Action Creators
export const setCountUserAC = (payload: number) => {
    return {
        type: 'SET_COUNT_USER',
        payload,
    } as const;
};

export const setMaxValueAC = (payload: number) => {
    return {
        type: 'SET_MAX_VALUE',
        payload,
    } as const;
};

export const setStartValueAC = (payload: number) => {
    return {
        type: 'SET_START_VALUE',
        payload,
    } as const;
};

export const setErrorAC = (payload: string) => {
    return {
        type: 'SET_ERROR',
        payload,
    } as const;
};

export const setMessageAC = (payload: string) => {
    return {
        type: 'SET_MESSAGE',
        payload,
    } as const;
};

export const setButtonDisabledAC = (payload: boolean) => {
    return {
        type: 'SET_BUTTON_DISABLED',
        payload,
    } as const;
};

export const setIncButtonDisabledAC = (payload: boolean) => {
    return {
        type: 'SET_INC_BUTTON_DISABLED',
        payload,
    } as const;
};

export const setResetButtonDisabledAC = (payload: boolean) => {
    return {
        type: 'SET_RESET_BUTTON_DISABLED',
        payload,
    } as const;
};

export const setCounterStateAC = (payload: CounterStateType) => {
    return {
        type: 'SET_COUNTER_STATE',
        payload,
    } as const;
};