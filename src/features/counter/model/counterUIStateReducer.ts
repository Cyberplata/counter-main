// Typing
export type CounterUIStateType = {
   message: string;
   disabled: boolean;
   // value: number;
};

const initialState: CounterUIStateType = {
   message: "",
   disabled: true,
   // value: 0
}

export const counterUIStateReducer = (
   state = initialState,
   action: CounterUIActionsType
): CounterUIStateType => {
   switch (action.type) {
      // case "SET_MESSAGE":
      //    return { ...state, message: action.payload.message }
      // case "SET_DISABLED":
      //    return { ...state, disabled: action.payload.disabled }
      case "SET_UI_STATE":
         return { ...state, ...action.payload }
      // case "SET_VALUE_FROM_LOCAL_STORAGE":
      //    return { ...state, value: action.payload.value }
      default:
         return state
   }
}

// Action Creators
// export const setMessageAC = (payload: { message: string }) => ({
//    type: "SET_MESSAGE",
//    payload
// } as const)
//
// export const setDisabledAC = (payload: { disabled: boolean }) => ({
//    type: "SET_DISABLED",
//    payload
// } as const)

export const setUIStateAC = (payload: { message: string; disabled: boolean }) => ({
   type: "SET_UI_STATE",
   payload
} as const)
// export const setValueFromLocalStorageAC = (payload: { value: number }) => ({
//    type: "SET_VALUE_FROM_LOCAL_STORAGE",
//    payload
// } as const)


// Запись через ReturnType
export type SetUIStateActionType = ReturnType<typeof setUIStateAC>
// export type SetValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>

// Actions type
export type CounterUIActionsType =
   SetUIStateActionType
   // | SetValueFromLocalStorageActionType

