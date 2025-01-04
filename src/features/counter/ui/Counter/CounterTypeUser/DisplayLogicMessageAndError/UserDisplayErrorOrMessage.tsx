import React from "react"
import { useSelector } from "react-redux"
import { AppRootStateType } from "../../../../../../app/store"


export const UserDisplayErrorOrMessage = () => {
   const countUser = useSelector<AppRootStateType, number>((state) => state.numbersState.countUser)
   const maxValue = useSelector<AppRootStateType, number>((state) => state.numbersState.maxValue)
   const startValue = useSelector<AppRootStateType, number>((state) => state.numbersState.startValue)
   const message = useSelector<AppRootStateType, string>((state) => state.uiState.message)

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