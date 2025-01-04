import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppRootStateType } from "../../../../../../app/store"
import { Button } from "../../../../../../common/components/Button/Button"
import { setCounterStateAC } from "../../../../model/counterNumbersStateReducer"
import { setUIStateAC } from "../../../../model/counterUIStateReducer"

export const SettingsButtonSet = () => {
   const maxValue = useSelector<AppRootStateType, number>((state) => state.numbersState.maxValue)
   const startValue = useSelector<AppRootStateType, number>((state) => state.numbersState.startValue)
   const disabled = useSelector<AppRootStateType, boolean>((state) => state.uiState.disabled)

   const dispatch = useDispatch()

   // При клике на кнопку set что у нас происходит
   const onClickButtonSetHandler = () => {
      dispatch(setCounterStateAC({
            countUser: startValue,
            maxValue: maxValue,
            startValue: startValue
         })
      )
      dispatch(setUIStateAC({ message: "", disabled: true }))
   }

   const settingsButtonDisabledAndIncorrectInput = startValue < 0 || startValue >= maxValue || maxValue < 0

   return <Button
      title={"set"}
      onClick={onClickButtonSetHandler}
      disabled={disabled || settingsButtonDisabledAndIncorrectInput}
   />
}