import { useTejido } from "../hooks/useTejido"

export default function UploadGridButton() {
  const { setSquareSize, setGridValues, setColumns, setRows } = useTejido()

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const fileData = JSON.parse(e.target?.result as string)
        const { columns, rows, values, squareSize } = fileData
        if (columns && rows && values) {
          setGridValues(values)
          setSquareSize(squareSize)
          setColumns(columns)
          setRows(rows)
        } else {
          console.error("Invalid grid values")
        }
      }
      reader.readAsText(file)
    }
  }
  return (
    <div className="upload-button">
      <label className="upload-button__label">Upload Pattern</label>
      <input type="file" accept=".json" onChange={handleUpload} />
    </div>
  )
}
