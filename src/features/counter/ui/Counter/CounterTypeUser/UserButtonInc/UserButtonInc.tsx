import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../../app/store"
import { Button } from "../../../../../../common/components/Button/Button"
import { setCountUserAC } from "../../../../model/counterState-reducer"

export const UserButtonInc = () => {
   const countUser = useSelector<RootState, number>((state) => state.counterState.countUser)
   const maxValue = useSelector<RootState, number>((state) => state.counterState.maxValue)
   const startValue = useSelector<RootState, number>((state) => state.counterState.startValue)

   const dispatch = useDispatch()

   const checkIncorrectValuesInc = startValue < 0 || countUser >= maxValue || startValue >= maxValue

   const onClickButtonIncHandler = () => {
      if (countUser < maxValue) {
         dispatch(setCountUserAC(countUser + 1))
      }
   }

   return <Button
      title={"inc"}
      onClick={onClickButtonIncHandler}
      // disabled={checkIncorrectValuesInc || buttonDisabled}
      disabled={checkIncorrectValuesInc}
   />
}