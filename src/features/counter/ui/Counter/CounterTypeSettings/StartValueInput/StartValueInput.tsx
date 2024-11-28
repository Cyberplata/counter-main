import React, { type ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../../app/store"
import { Input } from "../../../../../../common/components/Input/Input"
import { Label } from "../../../../../../common/components/Label/Label"
import { setStartValueAC } from "../../../../model/counterNumbersStateReducer"

export const StartValueInput = () => {
   const startValue = useSelector<RootState, number>((state) => state.numbersState.startValue)
   const errorClassName = useSelector<RootState, string>((state) => {
      return state.numbersState.startValue < 0 || state.numbersState.startValue >= state.numbersState.maxValue || state.numbersState.maxValue < 0 ? "red" : ""
   })

   const dispatch = useDispatch()

   const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const newStartValue = Number(e.currentTarget.value)
      dispatch(setStartValueAC(newStartValue))
   }

   return <Label htmlFor={"startValueInput"}>
      start value:
      <Input
         id={"startValueInput"}
         className={`inputSettings ${errorClassName}`}
         type="number"
         value={startValue}
         onChange={onChangeStartValueHandler}
      />
   </Label>
}