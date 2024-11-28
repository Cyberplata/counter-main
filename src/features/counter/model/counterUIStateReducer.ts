// Typing
export type CounterUIStateType = {
   message: string;
   disabled: boolean;
};

const initialState: CounterUIStateType = {
   message: "",
   disabled: true
}

export const counterUIStateReducer = (
   state = initialState,
   action: CounterUIActionsType
): CounterUIStateType => {
   switch (action.type) {
      case "SET_MESSAGE":
         return { ...state, message: action.message }
      case "SET_DISABLED":
         return { ...state, disabled: action.disabled }
      case "SET_UI_STATE":
         return { ...state, ...action.payload }
      default:
         return state
   }
}

// Action Creators
export const setMessageAC = (message: string) => ({
   type: "SET_MESSAGE",
   message
} as const)

export const setDisabledAC = (disabled: boolean) => ({
   type: "SET_DISABLED",
   disabled
} as const)

export const setUIStateAC = (payload: { message: string; disabled: boolean }) => ({
   type: "SET_UI_STATE",
   payload
} as const)


// Actions type
export type CounterUIActionsType =
   | ReturnType<typeof setMessageAC>
   | ReturnType<typeof setDisabledAC>
   | ReturnType<typeof setUIStateAC>

