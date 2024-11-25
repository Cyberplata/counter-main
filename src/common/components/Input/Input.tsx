import React, { ChangeEvent } from "react"

export type InputType = {
   type: string
   value: number
   onChange: (e: ChangeEvent<HTMLInputElement>) => void
   className?: string
   placeholder?: string
   id: string
}

export const Input = ({ type, value, onChange, className, placeholder, id }: InputType) => {
   return (
      <input type={type} value={value} onChange={onChange} className={className} placeholder={placeholder} id={id} />
   )
}
