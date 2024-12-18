// // Typing
// export type CounterStateType = {
//    countUser: number
//    maxValue: number
//    startValue: number
//    message: string
// }
//
// const initialState: CounterStateType = {
//    countUser: 0,
//    maxValue: 5,
//    startValue: 0,
//    message: ""
// }
//
// export const counterStateReducer = (state = initialState, action: CounterStateReducerActionsType): CounterStateType => {
//    switch (action.type) {
//       case "SET_COUNT_USER":
//          return { ...state, countUser: action.countUser }
//       case "SET_MAX_VALUE":
//          return { ...state, maxValue: action.maxValue }
//       case "SET_START_VALUE":
//          return { ...state, startValue: action.startValue }
//       case "SET_COUNTER_STATE":
//          return { ...state, ...action.payload }
//       case "SET_MESSAGE":
//          return {...state, message: action.message}
//       default:
//          return state
//    }
// }
//
// // Action Creators
// export const setCountUserAC = (countUser: number) => {
//    return {
//       type: "SET_COUNT_USER",
//       countUser
//    } as const
// }
//
// export const setMaxValueAC = (maxValue: number) => {
//    return {
//       type: "SET_MAX_VALUE",
//       maxValue
//    } as const
// }
//
// export const setStartValueAC = (startValue: number) => {
//    return {
//       type: "SET_START_VALUE",
//       startValue
//    } as const
// }
//
// export const setCounterStateAC = (payload: { countUser: number; maxValue: number; startValue: number }) => {
//    return {
//       type: "SET_COUNTER_STATE",
//       payload
//    } as const
// }
//
// // Экшен для обновления сообщения
// export const setMessageAC = (message: string) => ({
//    type: "SET_MESSAGE",
//    message
// } as const)
//
// // запись через ReturnType Actions type
// export type setCountUserActionType = ReturnType<typeof setCountUserAC>
// export type setMaxValueActionType = ReturnType<typeof setMaxValueAC>
// export type setStartValueActionType = ReturnType<typeof setStartValueAC>
// export type setCounterStateActionType = ReturnType<typeof setCounterStateAC>
// export type setMessageActionType = ReturnType<typeof setMessageAC>
//
// // // Лучше создать перечисление для типов экшенов, чтобы избежать ошибок:
// // // Экшен-тайпы
// // export enum CounterStateActionTypes {
// //    SET_COUNT_USER = "SET_COUNT_USER",
// //    SET_MAX_VALUE = "SET_MAX_VALUE",
// //    SET_START_VALUE = "SET_START_VALUE",
// //    SET_COUNTER_STATE = "SET_COUNTER_STATE",
// // }
//
// // Общий тип для всех действий
// export type CounterStateReducerActionsType =
//    | setCountUserActionType
//    | setMaxValueActionType
//    | setStartValueActionType
//    | setCounterStateActionType
//    | setMessageActionType

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

// Actions type
export type CounterNumbersActionsType =
   | ReturnType<typeof setCountUserAC>
   | ReturnType<typeof setMaxValueAC>
   | ReturnType<typeof setStartValueAC>
   | ReturnType<typeof setCounterStateAC>;
