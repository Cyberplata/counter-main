import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../../../app/store"
import type { CounterStateType } from "../../../../model/counterState-reducer"

// type Props = {
//    message: string
// }

// export const DisplayLogicMessageAndError = ({ message }: Props) => {
export const DisplayLogicMessageAndError = () => {
   const { countUser, maxValue, startValue, message } = useSelector<RootState, CounterStateType>((state) => state.counterState)

   const error = (startValue < 0 || startValue >= maxValue) ? "incorrect Value" : null

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
   // return (
   //    <div className="counter-display">
   //       {error ? (
   //          <div className="error">{error}</div>
   //       ) : message ? (
   //          <div className="message">{message}</div>
   //       ) : (
   //          <div>{startValue}</div>
   //       )}
   //    </div>
   // );
}
