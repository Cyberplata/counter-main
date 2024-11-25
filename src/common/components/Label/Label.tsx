import { ReactNode } from "react"

export type LabelType = {
   children: ReactNode
   className?: string
   htmlFor?: string
}

export const Label = ({ children, className, htmlFor }: LabelType) => {
   return (
      <label className={className} htmlFor={htmlFor}>
         {children}
      </label>
   )
}
