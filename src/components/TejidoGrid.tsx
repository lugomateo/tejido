interface TejidoGridProps {
  grid: {
    values: number[][]
    columns: number
    rows: number
  }
  setGridValues: (values: number[][]) => void
}

export default function TejidoGrid({ grid, setGridValues }: TejidoGridProps) {
  const handleCellClick = (rowIndex: number, colIndex: number) => {
    const newGridValues = [...grid.values]
    newGridValues[rowIndex][colIndex] =
      newGridValues[rowIndex][colIndex] === 0 ? 1 : 0
    setGridValues(newGridValues)
  }

  return (
    <div
      className="tejido-grid__container"
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
      }}
    >
      {grid.values.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((value, colIndex) => (
            <div
              key={colIndex}
              className={`cell ${value ? "active" : ""}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  )
}
