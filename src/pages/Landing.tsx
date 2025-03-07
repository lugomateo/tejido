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

export default function Landing() {
  const [gridValues, setGridValues] = useState(gridData.values)
  const [columns, setColumns] = useState(gridData.columns)
  const [rows, setRows] = useState(gridData.rows)
  const [firstImage, setFirstImage] = useState("")
  const [secondImage, setSecondImage] = useState("")

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
            columns={columns}
            rows={rows}
          />
          <UploadImageButton
            setFirstImage={setFirstImage}
            setSecondImage={setSecondImage}
          />
          <DownloadGridButton
            grid={{
              values: gridValues,
              columns,
              rows,
            }}
          />
          <UploadGridButton
            setGridValues={setGridValues}
            setColumns={setColumns}
            setRows={setRows}
          />
        </div>
        <TejidoGrid
          setGridValues={setGridValues}
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
  )
}
