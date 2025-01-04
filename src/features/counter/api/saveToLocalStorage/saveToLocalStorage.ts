import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppRootStateType } from "../../../../app/store"
import { type CounterNumbersStateType, setCountUserAC } from "../../model/counterNumbersStateReducer"

export const SaveToLocalStorage = () => {
   // debugger
   const counterNumbers = useSelector<AppRootStateType, CounterNumbersStateType>((state) => state.numbersState)

   const dispatch = useDispatch()

   useEffect(() => {
      const storedState = localStorage.getItem("counterValue")
      if (storedState) {
         const newValue = JSON.parse(storedState)
         console.log(newValue)
         // dispatch(setCounterStateAC(newValue))
         dispatch(setCountUserAC(newValue))
      }
   }, [dispatch])

   useEffect(() => {
      localStorage.setItem(
         "counterValue",
         JSON.stringify({
            countUser: counterNumbers.countUser,
            maxValue: counterNumbers.maxValue,
            startValue: counterNumbers.startValue,
         }),
      )
   }, [counterNumbers])
}
