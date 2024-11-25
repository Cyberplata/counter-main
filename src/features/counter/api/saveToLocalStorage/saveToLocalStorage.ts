import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../app/store"
import { type CounterStateType, setCountUserAC } from "../../model/counterState-reducer"

export const SaveToLocalStorage = () => {
   // debugger
   const counterState = useSelector<RootState, CounterStateType>((state) => state.counterState)

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
            countUser: counterState.countUser,
            maxValue: counterState.maxValue,
            startValue: counterState.startValue,
         }),
      )
   }, [counterState])
}
