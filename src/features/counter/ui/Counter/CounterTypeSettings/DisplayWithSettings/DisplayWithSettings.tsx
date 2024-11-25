import React, { ChangeEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../../app/store"
import { Input } from "../../../../../../common/components/Input/Input"
import { Label } from "../../../../../../common/components/Label/Label"
import { type CounterStateType, setMaxValueAC, setStartValueAC } from "../../../../model/counterState-reducer"

// type Props = {
//    message: string
//    setMessage: (message: string) => void
// }

// export const DisplayWithSettings = ({ setMessage }: Props) => {
export const DisplayWithSettings = () => {
   const { maxValue, startValue } = useSelector<RootState, CounterStateType>((state) => state.counterState)
   const dispatch = useDispatch()

   const [message, setMessage] = useState("")
   const [buttonDisabled, setButtonDisabled] = useState(false)

   // При изменении max value в инпуте
   const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const newMaxValue = Number(e.currentTarget.value)
      dispatch(setMaxValueAC(newMaxValue))
      setMessage("Enter values and press 'set'")
      setButtonDisabled(buttonDisabled)
   }

   // При изменении start value в инпуте
   const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const newStartValue = Number(e.currentTarget.value)
      dispatch(setStartValueAC(newStartValue))
      setMessage("Enter values and press 'set'")
      setButtonDisabled(buttonDisabled)
   }

   const settingsButtonDisabledAndIncorrectInput = startValue < 0 || startValue >= maxValue

   return (
      <div className={"counter-display settings"}>
         <Label htmlFor={"maxValueInput"}>
            max value:
            <Input
               id={"maxValueInput"}
               className={`inputSettings ${startValue >= maxValue ? "red" : ""}`}
               type="number"
               value={maxValue}
               onChange={onChangeMaxValueHandler}
            />
         </Label>
         <Label htmlFor={"startValueInput"}>
            start value:
            <Input
               id={"startValueInput"}
               className={`inputSettings ${settingsButtonDisabledAndIncorrectInput ? "red" : ""}`}
               type="number"
               value={startValue}
               onChange={onChangeStartValueHandler}
            />
         </Label>
      </div>
   )
}
