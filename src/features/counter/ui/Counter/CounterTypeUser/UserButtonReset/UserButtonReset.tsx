import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../../app/store"
import { Button } from "../../../../../../common/components/Button/Button"
import { setCounterStateAC } from "../../../../model/counterNumbersStateReducer"

export const UserButtonReset = () => {
   const maxValue = useSelector<RootState, number>((state) => state.numbersState.maxValue)
   const startValue = useSelector<RootState, number>((state) => state.numbersState.startValue)

   const dispatch = useDispatch()

   const onClickButtonResetHandler = () => {
      // debugger
      // setButtonDisabled(false)
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
      disabled={checkIncorrectValuesReset}
   />
}