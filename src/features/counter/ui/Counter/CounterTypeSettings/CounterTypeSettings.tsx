import React from "react"
import { MaxValueInput } from "./MaxValueInput/MaxValueInput"
import { SettingsButtonSet } from "./SettingsButton/SettingsButtonSet"
import { StartValueInput } from "./StartValueInput/StartValueInput"


export const CounterTypeSettings = () => {
   return (
      <div>
         <div className={"counter-display settings"}>
            <MaxValueInput/>
            <StartValueInput/>
         </div>
         <div className="buttons">
            <SettingsButtonSet/>
         </div>
      </div>
   )
}

