import React from "react"
import { UserDisplayErrorOrMessage } from "./DisplayLogicMessageAndError/UserDisplayErrorOrMessage"
import { UserButtonInc } from "./UserButtonInc/UserButtonInc"
import { UserButtonReset } from "./UserButtonReset/UserButtonReset"

export const CounterTypeUser = () => {
   return (
      <div>
         <UserDisplayErrorOrMessage />

         <div className="buttons">
            <UserButtonInc/>
            <UserButtonReset/>
         </div>
      </div>
   )
}

