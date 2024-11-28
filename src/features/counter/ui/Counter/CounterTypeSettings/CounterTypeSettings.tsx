import React, { type ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../app/store"
import { Button } from "../../../../../common/components/Button/Button"
import { Input } from "../../../../../common/components/Input/Input"
import { Label } from "../../../../../common/components/Label/Label"
import {
   type CounterStateType,
   setCounterStateAC,
   setMaxValueAC, setMessageAC,
   setStartValueAC
} from "../../../model/counterState-reducer"

type Props = {
   buttonDisabled: boolean
   setButtonDisabled: (buttonDisabled: boolean) => void
}

export const CounterTypeSettings = ({ buttonDisabled, setButtonDisabled }: Props) => {
   const { maxValue, startValue } = useSelector<RootState, CounterStateType>((state) => state.counterState)
   const dispatch = useDispatch()
   debugger

   // При клике на кнопку set что у нас происходит
   const onClickButtonSetHandler = () => {
      dispatch(setCounterStateAC({
            countUser: startValue,
            maxValue: maxValue,
            startValue: startValue
         })
      )
      setButtonDisabled(false)
      dispatch(setMessageAC(""));
   }


   const settingsButtonDisabledAndIncorrectInput = startValue < 0 || startValue >= maxValue || maxValue < 0

   return (
      <div>
         {/*<DisplayWithSettings message={message} setMessage={setMessage} />*/}

         <div className={"counter-display settings"}>
            <MaxValueInput/>
            <StartValueInput/>
         </div>
         <div className="buttons">
            <Button
               title={"set"}
               onClick={onClickButtonSetHandler}
               disabled={!buttonDisabled || settingsButtonDisabledAndIncorrectInput}
            />
         </div>
      </div>
   )
}

const MaxValueInput = () => {
   const  maxValue = useSelector<RootState, number >((state) => state.counterState.maxValue)
   const errorClassName= useSelector<RootState, string>((state) => {
      return state.counterState?.startValue > state.counterState?.maxValue ? 'red' : ''
   })

   const dispatch = useDispatch()

   const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      debugger
      const newMaxValue = Number(e.currentTarget.value)
      dispatch(setMaxValueAC(newMaxValue))
   }


   return <Label htmlFor={"maxValueInput"}>
      max value:
      <Input
         id={"maxValueInput"}
         className={`inputSettings ${errorClassName}`}
         type="number"
         value={maxValue}
         onChange={onChangeMaxValueHandler}
      />
   </Label>
}

const StartValueInput = () => {
   const  startValue = useSelector<RootState, number >((state) => state.counterState?.startValue)
   const errorClassName= useSelector<RootState, string>((state) => {
      return state.counterState.startValue < 0 || state.counterState.startValue >= state.counterState.maxValue ||  state.counterState.maxValue < 0 ? 'red' : ''
   })

   const dispatch = useDispatch()

   const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      // debugger
      const newStartValue = Number(e.currentTarget.value)
      dispatch(setStartValueAC(newStartValue))
   }


   return  <Label htmlFor={"startValueInput"}>
      start value:
      <Input
         id={"startValueInput"}
         className={`inputSettings ${errorClassName}`}
         type="number"
         value={startValue}
         onChange={onChangeStartValueHandler}
      />
   </Label>
}
