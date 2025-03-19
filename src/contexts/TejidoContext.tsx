import { useState, useEffect, useRef, ReactNode } from "react"
import gridData from "../../default-grid.json"
import { TejidoContext } from "./TejidoContextDef"
import html2canvas from "html2canvas"

export default function TejidoProvider({ children }: { children: ReactNode }) {
  const [gridValues, setGridValues] = useState(gridData.values)
  const [columns, setColumns] = useState(gridData.columns)
  const [rows, setRows] = useState(gridData.rows)
  const [firstImage, setFirstImage] = useState("")
  const [secondImage, setSecondImage] = useState("")
  const [downloadImage, setDownloadImage] = useState("")
  const [squareSize, setSquareSize] = useState(16)
  const [showBorders, setShowBorders] = useState(false)
  const gridContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setGridValues((currentGridValues) => {
      if (columns > currentGridValues[0].length) {
        return currentGridValues.map((row) => [...row, 0])
      } else if (columns < currentGridValues[0].length) {
        return currentGridValues.map((row) => row.slice(0, columns))
      }
      return currentGridValues
    })
  }, [columns])

  useEffect(() => {
    setGridValues((currentGridValues) => {
      if (rows > currentGridValues.length) {
        return [...currentGridValues, Array(columns).fill(0)]
      } else if (rows < currentGridValues.length) {
        return currentGridValues.slice(0, rows)
      }
      return currentGridValues
    })
  }, [rows, columns])

  const grid = {
    values: gridValues,
    columns,
    rows,
  }

  const generateDownloadImage = async (): Promise<void> => {
    const gridContainer = gridContainerRef.current

    if (!gridContainer) {
      console.error("Could not find grid container element")
      return
    }

    try {
      const canvas = await html2canvas(gridContainer)
      const image = canvas.toDataURL("image/jpg")
      setDownloadImage(image)
    } catch (error) {
      console.error("Error generating image:", error)
    }
  }

  return (
    <TejidoContext.Provider
      value={{
        gridValues,
        setGridValues,
        columns,
        setColumns,
        rows,
        setRows,
        firstImage,
        setFirstImage,
        secondImage,
        setSecondImage,
        downloadImage,
        setDownloadImage,
        squareSize,
        setSquareSize,
        showBorders,
        setShowBorders,
        generateDownloadImage,
        grid,
        gridContainerRef,
      }}
    >
      {children}
    </TejidoContext.Provider>
  )
}
