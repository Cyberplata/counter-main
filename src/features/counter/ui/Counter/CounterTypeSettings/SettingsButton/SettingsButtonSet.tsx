import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../../app/store"
import { Button } from "../../../../../../common/components/Button/Button"
import { setCounterStateAC } from "../../../../model/counterNumbersStateReducer"
import { setUIStateAC } from "../../../../model/counterUIStateReducer"

export const SettingsButtonSet = () => {
   const maxValue = useSelector<RootState, number>((state) => state.numbersState.maxValue)
   const startValue = useSelector<RootState, number>((state) => state.numbersState.startValue)
   const disabled = useSelector<RootState, boolean>((state) => state.uiState.disabled)

   const dispatch = useDispatch()

   // При клике на кнопку set что у нас происходит
   const onClickButtonSetHandler = () => {
      dispatch(setCounterStateAC({
            countUser: startValue,
            maxValue: maxValue,
            startValue: startValue
         })
      )
      // dispatch(setDisabledAC(true))
      // dispatch(setMessageAC(""))
      dispatch(setUIStateAC({ message: "", disabled: true }))
   }

   const settingsButtonDisabledAndIncorrectInput = startValue < 0 || startValue >= maxValue || maxValue < 0

   return <Button
      title={"set"}
      onClick={onClickButtonSetHandler}
      // disabled={!buttonDisabled || settingsButtonDisabledAndIncorrectInput}
      disabled={disabled || settingsButtonDisabledAndIncorrectInput}
   />
}