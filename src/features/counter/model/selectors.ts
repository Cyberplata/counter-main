// selectors.ts
import type { RootState } from "../../../app/store"

export const selectIsSetButtonDisabled = (state: RootState) => {
   const { maxValue, startValue } = state.counterState
   return startValue < 0 || startValue >= maxValue
}
