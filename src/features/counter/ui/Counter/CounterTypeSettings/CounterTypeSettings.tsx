import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../app/store"
import { Button } from "../../../../../common/components/Button/Button"
import { type CounterStateType, setCounterStateAC } from "../../../model/counterState-reducer"
import { DisplayWithSettings } from "./DisplayWithSettings/DisplayWithSettings"

export const CounterTypeSettings = () => {
   const { countUser, maxValue, startValue } = useSelector<RootState, CounterStateType>((state) => state.counterState)
   const dispatch = useDispatch()

   const [message, setMessage] = useState("")
   const [setButtonDisabled, setSetButtonDisabled] = useState(true)

   // При клике на кнопку set что у нас происходит
   const onClickButtonSetHandler = () => {
      dispatch(
         setCounterStateAC({
            countUser: countUser,
            maxValue: maxValue,
            startValue: startValue,
         }),
      )
      setSetButtonDisabled(true)
      setMessage("")
   }

   const settingsButtonDisabledAndIncorrectInput = startValue < 0 || startValue >= maxValue

   return (
      <div>
         <DisplayWithSettings message={message} setMessage={setMessage} />
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
