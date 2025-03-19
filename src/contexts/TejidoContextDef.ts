import { createContext } from "react"

export interface TejidoContextType {
  gridValues: number[][]
  setGridValues: React.Dispatch<React.SetStateAction<number[][]>>
  columns: number
  setColumns: React.Dispatch<React.SetStateAction<number>>
  rows: number
  setRows: React.Dispatch<React.SetStateAction<number>>
  firstImage: string
  setFirstImage: React.Dispatch<React.SetStateAction<string>>
  secondImage: string
  setSecondImage: React.Dispatch<React.SetStateAction<string>>
  downloadImage: string
  setDownloadImage: React.Dispatch<React.SetStateAction<string>>
  squareSize: number
  setSquareSize: React.Dispatch<React.SetStateAction<number>>
  showBorders: boolean
  setShowBorders: React.Dispatch<React.SetStateAction<boolean>>
  generateDownloadImage: () => Promise<void>
  grid: {
    values: number[][]
    columns: number
    rows: number
  }
  gridContainerRef: React.RefObject<HTMLDivElement>
}

export const TejidoContext = createContext<TejidoContextType | undefined>(
  undefined
)
