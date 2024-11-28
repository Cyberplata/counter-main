import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../../app/store"
import { Button } from "../../../../../../common/components/Button/Button"
import { setCounterStateAC, setMessageAC } from "../../../../model/counterState-reducer"

export const SettingsButton = () => {
   const maxValue = useSelector<RootState, number>((state) => state.counterState.maxValue)
   const startValue = useSelector<RootState, number>((state) => state.counterState.startValue)
   const dispatch = useDispatch()

   // При клике на кнопку set что у нас происходит
   const onClickButtonSetHandler = () => {
      dispatch(setCounterStateAC({
            countUser: startValue,
            maxValue: maxValue,
            startValue: startValue
         })
      )
      // setButtonDisabled(false)
      dispatch(setMessageAC(""))
   }

   const settingsButtonDisabledAndIncorrectInput = startValue < 0 || startValue >= maxValue || maxValue < 0

   return <Button
      title={"set"}
      onClick={onClickButtonSetHandler}
      // disabled={!buttonDisabled || settingsButtonDisabledAndIncorrectInput}
      disabled={settingsButtonDisabledAndIncorrectInput}
   />
}