import React, { type ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppRootStateType } from "../../../../../../app/store"
import { Input } from "../../../../../../common/components/Input/Input"
import { Label } from "../../../../../../common/components/Label/Label"
import { setStartValueAC } from "../../../../model/counterNumbersStateReducer"
import { setUIStateAC } from "../../../../model/counterUIStateReducer"

export const StartValueInput = () => {
   const startValue = useSelector<AppRootStateType, number>((state) => state.numbersState.startValue)
   const errorClassName = useSelector<AppRootStateType, string>((state) => {
      return state.numbersState.startValue < 0 || state.numbersState.startValue >= state.numbersState.maxValue || state.numbersState.maxValue < 0 ? "red" : ""
   })

   const dispatch = useDispatch()

   const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const newStartValue = Number(e.currentTarget.value)
      dispatch(setStartValueAC(newStartValue))
      // dispatch(setDisabledAC(false))
      // dispatch(setMessageAC("enter values and press 'set'"))
      dispatch(setUIStateAC({ message: "enter values and press 'set'", disabled: false }))
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