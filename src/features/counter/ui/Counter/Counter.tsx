import React from "react"
import { CounterTypeSettings } from "./CounterTypeSettings/CounterTypeSettings"
import { CounterTypeUser } from "./CounterTypeUser/CounterTypeUser"

type Props = {
   title: string
   type: "settings" | "user"
}

export const Counter = (props: Props) => {
   const { title, type } = props
   // const [message, setMessage] = useState("")
   // const [buttonDisabled, setButtonDisabled] = useState(false)

   return (
      <div className="counter">
         <h3 className="title">{title}</h3>
         { type === "settings" && <CounterTypeSettings /> }
         { type === "user" && <CounterTypeUser /> }
      </div>
   )
   // return (
   //    <div className="counter">
   //       <h3 className="title">{title}</h3>
   //       <div style={{ display: type === "settings" ? "block" : "none" }}>
   //          <CounterTypeSettings
   //             message={message}
   //             setMessage={setMessage}
   //             buttonDisabled={buttonDisabled}
   //             setButtonDisabled={setButtonDisabled}
   //          />
   //       </div>
   //       <div style={{ display: type === "user" ? "block" : "none" }}>
   //          <CounterTypeUser
   //             message={message}
   //             buttonDisabled={buttonDisabled}
   //             setButtonDisabled={setButtonDisabled}
   //          />
   //       </div>
   //    </div>
   // );
}
