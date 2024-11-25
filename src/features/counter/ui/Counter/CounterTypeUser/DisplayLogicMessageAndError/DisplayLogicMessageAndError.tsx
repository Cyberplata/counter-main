import React, { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../../../app/store"
import type { CounterStateType } from "../../../../model/counterState-reducer"

export const DisplayLogicMessageAndError = () => {
   const { countUser, maxValue, startValue } = useSelector<RootState, CounterStateType>((state) => state.counterState)
   const [message, setMessage] = useState("")

   const error = (startValue < 0 || startValue >= maxValue) && "incorrect Value"

   // Проверка на выполнения условий при увеличении - клике на кнопку inc
   const checkIncorrectValuesInc = startValue < 0 || countUser >= maxValue || startValue >= maxValue

   return (
      <>
         {error || message ? (
            <div className={"counter-display"}>
               <div className={`"error" ${error ? "error" : "message"}`}>{error || message}</div>
            </div>
         ) : (
            <div className={`counter-display ${checkIncorrectValuesInc ? "red" : ""}`}>{countUser}</div>
         )}
      </>
   )
}
