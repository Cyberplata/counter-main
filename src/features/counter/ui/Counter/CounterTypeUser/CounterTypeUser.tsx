import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../app/store"
import { Button } from "../../../../../common/components/Button/Button"
import { type CounterStateType, setCounterStateAC, setCountUserAC } from "../../../model/counterState-reducer"
import { DisplayLogicMessageAndError } from "./DisplayLogicMessageAndError/DisplayLogicMessageAndError"

type Props = {
   message: string
   buttonDisabled: boolean
   setButtonDisabled: (buttonDisabled: boolean) => void
}

export const CounterTypeUser = ({ message, buttonDisabled, setButtonDisabled }: Props) => {
   const { countUser, maxValue, startValue } = useSelector<RootState, CounterStateType>((state) => state.counterState)

   const dispatch = useDispatch()

   const objForCheckConditions = {
      checkIncorrectValuesInc: startValue < 0 || countUser >= maxValue || startValue >= maxValue,
      // checkIncorrectValuesReset: countUser === startValue || startValue < 0 || startValue >= maxValue
      checkIncorrectValuesReset: startValue < 0 || startValue >= maxValue
   }

   const onClickButtonIncHandler = () => {
      if (countUser < maxValue) {
         dispatch(setCountUserAC(countUser + 1))
      }
   }

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

   return (
      <div>
         <DisplayLogicMessageAndError message={message} />

         <div className="buttons">
            <Button
               title={"inc"}
               onClick={onClickButtonIncHandler}
               disabled={objForCheckConditions.checkIncorrectValuesInc || buttonDisabled}
            />
            <Button
               title={"reset"}
               onClick={onClickButtonResetHandler}
               // disabled={objForCheckConditions.checkIncorrectValuesReset || buttonDisabled}
               disabled={objForCheckConditions.checkIncorrectValuesReset}
            />
         </div>
      </div>
   )
}
