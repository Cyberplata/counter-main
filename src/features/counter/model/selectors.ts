// selectors.ts
import type { RootState } from "../../../app/store"

export const selectIsSetButtonDisabled = (state: RootState) => {
   // const { maxValue, startValue } = state.counterState
   const maxValue = state.numbersState.maxValue
   const startValue = state.numbersState.startValue


   return startValue < 0 || startValue >= maxValue
}
