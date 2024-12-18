import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../../app/store"
import { Button } from "../../../../../../common/components/Button/Button"
import { setCountUserAC } from "../../../../model/counterNumbersStateReducer"

export const UserButtonInc = () => {
   const countUser = useSelector<RootState, number>((state) => state.numbersState.countUser)
   const maxValue = useSelector<RootState, number>((state) => state.numbersState.maxValue)
   const startValue = useSelector<RootState, number>((state) => state.numbersState.startValue)
   const disabled = useSelector<RootState, boolean>((state) => state.uiState.disabled)

   const dispatch = useDispatch()

   // const checkIncorrectValuesInc = startValue < 0 || countUser >= maxValue || startValue >= maxValue
   const checkIncorrectValuesInc = startValue < 0 || countUser > maxValue || startValue >= maxValue

   const onClickButtonIncHandler = () => {
      if (countUser < maxValue) {
         dispatch(setCountUserAC(countUser + 1))
      }
   }

   return <Button
      title={"inc"}
      onClick={onClickButtonIncHandler}
      // disabled={checkIncorrectValuesInc || buttonDisabled}
      disabled={!disabled || checkIncorrectValuesInc}
   />
}