import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppRootStateType } from "../../../../../../app/store"
import { Button } from "../../../../../../common/components/Button/Button"
import { setCounterStateAC } from "../../../../model/counterNumbersStateReducer"

export const UserButtonReset = () => {
   const maxValue = useSelector<AppRootStateType, number>((state) => state.numbersState.maxValue)
   const startValue = useSelector<AppRootStateType, number>((state) => state.numbersState.startValue)
   const disabled = useSelector<AppRootStateType, boolean>((state) => state.uiState.disabled)

   const dispatch = useDispatch()

   const onClickButtonResetHandler = () => {
      dispatch(setCounterStateAC({
            countUser: startValue,
            maxValue: maxValue,
            startValue: startValue
         })
      )
   }

   const checkIncorrectValuesReset = startValue < 0 || startValue >= maxValue

   return <Button
      title={"reset"}
      onClick={onClickButtonResetHandler}
      disabled={!disabled || checkIncorrectValuesReset}
   />
}