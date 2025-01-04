import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppRootStateType } from "../../../../../../app/store"
import { Button } from "../../../../../../common/components/Button/Button"
import { setCountUserAC } from "../../../../model/counterNumbersStateReducer"

export const UserButtonInc = () => {
   const countUser = useSelector<AppRootStateType, number>((state) => state.numbersState.countUser)
   const maxValue = useSelector<AppRootStateType, number>((state) => state.numbersState.maxValue)
   const startValue = useSelector<AppRootStateType, number>((state) => state.numbersState.startValue)
   const disabled = useSelector<AppRootStateType, boolean>((state) => state.uiState.disabled)

   const dispatch = useDispatch()

   const checkIncorrectValuesInc = startValue < 0 || countUser > maxValue || startValue >= maxValue

   const onClickButtonIncHandler = () => {
      if (countUser < maxValue) {
         dispatch(setCountUserAC(countUser + 1))
      }
   }

   return <Button
      title={"inc"}
      onClick={onClickButtonIncHandler}
      disabled={!disabled || checkIncorrectValuesInc}
   />
}