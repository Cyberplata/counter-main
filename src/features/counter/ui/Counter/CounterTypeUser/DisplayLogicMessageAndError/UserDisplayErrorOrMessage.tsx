import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../../../app/store"


export const UserDisplayErrorOrMessage = () => {
   const countUser = useSelector<RootState, number>((state) => state.numbersState.countUser)
   const maxValue = useSelector<RootState, number>((state) => state.numbersState.maxValue)
   const startValue = useSelector<RootState, number>((state) => state.numbersState.startValue)
   const message = useSelector<RootState, string>((state) => state.uiState.message)

   const error = (startValue < 0 || startValue >= maxValue) ? "incorrect Value" : null
   const errorClassName = error ? "error" : "message"
   const errorOrMessage = error || message

   // Проверка на выполнения условий при увеличении - клике на кнопку inc
   const classNameCheckIncorrectValuesInc = startValue < 0 || countUser >= maxValue || startValue >= maxValue ? "red" : ""

   return (
      <>
         {errorOrMessage
            ? <div className={"counter-display"}>
               <div className={`"error" ${errorClassName}`}>{errorOrMessage}</div>
            </div>
            : <div className={`counter-display ${classNameCheckIncorrectValuesInc}`}>{countUser}</div>
         }
      </>
   )
}

// const IfConditionTrue = () => {
//    const maxValue = useSelector<RootState, number>((state) => state.counterState.maxValue)
//    const startValue = useSelector<RootState, number>((state) => state.counterState.startValue)
//    const message = useSelector<RootState, string>((state) => state.counterState.message)
//
//    const error = (startValue < 0 || startValue >= maxValue) ? "incorrect Value" : null
//    const errorClassName = error ? "error" : "message"
//    const errorOrMessage = error || message
//
//    return <div className={"counter-display"}>
//       <div className={`"error" ${errorClassName}`}>{errorOrMessage}</div>
//    </div>
// }

// const IfConditionFalse = () => {
//    const countUser = useSelector<RootState, number>((state) => state.counterState.countUser)
//    const maxValue = useSelector<RootState, number>((state) => state.counterState.maxValue)
//    const startValue = useSelector<RootState, number>((state) => state.counterState.startValue)
//
//    // Проверка на выполнения условий при увеличении - клике на кнопку inc
//    const classNameCheckIncorrectValuesInc = startValue < 0 || countUser >= maxValue || startValue >= maxValue ? "red" : ""
//
//    return <div className={`counter-display ${classNameCheckIncorrectValuesInc}`}>{countUser}</div>
// }