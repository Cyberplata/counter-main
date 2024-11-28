import React, { type ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../../app/store"
import { Input } from "../../../../../../common/components/Input/Input"
import { Label } from "../../../../../../common/components/Label/Label"
import { setStartValueAC } from "../../../../model/counterState-reducer"

export const StartValueInput = () => {
   const startValue = useSelector<RootState, number>((state) => state.counterState.startValue)
   const errorClassName = useSelector<RootState, string>((state) => {
      return state.counterState.startValue < 0 || state.counterState.startValue >= state.counterState.maxValue || state.counterState.maxValue < 0 ? "red" : ""
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