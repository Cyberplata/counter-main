import React from "react"
import { CounterTypeSettings } from "./CounterTypeSettings/CounterTypeSettings"
import { CounterTypeUser } from "./CounterTypeUser/CounterTypeUser"

type Props = {
   title: string
   type: "settings" | "user"
}

export const Counter = (props: Props) => {
   const { title, type } = props

   return (
      <div className="counter">
         <h3 className="title">{title}</h3>
         { type === "settings" && <CounterTypeSettings /> }
         { type === "user" && <CounterTypeUser /> }
      </div>
   )
}
