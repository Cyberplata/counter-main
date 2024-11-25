import React, { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../../../app/store"
import type { CounterStateType } from "../../../../model/counterState-reducer"

export const DisplayLogicMessageAndError = () => {
   const counterState = useSelector<RootState, CounterStateType>((state) => state.counterState)
   const [message, setMessage] = useState("")

   const error = (counterState.startValue < 0 || counterState.startValue >= counterState.maxValue) && "incorrect Value"

   // const checkMessage = () => {
   //    if (error) {
   //       return setMessage(message)
   //    }
   // }

   // Проверка на выполнения условий при увеличении - клике на кнопку inc
   const checkIncorrectValuesInc =
      counterState.startValue < 0 ||
      counterState.countUser >= counterState.maxValue ||
      counterState.startValue >= counterState.maxValue
   return (
      <>
         {/*{error || counterState.message ? (*/}
         {error || message ? (
            <div className={"counter-display"}>
               <div className={`"error" ${error ? "error" : "message"}`}>{error || message}</div>
            </div>
         ) : (
            <div className={`counter-display ${checkIncorrectValuesInc ? "red" : ""}`}>{counterState.countUser}</div>
         )}
      </>
   )
}
