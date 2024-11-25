import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../app/store"
import { Button } from "../../../../../common/components/Button/Button"
import {
   type CounterStateType,
   setCountUserAC,
   setMaxValueAC,
   setStartValueAC,
} from "../../../model/counterState-reducer"
import { DisplayWithSettings } from "./DisplayWithSettings/DisplayWithSettings"

export const CounterTypeSettings = () => {
   const counterState = useSelector<RootState, CounterStateType>((state) => state.counterState)
   const [error, setError] = useState("")
   const [message, setMessage] = useState("")
   const [setButtonDisabled, setSetButtonDisabled] = useState(false)
   const [incButtonDisabled, setIncButtonDisabled] = useState(false)

   const dispatch = useDispatch()

   // const [maxValue, setMaxValue] = useState(counterState.maxValue);
   // const [startValue, setStartValue] = useState(counterState.startValue);

   // При клике на кнопку set что у нас происходит
   const onClickButtonSetHandler = () => {
      // dispatch(
      //    setCounterStateAC({
      //       countUser: counterState.startValue,
      //       maxValue: counterState.maxValue,
      //       startValue: counterState.startValue,
      //       error: "",
      //       message: "",
      //       setButtonDisabled: true,
      //       incButtonDisabled: false,
      //       resetButtonDisabled: false,
      //    }),
      // )
      setError("")
      setMessage("")
      setSetButtonDisabled(true)
      setIncButtonDisabled(false)

      dispatch(setCountUserAC(counterState.countUser))
      dispatch(setMaxValueAC(counterState.maxValue))
      dispatch(setStartValueAC(counterState.countUser))
   }

   const settingsButtonDisabledAndIncorrectInput =
      counterState.startValue < 0 || counterState.startValue >= counterState.maxValue

   return (
      <div>
         <DisplayWithSettings />
         <div className="buttons">
            <Button
               title={"set"}
               onClick={onClickButtonSetHandler}
               disabled={setButtonDisabled || settingsButtonDisabledAndIncorrectInput}
            />
         </div>
      </div>
   )
}
