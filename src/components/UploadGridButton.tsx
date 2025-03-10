export default function UploadGridButton({
  setSquareSize,
  setFirstImageWidth,
  setSecondImageWidth,
  setGridValues,
  setColumns,
  setRows,
}: {
  setSquareSize: (squareSize: number) => void
  setFirstImageWidth: (firstImageWidth: number) => void
  setSecondImageWidth: (secondImageWidth: number) => void
  setGridValues: (gridValues: number[][]) => void
  setColumns: (columns: number) => void
  setRows: (rows: number) => void
}) {
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const fileData = JSON.parse(e.target?.result as string)
        const {
          columns,
          rows,
          values,
          squareSize,
          firstImageWidth,
          secondImageWidth,
        } = fileData
        if (columns && rows && values) {
          setGridValues(values)
          setSquareSize(squareSize)
          setFirstImageWidth(firstImageWidth)
          setSecondImageWidth(secondImageWidth)
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
