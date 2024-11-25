import { v1 } from "uuid"

export type DisplaysType = {
   id: string
   title: string
   type: "settings" | "user"
}

let displayId1 = v1()
let displayId2 = v1()

// // Глобальный стейт наших дисплеев-счётчиков
// const counter: DisplaysType[] = [
//     {id: displayId1, title: "Counter display with settings", type: 'settings'},
//     {id: displayId2, title: "User's display Counter", type: 'user'},
// ]

const initialState: DisplaysType[] = [
   { id: displayId1, title: "Counter display with settings", type: "settings" },
   { id: displayId2, title: "User's display Counter", type: "user" },
]

export const displaysReducer = (state: DisplaysType[] = initialState, action: any): DisplaysType[] => {
   switch (action.type) {
      default:
         return state
   }
}

// Actions creators
export const displaysAC = () => {
   return {
      type: "DISPLAYS_STATE",
   }
}
