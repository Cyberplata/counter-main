import React, { ChangeEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../../app/store"
import { Input } from "../../../../../../common/components/Input/Input"
import { Label } from "../../../../../../common/components/Label/Label"
import { type CounterStateType, setMaxValueAC } from "../../../../model/counterState-reducer"

export const DisplayWithSettings = () => {
   const counterState = useSelector<RootState, CounterStateType>((state) => state.counterState)
   const [message, setMessage] = useState("")

   const dispatch = useDispatch()

   // const [maxValue, setMaxValue] = useState(counterState.maxValue)
   // const [startValue, setStartValue] = useState(counterState.startValue)

   // При изменении max value в инпуте
   const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const newMaxValue = Number(e.currentTarget.value)

      dispatch(setMaxValueAC(newMaxValue))
      setMessage("enter values and press 'set'")

      // setMaxValue(newMaxValue)
      // dispatch(
      //    updateCounterSettingsAC({
      //       maxValue: newMaxValue,
      //       startValue,
      //       setButtonDisabled: false,
      //       message: "enter values and press 'set'",
      //       incButtonDisabled: true,
      //       resetButtonDisabled: true,
      //    }),
      // )
   }

   // При изменении start value в инпуте
   const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const newStartValue = Number(e.currentTarget.value)

      // setStartValue(newStartValue)
      // dispatch(
      //    updateCounterSettingsAC({
      //       maxValue,
      //       startValue: newStartValue,
      //       setButtonDisabled: false,
      //       message: "enter values and press 'set'",
      //       incButtonDisabled: true,
      //       resetButtonDisabled: true,
      //    }),
      // )
   }

   const settingsButtonDisabledAndIncorrectInput =
      counterState.startValue < 0 || counterState.startValue >= counterState.maxValue

   return (
      <div className={"counter-display settings"}>
         <Label htmlFor={"maxValueInput"}>
            max value:
            <Input
               id={"maxValueInput"}
               className={`inputSettings ${counterState.startValue >= counterState.maxValue ? "red" : ""}`}
               type="number"
               value={counterState.maxValue}
               onChange={onChangeMaxValueHandler}
            />
         </Label>
         <Label htmlFor={"startValueInput"}>
            start value:
            <Input
               id={"startValueInput"}
               className={`inputSettings ${settingsButtonDisabledAndIncorrectInput ? "red" : ""}`}
               type="number"
               value={counterState.startValue}
               onChange={onChangeStartValueHandler}
            />
         </Label>
      </div>
   )
}
