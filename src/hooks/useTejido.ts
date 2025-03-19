import { useContext } from "react"
import { TejidoContext, TejidoContextType } from "../contexts/TejidoContextDef"

export const useTejido = (): TejidoContextType => {
  const context = useContext(TejidoContext)
  if (context === undefined) {
    throw new Error("useTejido must be used within a TejidoProvider")
  }
  return context
}
