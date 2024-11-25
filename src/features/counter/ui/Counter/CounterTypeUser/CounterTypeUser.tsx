import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../app/store"
import { Button } from "../../../../../common/components/Button/Button"
import { type CounterStateType, setCountUserAC, setStartValueAC } from "../../../model/counterState-reducer"
import { DisplayLogicMessageAndError } from "./DisplayLogicMessageAndError/DisplayLogicMessageAndError"

export const CounterTypeUser = () => {
   const { countUser, maxValue, startValue } = useSelector<RootState, CounterStateType>((state) => state.counterState)

   const [incButtonDisabled, setIncButtonDisabled] = useState(false)
   const dispatch = useDispatch()

   const objForCheckConditions = {
      checkIncorrectValuesInc: startValue < 0 || countUser >= maxValue || startValue >= maxValue,
      checkIncorrectValuesReset: countUser === startValue || startValue < 0 || startValue >= maxValue,
   }

   const onClickButtonIncHandler = () => {
      if (countUser < maxValue) {
         dispatch(setCountUserAC(countUser + 1))
      }
   }

   const onClickButtonResetHandler = () => {
      setIncButtonDisabled(false)
      dispatch(setStartValueAC(startValue))
   }

   return (
      <div>
         <DisplayLogicMessageAndError />

         <div className="buttons">
            <Button
               title={"inc"}
               onClick={onClickButtonIncHandler}
               disabled={objForCheckConditions.checkIncorrectValuesInc || incButtonDisabled}
            />
            <Button
               title={"reset"}
               onClick={onClickButtonResetHandler}
               disabled={objForCheckConditions.checkIncorrectValuesReset || incButtonDisabled}
            />
         </div>
      </div>
   )
}
