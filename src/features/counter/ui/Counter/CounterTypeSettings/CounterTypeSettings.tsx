import React, { type ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../app/store"
import { Button } from "../../../../../common/components/Button/Button"
import { Input } from "../../../../../common/components/Input/Input"
import { Label } from "../../../../../common/components/Label/Label"
import {
   type CounterStateType,
   setCounterStateAC,
   setMaxValueAC,
   setStartValueAC
} from "../../../model/counterState-reducer"

type Props = {
   message: string
   setMessage: (message: string) => void
   buttonDisabled: boolean
   setButtonDisabled: (buttonDisabled: boolean) => void
}

export const CounterTypeSettings = ({ setMessage, buttonDisabled, setButtonDisabled }: Props) => {
   const { maxValue, startValue } = useSelector<RootState, CounterStateType>((state) => state.counterState)
   const dispatch = useDispatch()
   debugger
   // При изменении max value в инпуте
   const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      debugger
      const newMaxValue = Number(e.currentTarget.value)
      dispatch(setMaxValueAC(newMaxValue))
      // setMessage("Enter values and press 'set'")
      setButtonDisabled(true)

      if (newMaxValue > startValue) {
         setMessage("Enter values and press 'set'");
      }
   }

   // При изменении start value в инпуте
   const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      debugger
      const newStartValue = Number(e.currentTarget.value)
      dispatch(setStartValueAC(newStartValue))
      // setMessage("Enter values and press 'set'")
      setButtonDisabled(true)

      if (newStartValue < maxValue) {
         setMessage("Enter values and press 'set'");
      }
   }

   // При клике на кнопку set что у нас происходит
   const onClickButtonSetHandler = () => {
      dispatch(setCounterStateAC({
            countUser: startValue,
            maxValue: maxValue,
            startValue: startValue
         })
      )
      setButtonDisabled(false)
      setMessage("")
   }


   // const settingsButtonDisabledAndIncorrectInput = startValue < 0 || startValue >= maxValue
   const settingsButtonDisabledAndIncorrectInput = startValue < 0 || startValue >= maxValue || maxValue < 0

   return (
      <div>
         {/*<DisplayWithSettings message={message} setMessage={setMessage} />*/}
         {/*<DisplayWithSettings />*/}

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
         <div className="buttons">
            <Button
               title={"set"}
               onClick={onClickButtonSetHandler}
               // disabled={!buttonDisabled || settingsButtonDisabledAndIncorrectInput}
               disabled={!buttonDisabled || settingsButtonDisabledAndIncorrectInput}
            />
         </div>
      </div>
   )
}
