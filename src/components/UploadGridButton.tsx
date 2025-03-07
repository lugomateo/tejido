export default function UploadGridButton({
  setGridValues,
  setColumns,
  setRows,
}: {
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
        const { columns, rows, values } = fileData
        if (columns && rows && values) {
          setGridValues(values)
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
      <label htmlFor="upload-grid" className="upload-button__label">
        Upload Grid
      </label>
      <input type="file" accept=".json" onChange={handleUpload} />
    </div>
  )
}
