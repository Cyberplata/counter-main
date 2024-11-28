import React from "react"
import { MaxValueInput } from "./MaxValueInput/MaxValueInput"
import { SettingsButton } from "./SettingsButton/SettingsButton"
import { StartValueInput } from "./StartValueInput/StartValueInput"


export const CounterTypeSettings = () => {
   return (
      <div>
         <div className={"counter-display settings"}>
            <MaxValueInput/>
            <StartValueInput/>
         </div>
         <div className="buttons">
            <SettingsButton/>
         </div>
      </div>
   )
}

