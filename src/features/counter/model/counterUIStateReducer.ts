// Typing
export type CounterUIStateType = {
   message: string;
   disabled: boolean;
};

const initialState: CounterUIStateType = {
   message: "",
   disabled: true,
}

export const counterUIStateReducer = (
   state = initialState,
   action: CounterUIActionsType
): CounterUIStateType => {
   switch (action.type) {
      case "SET_UI_STATE":
         return { ...state, ...action.payload }
      default:
         return state
   }
}

// Action Creators
export const setUIStateAC = (payload: { message: string; disabled: boolean }) => ({
   type: "SET_UI_STATE",
   payload
} as const)


// Запись через ReturnType
export type SetUIStateActionType = ReturnType<typeof setUIStateAC>

// Actions type
export type CounterUIActionsType = SetUIStateActionType

