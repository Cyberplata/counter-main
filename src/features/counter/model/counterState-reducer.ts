// Typing
export type CounterStateType = {
    countUser: number
    maxValue: number
    startValue: number
    error: string
    message: string // Поле для хранения сообщения
    setButtonDisabled: boolean // Поле для управления активностью кнопки "set"
    incButtonDisabled: boolean // Поле для управления активностью кнопки "inc"
    resetButtonDisabled: boolean // Поле для управления активностью кнопки "reset"
}

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
    state = initialState,
    action: CounterStateReducerActionsType
): CounterStateType => {
    switch (action.type) {
        case 'SET_COUNT_USER':
            return {...state, countUser: action.countUser};
        case 'SET_MAX_VALUE':
            return {...state, maxValue: action.maxValue};
        case 'SET_START_VALUE':
            return {...state, startValue: action.startValue};
        case 'SET_ERROR':
            return {...state, error: action.error};
        case 'SET_MESSAGE':
            return {...state, message: action.message};
        case 'SET_BUTTON_DISABLED':
            return {...state, setButtonDisabled: action.setButtonDisabled};
        case 'SET_INC_BUTTON_DISABLED':
            return {...state, incButtonDisabled: action.incButtonDisabled};
        case 'SET_RESET_BUTTON_DISABLED':
            return {...state, resetButtonDisabled: action.resetButtonDisabled};
        case 'SET_COUNTER_STATE':
            return {
                ...state,
                ...action.payload
            };
        case 'UPDATE_COUNTER_SETTINGS':
            return {
                ...state,
                ...action.payload
            };
        case "RESET_COUNTER":
            return {
                ...state,
                countUser: action.payload.countUser,
                setButtonDisabled: action.payload.setButtonDisabled
            }
        default:
            return state;
    }
};

// Action Creators
export const setCountUserAC = (countUser: number) => {
    return {
        type: 'SET_COUNT_USER',
        countUser,
    } as const;
};

export const setMaxValueAC = (maxValue: number) => {
    return {
        type: 'SET_MAX_VALUE',
        maxValue,
    } as const;
};

export const setStartValueAC = (startValue: number) => {
    return {
        type: 'SET_START_VALUE',
        startValue,
    } as const;
};

export const setErrorAC = (error: string) => {
    return {
        type: 'SET_ERROR',
        error,
    } as const;
};

export const setMessageAC = (message: string) => {
    return {
        type: 'SET_MESSAGE',
        message,
    } as const;
};

export const setButtonDisabledAC = (setButtonDisabled: boolean) => {
    return {
        type: 'SET_BUTTON_DISABLED',
        setButtonDisabled,
    } as const;
};

export const setIncButtonDisabledAC = (incButtonDisabled: boolean) => {
    return {
        type: 'SET_INC_BUTTON_DISABLED',
        incButtonDisabled,
    } as const;
};

export const setResetButtonDisabledAC = (resetButtonDisabled: boolean) => {
    return {
        type: 'SET_RESET_BUTTON_DISABLED',
        resetButtonDisabled,
    } as const;
};

export const setCounterStateAC = (payload: {
    countUser: number,
    maxValue: number,
    startValue: number,
    error: string,
    message: string,
    setButtonDisabled: boolean,
    incButtonDisabled: boolean,
    resetButtonDisabled: boolean
}) => {
    return {
        type: 'SET_COUNTER_STATE',
        payload,
    } as const;
};

export const updateCounterSettingsAC = (payload: {
    maxValue: number,
    startValue: number,
    message: string,
    setButtonDisabled: boolean,
    incButtonDisabled: boolean,
    resetButtonDisabled: boolean
}) => {
    return {
        type: 'UPDATE_COUNTER_SETTINGS',
        payload,
    } as const
}

export const resetCounterAC = (payload: {
    countUser: number,
    setButtonDisabled: boolean
}) => {
    return {
        type: 'RESET_COUNTER',
        payload,
    } as const;
};

// запись через ReturnType Actions type
export type setCountUserActionType = ReturnType<typeof setCountUserAC>
export type setMaxValueActionType = ReturnType<typeof setMaxValueAC>
export type setStartValueActionType = ReturnType<typeof setStartValueAC>
export type setErrorActionType = ReturnType<typeof setErrorAC>
export type setMessageActionType = ReturnType<typeof setMessageAC>
export type setButtonDisabledActionType = ReturnType<typeof setButtonDisabledAC>
export type setIncButtonDisabledActionType = ReturnType<typeof setIncButtonDisabledAC>
export type setResetButtonDisabledActionType = ReturnType<typeof setResetButtonDisabledAC>
export type setCounterStateActionType = ReturnType<typeof setCounterStateAC>
export type updateCounterSettingsActionType = ReturnType<typeof updateCounterSettingsAC>
export type resetCounterActionType = ReturnType<typeof resetCounterAC>

// Общий тип для всех действий
export type CounterStateReducerActionsType =
    | setCountUserActionType
    | setMaxValueActionType
    | setStartValueActionType
    | setErrorActionType
    | setMessageActionType
    | setButtonDisabledActionType
    | setIncButtonDisabledActionType
    | setResetButtonDisabledActionType
    | setCounterStateActionType
    | updateCounterSettingsActionType
    | resetCounterActionType;