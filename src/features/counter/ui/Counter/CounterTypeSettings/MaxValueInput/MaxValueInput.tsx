import React, { type ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../../app/store"
import { Input } from "../../../../../../common/components/Input/Input"
import { Label } from "../../../../../../common/components/Label/Label"
import { setMaxValueAC } from "../../../../model/counterNumbersStateReducer"
import { setUIStateAC } from "../../../../model/counterUIStateReducer"

export const MaxValueInput = () => {
   const maxValue = useSelector<RootState, number>((state) => state.numbersState.maxValue)
   const errorClassName = useSelector<RootState, string>((state) => {
      return state.numbersState.startValue > state.numbersState.maxValue ? "red" : ""
   })

   const dispatch = useDispatch()

   const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const newMaxValue = Number(e.currentTarget.value)
      dispatch(setMaxValueAC(newMaxValue))
      // dispatch(setDisabledAC(false))
      // dispatch(setMessageAC("enter values and press 'set'"))
      dispatch(setUIStateAC({ message: "enter values and press 'set'", disabled: false }))
   }

   return <Label htmlFor={"maxValueInput"}>
      max value:
      <Input
         id={"maxValueInput"}
         className={`inputSettings ${errorClassName}`}
         type="number"
         value={maxValue}
         onChange={onChangeMaxValueHandler}
      />
   </Label>
}