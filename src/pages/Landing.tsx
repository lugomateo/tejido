import { useEffect, useState } from "react"
import DownloadGridButton from "../components/DownloadGridButton"
import RowsInput from "../components/RowsInput"
import TejidoGrid from "../components/TejidoGrid"
import ColumnsInput from "../components/ColumnsInput"
import PatternInput from "../components/PatternInput"
import UploadGridButton from "../components/UploadGridButton"
import gridData from "../../default-grid.json"
import TejidoPreview from "../components/TejidoPreview"
import UploadImageButton from "../components/UploadImageButton"
import ImageControls from "../components/ImageControls"

export default function Landing() {
  const [gridValues, setGridValues] = useState(gridData.values)
  const [columns, setColumns] = useState(gridData.columns)
  const [rows, setRows] = useState(gridData.rows)
  const [firstImage, setFirstImage] = useState("")
  const [secondImage, setSecondImage] = useState("")
  const [firstImagePreview, setFirstImagePreview] = useState(true)
  const [secondImagePreview, setSecondImagePreview] = useState(true)
  const [firstImageWidth, setFirstImageWidth] = useState(512)
  const [secondImageWidth, setSecondImageWidth] = useState(512)
  const [squareSize, setSquareSize] = useState(16)

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

  return (
    <div>
      <h1 className="title">tejido</h1>
      <div className="ui-container">
        <div className="input-container">
          <ColumnsInput columns={columns} setColumns={setColumns} />
          <RowsInput rows={rows} setRows={setRows} />
          <PatternInput
            setGridValues={setGridValues}
            squareSize={squareSize}
            setSquareSize={setSquareSize}
            columns={columns}
            rows={rows}
          />
          <UploadImageButton
            setFirstImage={setFirstImage}
            setSecondImage={setSecondImage}
          />
          <ImageControls
            firstImagePreview={firstImagePreview}
            secondImagePreview={secondImagePreview}
            setFirstImagePreview={setFirstImagePreview}
            setSecondImagePreview={setSecondImagePreview}
            setFirstImageWidth={setFirstImageWidth}
            setSecondImageWidth={setSecondImageWidth}
            firstImageWidth={firstImageWidth}
            secondImageWidth={secondImageWidth}
          />
          <DownloadGridButton
            squareSize={squareSize}
            firstImageWidth={firstImageWidth}
            secondImageWidth={secondImageWidth}
            grid={{
              values: gridValues,
              columns,
              rows,
            }}
          />
          <UploadGridButton
            setSquareSize={setSquareSize}
            setFirstImageWidth={setFirstImageWidth}
            setSecondImageWidth={setSecondImageWidth}
            setGridValues={setGridValues}
            setColumns={setColumns}
            setRows={setRows}
          />
        </div>
        <div className="tejido-preview-container">
          <TejidoGrid
            firstImage={firstImage}
            secondImage={secondImage}
            firstImageWidth={firstImageWidth}
            secondImageWidth={secondImageWidth}
            firstImagePreview={firstImagePreview}
            secondImagePreview={secondImagePreview}
            setGridValues={setGridValues}
            squareSize={squareSize}
            grid={{
              values: gridValues,
              columns,
              rows,
            }}
          />
          <TejidoPreview
            firstImage={firstImage}
            secondImage={secondImage}
            gridValues={gridValues}
            columns={columns}
            rows={rows}
          />
        </div>
      </div>
    </div>
  )
}
