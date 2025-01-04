// Typing
export type CounterNumbersStateType = {
   countUser: number;
   maxValue: number;
   startValue: number;
};

const initialState: CounterNumbersStateType = {
   countUser: 0,
   maxValue: 5,
   startValue: 0
}

export const counterNumbersStateReducer = (
   state = initialState,
   action: CounterNumbersActionsType
): CounterNumbersStateType => {
   switch (action.type) {
      case "SET_COUNT_USER":
         return { ...state, countUser: action.countUser }
      case "SET_MAX_VALUE":
         return { ...state, maxValue: action.maxValue }
      case "SET_START_VALUE":
         return { ...state, startValue: action.startValue }
      case "SET_COUNTER_STATE":
         return { ...state, ...action.payload }
      default:
         return state
   }
}

// Action Creators
export const setCountUserAC = (countUser: number) => ({
   type: "SET_COUNT_USER",
   countUser
} as const)

export const setMaxValueAC = (maxValue: number) => ({
   type: "SET_MAX_VALUE",
   maxValue
} as const)

export const setStartValueAC = (startValue: number) => ({
   type: "SET_START_VALUE",
   startValue
} as const)

export const setCounterStateAC = (payload: {
   countUser: number;
   maxValue: number;
   startValue: number;
}) => ({
   type: "SET_COUNTER_STATE",
   payload
} as const)

// Запись через ReturnType
export type SetCountUserActionType = ReturnType<typeof setCountUserAC>
export type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
export type SetStartValueActionType = ReturnType<typeof setStartValueAC>
export type SetCounterStateActionType = ReturnType<typeof setCounterStateAC>

// Actions type
export type CounterNumbersActionsType =
   | SetCountUserActionType
   | SetMaxValueActionType
   | SetStartValueActionType
   | SetCounterStateActionType
